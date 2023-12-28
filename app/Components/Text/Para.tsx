import React from 'react';

interface ParaProps {
  children: React.ReactNode;
}

const escapeSingleQuotes = (text: string) => {
  return text.replace(/'/g, `\u2018`);
};

const Para: React.FC<ParaProps> = ({ children }) => {
  return (
    <p className='p-4 max-w-5xl text-center'>
      {typeof children === 'string' ? escapeSingleQuotes(children) : children}
    </p>
  );
}

export default Para;
