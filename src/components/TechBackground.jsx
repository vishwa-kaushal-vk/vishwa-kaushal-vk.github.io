import { useEffect } from "react";

export default function TechBackground() {
  useEffect(() => {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let mx = w / 2, my = h / 2;

  window.addEventListener("mousemove", e => {
    mx = e.clientX;
    my = e.clientY;
  });

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.5
  }));

  const draw = () => {
    ctx.clearRect(0,0,w,h);
    particles.forEach(p => {
      const dx = (mx - p.x) * 0.0005;
      const dy = (my - p.y) * 0.0005;
      p.x += dx;
      p.y += dy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56,189,248,0.6)";
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  draw();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas id="bg-canvas" />;
}