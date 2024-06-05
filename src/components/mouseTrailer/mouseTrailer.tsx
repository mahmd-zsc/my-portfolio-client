// MouseTrailer.tsx
"use client";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";

interface MouseTrailerProps {
  hoverProject: boolean;
  hiddenMouse: boolean;
}

const MouseTrailer: React.FC<MouseTrailerProps> = ({
  hoverProject,
  hiddenMouse,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false); // State to track mouse button press

  useEffect(() => {
    const checkTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouchDevice());

    if (!isTouchDevice) {
      const handleMouseMove = (event: MouseEvent) => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      };

      const handleMouseOut = () => setIsMouseInside(false);
      const handleMouseOver = () => setIsMouseInside(true);

      const handleMouseDown = () => setIsMouseDown(true); // Set mouse down state
      const handleMouseUp = () => setIsMouseDown(false); // Reset mouse down state

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseout", handleMouseOut);
        window.removeEventListener("mouseover", handleMouseOver);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null; // Do not render on touch devices
  }

  // Calculate trailer size based on hoverProject and isMouseDown
  const trailerSize = hoverProject ? 120 : isMouseDown ? 30 : 12;

  return (
    !hiddenMouse && (
      <div
        className={`fixed bg-textColor rounded-full pointer-events-none transition-all ease-out duration-500 z-50 flex justify-center items-center ${
          isMouseInside ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - trailerSize / 2}px, ${
            position.y - trailerSize / 2
          }px)`,
          width: `${trailerSize}px`,
          height: `${trailerSize}px`,
          transition: "width 0.3s ease, height 0.3s ease", // Smooth transition for size
        }}
      >
        {hoverProject && (
          <GrLinkNext className="text-3xl font-bold -rotate-45" />
        )}
      </div>
    )
  );
};

export default MouseTrailer;
