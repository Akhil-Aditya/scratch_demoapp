import React, { useState } from "react";
import Icon from "./Icon";

const initialItems = [
  { name: "Move 10 steps", id: "move10steps" },
  { name: "Turn 15 degrees left", id: "turnLeft15degrees" },
  { name: "Turn 15 degrees right", id: "turnRight15degrees" },
  { name: "Say Hello for 2 seconds", id: "sayHello2Seconds" },
  { name: "Say Hello", id: "sayHello" },
  { name: "Think Hmm for 2 seconds", id: "thinkHmm2Seconds" },
  { name: "Think Hmm", id: "thinkHmm" },
  { name: "Change size by", id: "changeSizeBy", editable: true, value: 10 },
  { name: "Set size to", id: "setSizeTo", editable: true, value: 100 },
];

export default function Sidebar() {
  const [items, setItems] = useState(initialItems);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text", JSON.stringify(item));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const item = JSON.parse(data);
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragBack = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const updateValue = (index, value) => {
    const newItems = [...items];
    newItems[index].value = value;
    setItems(newItems);
  };

  return (
    <div
      className="w-80 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      {items.filter(item => item.id.includes("move") || item.id.includes("turn")).map((item, index) => (
        <div
          key={item.id}
          className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
        >
          {item.name}
        </div>
      ))}
      <div className="font-bold"> {"Looks"} </div>
      {items.filter(item => item.id.includes("say") || item.id.includes("think") || item.id.includes("size")).map((item, index) => (
        <div
          key={item.id}
          className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
        >
          {item.name} {item.editable && (
            <input 
              type="number" 
              value={item.value} 
              onChange={(e) => updateValue(index, e.target.value)}
              className="ml-2 w-12"
            />
          )}
        </div>
      ))}
    </div>
  );
}
