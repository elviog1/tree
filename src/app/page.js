"use client";
import { useState } from "react";
import Tree from "./components/Tree";

export default function Home() {
  const [familyTree, setFamilyTree] = useState({
    name: "John Doe",
    type: "yo",
    status: "approved",
    children: [
      {
        name: "Anna Doe",
        type: "Tía",
        status: "pending",
        children: [
          {
            name: "Sophia Doe",
            type: "Hija",
            status: "rejected",
            children: [
              {
                name: "Anna Doe",
                type: "Hermana",
                status: "approved",
                children: [
                  {
                    name: "Sophia Doe",
                    type: "Abuela",
                    status: "pending",
                    children: [],
                  },
                  {
                    name: "Michael Doe",
                    type: "Abuelo",
                    status: "approved",
                    children: [],
                  },
                  {
                    name: "Sophia Doe",
                    type: "Prima",
                    status: "rejected",
                    children: [],
                  },
                  {
                    name: "Michael Doe",
                    type: "Primo",
                    status: "pending",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Michael Doe",
            type: "Novio",
            status: "approved",
            children: [
              {
                name: "James Doe",
                type: "Hijo",
                status: "rejected",
                children: [
                  {
                    name: "Lucas Doe",
                    type: "Nieto",
                    status: "pending",
                    children: [],
                  },
                  {
                    name: "Emily Doe",
                    type: "Nieta",
                    status: "approved",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "James Doe",
        type: "Hermano",
        status: "rejected",
        children: [
          { name: "Lucas Doe", type: "Hijo", status: "approved", children: [] },
          { name: "Emily Doe", type: "Hija", status: "pending", children: [] },
        ],
      },
    ],
  });

  const handleTreeUpdate = (updatedTree) => {
    setFamilyTree(updatedTree); // Actualiza el árbol genealógico
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Tree data={familyTree} onUpdate={handleTreeUpdate} />
    </div>
  );
}
