import React from 'react';
import { BaseNode } from './BaseNode';

export function ApiNode({ id }) {
  return (
    <BaseNode title="API" subtitle="Fetch Data" handles={[{ id: `${id}-in`, type: 'target' }, { id: `${id}-out`, type: 'source' }]}>
      <p>Calls external HTTP endpoint.</p>
    </BaseNode>
  );
}
