import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";
import LiveCursors from "./LiveCursors";

type Props = {
  color: string;
  x: number;
  y: number;
  message: string;
  connectionId: number;
};

const Cursor = ({ color, x, y, message, connectionId = 0 }: Props) => {
  const isDefaultMessage = !message;
  const messageText = message || connectionId;
  const messageClass = isDefaultMessage
    ? "text-white whitespace-nowrap text-[0.625rem] leading-relaxed" // ConnectionID styling
    : "text-white whitespace-nowrap text-sm leading-relaxed"; // Message Styling

  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      <div
        className="absolute left-2 top-5 rounded-3xl px-4 py-2"
        style={{ backgroundColor: color }}
      >
        <p className={messageClass}>{messageText}</p>
      </div>
    </div>
  );
};

export default Cursor;
