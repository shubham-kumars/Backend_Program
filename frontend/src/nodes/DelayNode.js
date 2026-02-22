import React from 'react';
import { BaseNode } from './BaseNode';

export function DelayNode({ id }) {
  return (
    <BaseNode title="Delay" subtitle="Wait" handles={[{ id: `${id}-in`, type: 'target' }, { id: `${id}-out`, type: 'source' }]}>
      <p>Applies configurable delay.</p>
    </BaseNode>
  );
}
