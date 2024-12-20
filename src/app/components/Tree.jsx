"use client";
import React, { useState } from "react";
import EditModal from "./EditModal";

export default function Tree({ data, onUpdate }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleEdit = (updatedData) => {
    onUpdate(updatedData); // Actualiza el nodo desde el componente padre
    setShowModal(false); // Cierra el modal
  };
  return (
    <div className="flex">
      <button
        className={`w-52 h-16 flex justify-between p-3 duration-200 
    ${data.status === "pending" ? "bg-blue-900 hover:bg-blue-700" : ""}
    ${data.status === "approved" ? "bg-green-600 hover:bg-green-500" : ""}
    ${data.status === "rejected" ? "bg-red-600 hover:bg-red-500" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col">
          <span>{data.name}</span>
          <span className="text-slate-400 text-start">{data.type}</span>
        </div>
        <span
          className="ml-2 bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-400 duration-200"
          onClick={() => setShowModal(true)}
        >
          Edit
        </span>
        <span>{data.children.length > 0 && (expanded ? "[-]" : "[+]")}</span>
      </button>
      {expanded && data.children.length > 0 && (
        <div className="ml-2 border-l-2 border-gray-300">
          {data.children.map((child, index) => (
            <Tree
              key={index}
              data={child}
              onUpdate={(updatedChild) => {
                const updatedChildren = [...data.children];
                updatedChildren[index] = updatedChild;
                onUpdate({ ...data, children: updatedChildren });
              }}
            />
          ))}
        </div>
      )}
      {showModal && (
        <EditModal
          data={data}
          onClose={() => setShowModal(false)}
          onSave={handleEdit}
        />
      )}
    </div>
  );
}
