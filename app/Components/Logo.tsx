import React from "react";
import Link from "next/link";

interface LogoProps {
  size: number; // Assuming size is a number, adjust the type if needed
  class?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const imgStyle = {
    width: `calc(var(--length,1rem)*${props.size})`,
    height: `calc(var(--length,1rem)*${props.size})`,
  };
  return (
    <>
      <Link href="/" className="w-fit">
        <img
          src="logo.svg"
          alt="logo"
          style={imgStyle}
          className={props.class}
        />
      </Link>
    </>
  );
};

export default Logo;
