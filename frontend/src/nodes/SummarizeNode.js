import React from 'react';
import { BaseNode } from './BaseNode';

export function SummarizeNode({ id }) {
  return (
    <BaseNode title="Summarize" subtitle="Condense text" handles={[{ id: `${id}-in`, type: 'target' }, { id: `${id}-out`, type: 'source' }]}>
      <p>Creates short summaries.</p>
    </BaseNode>
  );
}
