import React, { useState } from "react";

export default function MidArea({ onCommand, onDragBack, onDelete }) {
  const [items, setItems] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const item = JSON.parse(data);
    setItems([...items, item]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text", JSON.stringify(item));
  };

  const handleClick = (item) => {
    if (onCommand) {
      onCommand(item);
    }
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onDelete(index);
  };

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 bg-gray-200 my-2 flex justify-between items-center cursor-pointer"
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
        >
          <div onClick={() => handleClick(item)}>
            {item.name} {item.editable && (
              <input 
                type="number" 
                value={item.value} 
                onChange={(e) => {
                  const newItems = [...items];
                  newItems[index].value = e.target.value;
                  setItems(newItems);
                }}
                className="ml-2 w-12"
              />
            )}
          </div>
          <button 
            onClick={() => handleDelete(index)} 
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
