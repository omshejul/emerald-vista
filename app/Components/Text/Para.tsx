import React from 'react';

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

const escapeSingleQuotes = (text: string) => {
  return text.replace(/'/g, `\u2018`);
};

const Para: React.FC<ParaProps> = ({ children, className }) => {
  return (
    <p className={`p-4 max-w-5xl text-center ${className}`}>
      {typeof children === 'string' ? escapeSingleQuotes(children) : children}
    </p>
  );
}

export default Para;
