"use client"
import { useState } from "react";

const ReadMore: React.FC<{ text: string }> = ({ text }) => {
    const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  
    const toggleReadMore = () => {
      setIsReadMoreShown(!isReadMoreShown);
    };
  
    const wordLimit = 20;
    const words = text.split(" ");
    const previewText = words.slice(0, wordLimit).join(" ");
    const remainingText = words.slice(wordLimit).join(" ");
  
    return (
      <p>
        {isReadMoreShown ? `${previewText} ${remainingText}` : `${previewText}`}
        <button onClick={toggleReadMore} className="read-more-button text-blue-500">
          {isReadMoreShown ? " Read Less" : ". . . Read More"}
        </button>
      </p>
    );
  };
  
  export default ReadMore
  