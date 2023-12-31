import React from "react";
interface PillProps {
  img: string;
  class: string;
  children: any;
  imgSize?: number;
}
const Pill: React.FC<PillProps> = (props) => {
  const imgStyle = {
    width: `calc(var(--length,1rem)*${props.imgSize})`,
    height: `calc(var(--length,1rem)*${props.imgSize})`,
  };
  return (
    <div className={props.class}>
      <img src={props.img} alt="" style={imgStyle} />
      <p className="self-center ml-4 p-2 ">{props.children}</p>
    </div>
  );
};

export default Pill;
