import React from 'react';
import { Node, Position } from 'reactflow';

const NodePanel = ({ setNodes }: { setNodes: React.Dispatch<React.SetStateAction<Node[]>> }) => {
  const addNode = () => {
    const newNode: Node = {
      id: `${+new Date()}`,
      type: 'default',
      position: { x: Math.random() * 500, y: Math.random() * 500 },
      data: { label: 'New Node' },
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ddd' }}>
      <button onClick={addNode}>Add Text Node</button>
    </div>
  );
};

export default NodePanel;
