import { useEffect, useState } from "react";
import rawData from "./classifications.json";
import "./AnimatedClassificationTable.css";

interface ClassificationItem {
  id: number;
  description: string;
  hts_code: string;
  status: string;
  date: Date;
}

const initialData: ClassificationItem[] = rawData.slice(0, 8).map(
  (item, index) => {
    // Normalize Pending → Classifying so we never show "Needs input"
    const normalizedStatus =
      item.status === "Pending" ? "Classifying" : item.status;

    return {
      id: index + 1,
      description: item.description,
      hts_code: item.hts_code,
      status: normalizedStatus,
      date: item.date ? new Date(item.date) : new Date(),
    };
  }
);

function getNextStatus(current: string): string {
  if (current === "Completed") return current;
  if (current === "Checking") return "Classifying";
  return "Completed"; // Classifying → Completed
}

export default function AnimatedClassificationsTable() {
  const [data, setData] = useState<ClassificationItem[]>(initialData);

  // Status animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => {
          // Randomly advance non-completed rows
          if (Math.random() < 0.2 && item.status !== "Completed") {
            const nextStatus = getNextStatus(item.status);
            return { ...item, status: nextStatus };
          }
          return item;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderStatusTag = (status: string) => {
    if (status === "Completed") {
      return <span className="tag tag--classified">Classified</span>;
    }

    // Both Classifying and Checking share the spinner look
    return (
      <span className="tag tag--classifying">
        <span className="spinner" /> Classifying…
      </span>
    );
  };

  return (
    <div className="classifications-container rounded-xl overflow-hidden border border-border shadow-sm">
      <table className="classifications-table">
        <colgroup>
          <col className="col-description" />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>HTS Code</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="description-cell">{row.description}</td>
              <td>{renderStatusTag(row.status)}</td>
              <td className="hts-cell">
                {/* Information "actually shows up" once Completed */}
                {row.status === "Completed" ? row.hts_code : ""}
              </td>
              <td>{row.date.toLocaleDateString("en-US")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
