import React, { useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const VAR_REGEX = /\{\{\s*([A-Za-z_$][\w$]*)\s*\}\}/g;

export function TextNode({ id, data }) {
  const text = data?.text || '';
  const variables = useMemo(() => {
    const set = new Set();
    let match;
    while ((match = VAR_REGEX.exec(text)) !== null) {
      set.add(match[1]);
    }
    return [...set];
  }, [text]);

  const rows = Math.max(3, text.split('\n').length);
  const cols = Math.min(48, Math.max(22, text.length / rows + 8));

  const variableHandles = variables.map((name, index) => ({
    id: `var-${name}`,
    type: 'target',
    position: Position.Left,
    style: { top: 70 + index * 24 },
  }));

  return (
    <BaseNode
      title="Text"
      subtitle={id}
      handles={[...variableHandles, { id: `${id}-out`, type: 'source' }]}
      className="text-node"
    >
      <textarea className="text-editor" defaultValue={text} rows={rows} cols={cols} readOnly />
      {variables.length > 0 && <small>Variables: {variables.join(', ')}</small>}
    </BaseNode>
  );
}
