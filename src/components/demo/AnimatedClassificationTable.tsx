import { useEffect, useState, useRef } from "react";
import rawData from "./classifications.json";
import "./AnimatedClassificationTable.css";

type Status = "Classifying" | "Processing" | "Exporting" | "Completed";

interface ClassificationItem {
  id: number;
  description: string;
  hts_code: string;
  status: Status;
  date: Date;
  stateEnteredAt: number;
}

export default function AnimatedClassificationsTable() {
  const [data, setData] = useState<ClassificationItem[]>(() => {
    return rawData.slice(0, 8).map((item, index) => ({
      id: index + 1,
      description: item.description,
      hts_code: item.hts_code,
      status: "Classifying" as Status,
      date: item.date ? new Date(item.date) : new Date(),
      stateEnteredAt: Date.now() - (index * 200), // Slight stagger
    }));
  });
  const nextIndexRef = useRef(8);

  // Status animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      
      setData((prev) => {
        const updated = prev.map((item) => {
          const timeInState = now - item.stateEnteredAt;
          
          if (item.status === "Classifying") {
            // ~2-3 seconds
            if (timeInState > 2500 && Math.random() < 0.4) {
               return { ...item, status: "Processing" as Status, stateEnteredAt: now };
            }
          } else if (item.status === "Processing") {
            // ~5 seconds
            if (timeInState > 5000 && Math.random() < 0.4) {
               return { ...item, status: "Exporting" as Status, stateEnteredAt: now };
            }
          } else if (item.status === "Exporting") {
            // ~2 seconds
            if (timeInState > 2000 && Math.random() < 0.4) {
               return { ...item, status: "Completed" as Status, stateEnteredAt: now };
            }
          } else if (item.status === "Completed") {
            // Replace row after it has been completed for 5 seconds
            if (timeInState > 5000) { 
               const nextIndex = nextIndexRef.current;
               // Loop back to 0 if we run out of data
               const safeIndex = nextIndex % rawData.length;
               const newItemData = rawData[safeIndex];
               
               // Increment for next time
               nextIndexRef.current += 1;

               return {
                 id: nextIndex + 1,
                 description: newItemData.description,
                 hts_code: newItemData.hts_code,
                 status: "Classifying" as Status,
                 date: new Date(),
                 stateEnteredAt: now
               };
            }
          }
          
          return item;
        });

        // Sort: Active items first, Completed items last
        // Within same group, sort by ID to keep stable order
        return [...updated].sort((a, b) => {
          const aCompleted = a.status === "Completed";
          const bCompleted = b.status === "Completed";
          
          if (aCompleted === bCompleted) {
            return a.id - b.id;
          }
          return aCompleted ? 1 : -1;
        });
      });
    }, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, []);

  const renderStatusTag = (status: string) => {
    if (status === "Completed") {
      return <span className="tag tag--classified">Classified</span>;
    }
    
    if (status === "Exporting") {
        return (
            <span className="tag tag--exporting">
                <span className="spinner" /> Exporting…
            </span>
        );
    }
    
    if (status === "Processing") {
        return (
            <span className="tag tag--processing">
                <span className="spinner" /> Processing…
            </span>
        );
    }

    // Classifying
    return (
      <span className="tag tag--classifying">
        <span className="spinner" /> Classifying…
      </span>
    );
  };

  return (
    <div className="classifications-container">
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
