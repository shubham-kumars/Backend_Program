import React, { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { usePipelineStore } from './store';
import { submitPipeline } from './submit';
import { InputNode } from './nodes/InputNode';
import { OutputNode } from './nodes/OutputNode';
import { LlmNode } from './nodes/LlmNode';
import { TextNode } from './nodes/TextNode';
import { ApiNode } from './nodes/ApiNode';
import { FilterNode } from './nodes/FilterNode';
import { SummarizeNode } from './nodes/SummarizeNode';
import { DecisionNode } from './nodes/DecisionNode';
import { DelayNode } from './nodes/DelayNode';

const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  llmNode: LlmNode,
  textNode: TextNode,
  apiNode: ApiNode,
  filterNode: FilterNode,
  summarizeNode: SummarizeNode,
  decisionNode: DecisionNode,
  delayNode: DelayNode,
};

export default function App() {
  const seedNodes = usePipelineStore((state) => state.nodes);
  const seedEdges = usePipelineStore((state) => state.edges);
  const [nodes, setNodes, onNodesChange] = useNodesState(seedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(seedEdges);

  const onConnect = useMemo(() => (connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  const handleSubmit = async () => {
    try {
      const result = await submitPipeline(nodes, edges);
      alert(`Pipeline summary:\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nDAG: ${result.is_dag ? 'Yes' : 'No'}`);
    } catch (error) {
      alert(`Submit failed: ${error.message}`);
    }
  };

  return (
    <div className="app-shell">
      <header>
        <h1>Vector Pipeline Builder</h1>
        <button onClick={handleSubmit}>Submit Pipeline</button>
      </header>
      <div className="canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
