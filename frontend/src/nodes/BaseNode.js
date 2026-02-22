import React from 'react';
import { Handle, Position } from 'reactflow';

export function BaseNode({ title, subtitle, children, handles = [], className = '' }) {
  return (
    <div className={`node-card ${className}`}>
      <div className="node-header">
        <h4>{title}</h4>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <div className="node-content">{children}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          id={handle.id}
          position={handle.position || (handle.type === 'source' ? Position.Right : Position.Left)}
          style={handle.style}
        />
      ))}
    </div>
  );
}
