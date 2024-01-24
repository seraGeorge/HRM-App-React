import { useState, useEffect } from "react";
import { Skill } from "../../core/interfaces/interface.ts";
import TooltipWrapper from "./tooltip";

function Tooltip({ message }: { message: Skill[] | string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0 });

  //find mouse position on each mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: (e.clientX / window.innerWidth) * 100 });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);//calculate the mouseposition whenever the mouse moves
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  let tooltipMsg = "";
  if (Array.isArray(message))
    tooltipMsg = message.map((msg) => msg.name).join(", ");
  else tooltipMsg = message;
  return <TooltipWrapper $left={mousePosition.x}>{tooltipMsg}</TooltipWrapper>;
}

export default Tooltip;
