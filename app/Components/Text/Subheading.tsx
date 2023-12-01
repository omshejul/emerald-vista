import React from 'react';

interface SubheadingProps {
  children: React.ReactNode; // More specific type for children
}

const escapeSingleQuotes = (text: string) => {
  return text.replace(/'/g, "&apos;");
};

const Subheading: React.FC<SubheadingProps> = ({ children }) => {
  return (
    <p className='p-4 max-w-5xl text-center'>
      {typeof children === 'string' ? escapeSingleQuotes(children) : children}
    </p>
  );
}

export default Subheading;
