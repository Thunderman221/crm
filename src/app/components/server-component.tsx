import React from 'react';

interface ServerComponentProps {
  children?: React.ReactNode;
}
const ServerComponent = ({ children }: ServerComponentProps) => {
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
};

export default ServerComponent;
