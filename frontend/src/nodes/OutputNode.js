import React from 'react';
import { BaseNode } from './BaseNode';

export function OutputNode({ id, data }) {
  return (
    <BaseNode
      title="Output"
      subtitle={id}
      handles={[{ id: `${id}-in`, type: 'target' }]}
    >
      <p>{data?.label || 'Output sink'}</p>
    </BaseNode>
  );
}
