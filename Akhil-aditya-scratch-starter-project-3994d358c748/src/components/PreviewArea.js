import React, { useState, useEffect } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ command }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState("");
  const [thought, setThought] = useState("");
  const [size, setSize] = useState(100);

  useEffect(() => {
    if (command) {
      if (command.id === "reset") {
        setPosition({ x: 50, y: 50 });
        setRotation(0);
        setMessage("");
        setThought("");
        setSize(100);
      } else {
        executeCommand(command);
      }
    }
  }, [command]);

  const executeCommand = (command) => {
    switch (command.id) {
      case "move10steps":
        setPosition((prev) => ({
          x: prev.x + 10 * Math.cos((rotation * Math.PI) / 180),
          y: prev.y + 10 * Math.sin((rotation * Math.PI) / 180),
        }));
        break;
      case "turnLeft15degrees":
        setRotation((prev) => prev - 15);
        break;
      case "turnRight15degrees":
        setRotation((prev) => prev + 15);
        break;
      case "sayHello2Seconds":
        setThought("");
        setMessage("Hello!");
        setTimeout(() => setMessage(""), 2000);
        break;
      case "sayHello":
        setThought("");
        setMessage("Hello!");
        break;
      case "thinkHmm2Seconds":
        setMessage("");
        setThought("Hmm...");
        setTimeout(() => setThought(""), 2000);
        break;
      case "thinkHmm":
        setMessage("");
        setThought("Hmm...");
        break;
      case "changeSizeBy":
        setSize((prevSize) => prevSize + Number(command.value));
        break;
      case "setSizeTo":
        setSize(Number(command.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex-none h-full w-full p-2 relative bg-white border border-gray-400" style={{ height: '500px', width: '500px', overflow: 'hidden' }}>
      <CatSprite position={position} rotation={rotation} size={size} />
      {message && <div className="absolute top-0 left-0">{message}</div>}
      {thought && <div className="absolute top-0 left-0">{thought}</div>}
    </div>
  );
}
