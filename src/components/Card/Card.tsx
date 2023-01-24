import React, { ReactNode } from "react";
import './Card.css'

export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  children: ReactNode;
}

const Card = ({ imgSrc, title, description, children }: CardProps) => {
  return (
    <div className="cardSuperheroe">
      <img alt="Card image" className="imageCard" src={imgSrc} />
      <div className="content">
        <p className="tituloSuperheroe">{title}</p>
        <p className="descripcion">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
