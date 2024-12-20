"use client";
import { useState } from "react";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="ml-4 mt-2">
      <div
        className="cursor-pointer font-medium text-blue-600"
        onClick={() => setExpanded(!expanded)}
      >
        {node.name} {node.children.length > 0 && (expanded ? "[-]" : "[+]")}
      </div>
      {expanded && node.children.length > 0 && (
        <div className="pl-4 border-l-2 border-gray-300">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
