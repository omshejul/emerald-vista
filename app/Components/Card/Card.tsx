import React from "react";
import styles from './Card.module.css'

interface CardProps {
  img: any;
  children?: string;
  
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className={styles.CardContainer}>
        <img src={props.img} alt="" />
        <p className="p-2 bg-[#2f2f2f] corner h-full">{props.children}</p>
      </div>
    </>
  );
};
export default Card;
