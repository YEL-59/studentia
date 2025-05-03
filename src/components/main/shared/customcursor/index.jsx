import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-[9999]">
      <div
        style={{
          position: "absolute",
          left: position.x - 75,
          top: position.y - 75,
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,195,255,0.3) 0%, rgba(0,120,255,0.1) 40%, transparent 80%)",
          boxShadow: `
            0 0 60px 20px rgba(0,120,255,0.4),
            0 0 80px 30px rgba(0,195,255,0.3),
          `,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default CustomCursor;
