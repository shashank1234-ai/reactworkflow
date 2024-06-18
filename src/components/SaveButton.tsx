import React from 'react';
import { Node, Edge } from 'reactflow';

interface SaveButtonProps {
  nodes: Node[];
  edges: Edge[];
}

const SaveButton: React.FC<SaveButtonProps> = ({ nodes, edges }) => {
  const handleSave = () => {
    const hasMultipleNodes = nodes.length > 1;
    const nodesWithEmptyTargets = nodes.filter(
      (node) => !edges.some((edge) => edge.source === node.id)
    );
    console.log(hasMultipleNodes,nodesWithEmptyTargets)

    
    if ((!hasMultipleNodes && nodesWithEmptyTargets.length<2) || (!hasMultipleNodes && nodesWithEmptyTargets.length>2) ) {
      alert('Error: More than one node has empty target handles.');
    } else {
      alert('Flow saved successfully!');
      // You can add logic here to save the flow to a backend or local storage.
    }
  };

  return <button className='form-control' style={{marginBottom:"1%"}} onClick={handleSave}>Save Flow</button>;
};

export default SaveButton;
