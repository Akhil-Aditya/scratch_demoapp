import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [command, setCommand] = useState(null);
  const [history, setHistory] = useState([]);

  const handleCommand = (command) => {
    setCommand(command);
    setHistory((prevHistory) => [...prevHistory, command]);
  };

  const handleDragBack = (item) => {
    // handle item being dragged back to the sidebar if needed
  };

  const replayHistory = () => {
    setCommand(null);
    setTimeout(() => {
      history.forEach((cmd, index) => {
        setTimeout(() => {
          setCommand(cmd);
        }, index * 500);
      });
    }, 500);
  };

  const resetSprite = () => {
    setCommand({ id: "reset" });
    setHistory([]);
  };

  const handleDelete = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    setCommand({ id: "reset" });
    setTimeout(() => {
      newHistory.forEach((cmd, i) => {
        setTimeout(() => {
          setCommand(cmd);
        }, i * 500);
      });
    }, 500);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar />
          <MidArea onCommand={handleCommand} onDragBack={handleDragBack} onDelete={handleDelete} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-col bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea command={command} />
          <div className="flex justify-center mt-4">
            <button onClick={replayHistory} className="bg-green-500 text-white px-4 py-2 rounded m-2">
              Replay History
            </button>
            <button onClick={resetSprite} className="bg-red-500 text-white px-4 py-2 rounded m-2">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
