import React from 'react';

const Badge = ({ children, size, color, ...props }: { 
  children: React.ReactNode; 
  size?: string; 
  color?: string; 
  [key: string]: any;
}) => {
  return <span className={`badge ${size || ''} ${color || ''}`} {...props}>{children}</span>;
};

export default Badge;
