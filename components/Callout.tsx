import React from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  emoji?: string;
  children: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = ({ type = 'info', emoji, children }) => {
  const typeStyles = {
    info: {
      background: '#e0f2fe',
      border: '#0284c7',
      color: '#075985',
    },
    warning: {
      background: '#fef3c7',
      border: '#f59e0b',
      color: '#92400e',
    },
    error: {
      background: '#fee2e2',
      border: '#ef4444',
      color: '#991b1b',
    },
    success: {
      background: '#dcfce7',
      border: '#22c55e',
      color: '#166534',
    },
  };

  const style = typeStyles[type];

  return (
    <div
      style={{
        padding: '12px 16px',
        borderRadius: '6px',
        border: `1px solid ${style.border}`,
        backgroundColor: style.background,
        color: style.color,
        margin: '16px 0',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
      }}
    >
      {emoji && <span style={{ fontSize: '20px', lineHeight: '1' }}>{emoji}</span>}
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default Callout;