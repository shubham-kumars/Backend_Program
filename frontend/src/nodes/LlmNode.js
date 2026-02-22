import React from 'react';
import { BaseNode } from './BaseNode';

export function LlmNode({ id }) {
  return (
    <BaseNode
      title="LLM"
      subtitle="Prompt Processor"
      handles={[{ id: `${id}-prompt`, type: 'target' }, { id: `${id}-resp`, type: 'source' }]}
    >
      <p>Runs prompt against model.</p>
    </BaseNode>
  );
}
