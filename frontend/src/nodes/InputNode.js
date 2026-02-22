import React from 'react';
import { BaseNode } from './BaseNode';

export function InputNode({ id, data }) {
  return (
    <BaseNode
      title="Input"
      subtitle={id}
      handles={[{ id: `${id}-out`, type: 'source' }]}
    >
      <p>{data?.label || 'Input value'}</p>
    </BaseNode>
  );
}
