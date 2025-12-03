import { useEffect, useRef } from "react";

const ScanningGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanLinePosition = useRef(0);
  const animationFrameId = useRef<number>();

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

      // Background grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let i = 0; i < 24; i++) {
        const x = (rect.width / 24) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let i = 0; i < 16; i++) {
        const y = (rect.height / 16) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Animated scanning line
      scanLinePosition.current += 0.5;
      if (scanLinePosition.current > rect.height) {
        scanLinePosition.current = 0;
      }

      // Scan line gradient
      const gradient = ctx.createLinearGradient(
        0,
        scanLinePosition.current - 50,
        0,
        scanLinePosition.current + 50
      );
      gradient.addColorStop(0, "rgba(255, 116, 0, 0)");
      gradient.addColorStop(0.5, "rgba(255, 116, 0, 0.3)");
      gradient.addColorStop(1, "rgba(255, 116, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanLinePosition.current - 50, rect.width, 100);

      // Main scan line
      ctx.strokeStyle = "rgba(255, 116, 0, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanLinePosition.current);
      ctx.lineTo(rect.width, scanLinePosition.current);
      ctx.stroke();

      // Random data points that light up when scan passes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(i * 1.5 + time * 0.3) * 0.4 + 0.5) * rect.width;
        const y = (Math.cos(i * 1.2 + time * 0.2) * 0.4 + 0.5) * rect.height;
        
        const distanceToScan = Math.abs(y - scanLinePosition.current);
        const intensity = Math.max(0, 1 - distanceToScan / 100);
        
        if (intensity > 0) {
          ctx.fillStyle = `rgba(255, 116, 0, ${intensity * 0.8})`;
          ctx.fillRect(x - 2, y - 2, 4, 4);
          
          // Corner brackets for active points
          if (intensity > 0.5) {
            ctx.strokeStyle = `rgba(255, 116, 0, ${intensity * 0.6})`;
            ctx.lineWidth = 1;
            const size = 8;
            // Top-left
            ctx.beginPath();
            ctx.moveTo(x - size, y - size + 3);
            ctx.lineTo(x - size, y - size);
            ctx.lineTo(x - size + 3, y - size);
            ctx.stroke();
            // Top-right
            ctx.beginPath();
            ctx.moveTo(x + size - 3, y - size);
            ctx.lineTo(x + size, y - size);
            ctx.lineTo(x + size, y - size + 3);
            ctx.stroke();
            // Bottom-left
            ctx.beginPath();
            ctx.moveTo(x - size, y + size - 3);
            ctx.lineTo(x - size, y + size);
            ctx.lineTo(x - size + 3, y + size);
            ctx.stroke();
            // Bottom-right
            ctx.beginPath();
            ctx.moveTo(x + size - 3, y + size);
            ctx.lineTo(x + size, y + size);
            ctx.lineTo(x + size, y + size - 3);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ScanningGrid;
