import React, { useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
  Connection,
  Node,
  Edge
} from 'reactflow';
import 'reactflow/dist/style.css';
import NodePanel from './NodePanel';
import SettingsPanel from './settingsPanel';
import SaveButton from './SaveButton';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

const FlowBuilder = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

  const onNodeClick = (_: any, node: Node) => setSelectedNode(node);

  return (
    <div>
        <div className='align-btn'>
    <SaveButton  nodes={nodes} edges={edges} />
    </div>
    <ReactFlowProvider>
      
      <div style={{ display: 'flex', height: '100vh' }}>
        <NodePanel setNodes={setNodes} />
        <div style={{ flexGrow: 1 }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
          >
            <Background />
            <Controls />
          </ReactFlow>
          {selectedNode && <SettingsPanel selectedNode={selectedNode} setNodes={setNodes} />}
        </div>
       
      </div>
    </ReactFlowProvider>
    </div>

  );
};

export default FlowBuilder;
