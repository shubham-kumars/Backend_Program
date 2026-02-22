import { create } from 'zustand';

const initialNodes = [
  { id: 'input-1', type: 'inputNode', position: { x: 40, y: 140 }, data: { label: 'Source' } },
  { id: 'api-1', type: 'apiNode', position: { x: 290, y: 70 }, data: {} },
  { id: 'filter-1', type: 'filterNode', position: { x: 530, y: 60 }, data: {} },
  { id: 'text-1', type: 'textNode', position: { x: 300, y: 240 }, data: { text: 'Hi {{user}} your score is {{score}}' } },
  { id: 'decision-1', type: 'decisionNode', position: { x: 560, y: 230 }, data: {} },
  { id: 'summarize-1', type: 'summarizeNode', position: { x: 790, y: 200 }, data: {} },
  { id: 'delay-1', type: 'delayNode', position: { x: 1010, y: 200 }, data: {} },
  { id: 'llm-1', type: 'llmNode', position: { x: 790, y: 70 }, data: {} },
  { id: 'output-1', type: 'outputNode', position: { x: 1240, y: 170 }, data: { label: 'Result' } },
];

const initialEdges = [
  { id: 'e1', source: 'input-1', target: 'api-1' },
  { id: 'e2', source: 'api-1', target: 'filter-1' },
  { id: 'e3', source: 'filter-1', target: 'llm-1' },
  { id: 'e4', source: 'input-1', target: 'text-1', targetHandle: 'var-user' },
  { id: 'e5', source: 'filter-1', target: 'text-1', targetHandle: 'var-score' },
  { id: 'e6', source: 'text-1', target: 'decision-1' },
  { id: 'e7', source: 'decision-1', target: 'summarize-1' },
  { id: 'e8', source: 'summarize-1', target: 'delay-1' },
  { id: 'e9', source: 'delay-1', target: 'output-1' },
  { id: 'e10', source: 'llm-1', target: 'output-1' },
];

export const usePipelineStore = create(() => ({
  nodes: initialNodes,
  edges: initialEdges,
}));
