import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-12xl mx-auto px-4 lg:px-40">
      {children}
    </div>
  );
};

export default Container;