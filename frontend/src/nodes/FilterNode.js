import React from 'react';
import { BaseNode } from './BaseNode';

export function FilterNode({ id }) {
  return (
    <BaseNode title="Filter" subtitle="Rule based" handles={[{ id: `${id}-in`, type: 'target' }, { id: `${id}-pass`, type: 'source' }]}>
      <p>Filters records by condition.</p>
    </BaseNode>
  );
}
