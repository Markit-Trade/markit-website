import React from "react";
import { getBezierPath, EdgeProps } from "@xyflow/react";
import "./ApsEdge.css";

export default function ApsEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <g>
      {/* Gradient definition for animated sweep */}
      <defs>
        <linearGradient id="custom-aps-glow-gradient" x1="0%" x2="100%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="rgba(124,58,237,0.3)" />
          <stop offset="70%" stopColor="rgba(22,163,74,0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Base line */}
      <path
        id={id}
        className="custom-aps-edge-path"
        d={edgePath}
      />

      {/* Animated glow line */}
      <path
        className="custom-aps-edge-glow"
        d={edgePath}
        style={{
          strokeDasharray: "12 12",
          ...style,
        }}
        markerEnd={markerEnd}
      />
    </g>
  );
}
