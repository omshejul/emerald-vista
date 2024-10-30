import React from 'react';

interface ParaProps {
  children: React.ReactNode;
  className?: string;
}

const escapeSpecialCharacters = (text: string) => {
  return text
    // Handle apostrophes in contractions
    .replace(/(\w)'(\w)/g, '$1\u2019$2')  
    // Handle single quotes
    .replace(/'([^']*)'/g, '\u2018$1\u2019')
    // Handle double quotes
    .replace(/"([^"]*)"/g, '\u201C$1\u201D')
    // Handle remaining single quotes
    .replace(/'/g, '\u2018')
    // Handle remaining double quotes
    .replace(/"/g, '\u201C')
    // Handle ellipsis
    .replace(/\.{3}/g, '\u2026')
    // Handle em dashes
    .replace(/--/g, '\u2014')
    // Handle en dashes
    .replace(/ - /g, ' \u2013 ');
};

const Para: React.FC<ParaProps> = ({ children, className }) => {
  const processContent = (content: React.ReactNode): React.ReactNode => {
    if (typeof content === 'string') {
      return escapeSpecialCharacters(content);
    }
    
    if (React.isValidElement(content)) {
      // Don't process content of <a> and <code> tags
      if (['a', 'code'].includes(content.type as string)) {
        return content;
      }
      
      const props = {
        ...content.props,
        children: React.Children.map(content.props.children, processContent)
      };
      return React.cloneElement(content, props);
    }
    
    if (Array.isArray(content)) {
      return content.map(processContent);
    }
    
    return content;
  };

  return (
    <p className={`p-4 max-w-5xl text-center ${className}`}>
      {processContent(children)}
    </p>
  );
}

export default Para;
