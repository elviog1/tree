"use client";

import { useState } from "react";

export default function EditModal({ data, onClose, onSave }) {
  const [name, setName] = useState(data.name);
  const [type, setType] = useState(data.type);

  const handleSave = () => {
    onSave({ ...data, name, type });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-black">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Edit Node</h2>
        <label className="block mb-2">Name</label>
        <input
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="block mb-2">Relationship (Type)</label>
        <input
          className="border p-2 w-full mb-4"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-300 duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 duration-200"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
