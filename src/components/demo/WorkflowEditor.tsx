import React from "react";
import ApsEdge from "./ApsEdge";
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  NodeProps,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./WorkflowEditor.css";

const edgeTypes = {
  aps: ApsEdge,
};

function PipelineNode({ data }: NodeProps) {
  const classes = ["aps-node"];
  if (data.variant) classes.push(`aps-node--${data.variant}`);

  return (
    <div className={classes.join(" ")}>

      {/* XYFlow REQUIRED: explicit IDs fix missing-handle error */}
      <Handle id="left" type="target" position={Position.Left} className="xflow-handle" />
      <Handle id="right" type="source" position={Position.Right} className="xflow-handle" />

      <div className="aps-node-header">
        <span className="aps-node-label">{data.label as string}</span>
      </div>

      {data.subtitle && (
        <div className="aps-node-subtitle">{data.subtitle as string}</div>
      )}
    </div>
  );
}

const nodeTypes = { pipelineNode: PipelineNode };

export default function WorkflowEditor({ activeStage = "ingest" }: { activeStage?: "ingest" | "classify" | "review" | "export" }) {
  const initialNodes = [
    {
      id: "ingest-docs",
      type: "pipelineNode",
      position: { x: 0, y: 150 },
      data: { label: "Ingest", subtitle: "Batch Upload", variant: "muted" },
    },
    {
      id: "ocr-text",
      type: "pipelineNode",
      position: { x: 300, y: 50 },
      data: { label: "OCR Text", subtitle: "Extraction", variant: "muted" },
    },
    {
      id: "ocr-table",
      type: "pipelineNode",
      position: { x: 300, y: 250 },
      data: { label: "OCR Table", subtitle: "Line Items", variant: "muted" },
    },
    {
      id: "merge-data",
      type: "pipelineNode",
      position: { x: 600, y: 150 },
      data: { label: "Merge", subtitle: "Consolidation", variant: "muted" },
    },
    {
      id: "classify-hs",
      type: "pipelineNode",
      position: { x: 900, y: 150 },
      data: { label: "Classify", subtitle: "HS Prediction", variant: "muted" },
    },
    {
      id: "risk-check",
      type: "pipelineNode",
      position: { x: 1200, y: 50 },
      data: { label: "Risk", subtitle: "Screening", variant: "muted" },
    },
    {
      id: "compliance-check",
      type: "pipelineNode",
      position: { x: 1200, y: 250 },
      data: { label: "Rules", subtitle: "Compliance", variant: "muted" },
    },
    {
      id: "erp-sync",
      type: "pipelineNode",
      position: { x: 1500, y: 150 },
      data: { label: "ERP Sync", subtitle: "SAP/Oracle", variant: "muted" },
    },
  ];

  const initialEdges = [
    { id: "e1", source: "ingest-docs", target: "ocr-text", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e2", source: "ingest-docs", target: "ocr-table", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e3", source: "ocr-text", target: "merge-data", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e4", source: "ocr-table", target: "merge-data", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e5", source: "merge-data", target: "classify-hs", sourceHandle: "right", targetHandle: "left", type: "aps" },
    { id: "e6", source: "classify-hs", target: "risk-check", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e7", source: "classify-hs", target: "compliance-check", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e8", source: "risk-check", target: "erp-sync", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
    { id: "e9", source: "compliance-check", target: "erp-sync", sourceHandle: "right", targetHandle: "left", type: "default", animated: true },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        let variant = "muted";
        let subtitle = node.data.subtitle;

        // Reset subtitles
        if (node.id === "ingest-docs") subtitle = "Batch Upload";
        if (node.id === "ocr-text") subtitle = "Extraction";
        if (node.id === "ocr-table") subtitle = "Line Items";
        if (node.id === "merge-data") subtitle = "Consolidation";
        if (node.id === "classify-hs") subtitle = "HS Prediction";
        if (node.id === "risk-check") subtitle = "Screening";
        if (node.id === "compliance-check") subtitle = "Compliance";
        if (node.id === "erp-sync") subtitle = "SAP/Oracle";

        // Determine active state
        if (activeStage === "ingest") {
          if (["ingest-docs", "ocr-text", "ocr-table"].includes(node.id)) {
            variant = "primary";
            subtitle = "Processing...";
          }
        } else if (activeStage === "classify") {
          if (["ingest-docs", "ocr-text", "ocr-table"].includes(node.id)) variant = "success";
          if (["merge-data", "classify-hs"].includes(node.id)) {
            variant = "primary";
            subtitle = "Analyzing...";
          }
        } else if (activeStage === "review") {
          if (["ingest-docs", "ocr-text", "ocr-table", "merge-data", "classify-hs"].includes(node.id)) variant = "success";
          if (["risk-check", "compliance-check"].includes(node.id)) {
            variant = "primary";
            subtitle = "Validating...";
          }
        } else if (activeStage === "export") {
          if (node.id !== "erp-sync") variant = "success";
          if (node.id === "erp-sync") {
            variant = "primary";
            subtitle = "Syncing...";
          }
        }

        return {
          ...node,
          data: {
            ...node.data,
            variant,
            subtitle
          },
        };
      })
    );
  }, [activeStage, setNodes]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#f1f5f9" gap={16} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
