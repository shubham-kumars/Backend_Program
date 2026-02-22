import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export function DecisionNode({ id }) {
  return (
    <BaseNode
      title="Decision"
      subtitle="Branch"
      handles={[
        { id: `${id}-in`, type: 'target' },
        { id: `${id}-yes`, type: 'source', position: Position.Right, style: { top: 54 } },
        { id: `${id}-no`, type: 'source', position: Position.Right, style: { top: 88 } },
      ]}
    >
      <p>Splits flow into yes/no.</p>
    </BaseNode>
  );
}
