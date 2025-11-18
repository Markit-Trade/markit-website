import { useEffect, useRef } from "react";

const DataFlowVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      timeRef.current += 0.016;
      const time = timeRef.current;

      // Draw subtle gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      bgGradient.addColorStop(0, "rgba(255, 116, 0, 0.02)");
      bgGradient.addColorStop(1, "rgba(255, 116, 0, 0)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw very subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.01)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let i = 0; i < rect.width; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, rect.height);
        ctx.stroke();
      }
      for (let i = 0; i < rect.height; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(rect.width, i);
        ctx.stroke();
      }

      // Define pipeline architecture with better positions
      const nodes = [
        { x: 0.1, y: 0.5, label: "INGEST", size: 7, isCore: false },
        { x: 0.25, y: 0.3, label: "PARSE", size: 6, isCore: false },
        { x: 0.25, y: 0.7, label: "VALIDATE", size: 6, isCore: false },
        { x: 0.45, y: 0.5, label: "CLASSIFY", size: 8, isCore: true },
        { x: 0.65, y: 0.3, label: "AUDIT", size: 6, isCore: false },
        { x: 0.65, y: 0.7, label: "REPORT", size: 6, isCore: false },
        { x: 0.85, y: 0.5, label: "GOVERN", size: 7, isCore: false },
      ];

      // Draw connection lines with glow
      const connections = [
        [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]
      ];

      connections.forEach(([from, to]) => {
        const fromNode = nodes[from];
        const toNode = nodes[to];
        const fromX = fromNode.x * rect.width;
        const fromY = fromNode.y * rect.height;
        const toX = toNode.x * rect.width;
        const toY = toNode.y * rect.height;

        // Glow effect
        ctx.strokeStyle = "rgba(255, 116, 0, 0.08)";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Main line
        ctx.strokeStyle = "rgba(255, 116, 0, 0.2)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();

        // Animated flow particles along the line
        for (let i = 0; i < 3; i++) {
          const progress = (time * 0.3 + i * 0.3) % 1;
          const px = fromX + (toX - fromX) * progress;
          const py = fromY + (toY - fromY) * progress;
          const opacity = Math.sin(time * 2 + i) * 0.5 + 0.5;
          
          ctx.fillStyle = `rgba(255, 116, 0, ${0.4 * opacity})`;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        const x = node.x * rect.width;
        const y = node.y * rect.height;

        // Outer glow ring
        const glowOpacity = node.isCore ? 0.15 : 0.08;
        ctx.strokeStyle = `rgba(255, 116, 0, ${glowOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, node.size * 2.5, 0, Math.PI * 2);
        ctx.stroke();

        // Middle ring
        ctx.strokeStyle = `rgba(255, 116, 0, ${glowOpacity * 1.5})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, node.size * 1.8, 0, Math.PI * 2);
        ctx.stroke();

        // Core circle
        ctx.fillStyle = node.isCore 
          ? "rgba(255, 116, 0, 0.3)" 
          : "rgba(255, 116, 0, 0.15)";
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Border
        ctx.strokeStyle = `rgba(255, 116, 0, ${node.isCore ? 0.6 : 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = `rgba(255, 116, 0, ${node.isCore ? 0.9 : 0.7})`;
        ctx.beginPath();
        ctx.arc(x, y, node.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing animation on core node
        if (node.isCore) {
          const pulse = Math.sin(time * 2) * 0.5 + 0.5;
          ctx.strokeStyle = `rgba(255, 116, 0, ${0.3 * pulse})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, node.size * (1.5 + pulse * 0.5), 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default DataFlowVisualization;