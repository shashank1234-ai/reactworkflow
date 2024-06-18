import React, { useState } from 'react';
import { Node } from 'reactflow';

const SettingsPanel = ({ selectedNode, setNodes }: { selectedNode: Node; setNodes: React.Dispatch<React.SetStateAction<Node[]>> }) => {
  const [label, setLabel] = useState(selectedNode.data.label);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setLabel(newLabel);

    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { ...node.data, label: newLabel } } : node
      )
    );
  };

  return (
    <div style={{ width: '200px', padding: '10px', borderLeft: '1px solid #ddd' }}>
      <h3>Node Settings</h3>
      <input type="text" value={label} onChange={onChange} />
    </div>
  );
};

export default SettingsPanel;
