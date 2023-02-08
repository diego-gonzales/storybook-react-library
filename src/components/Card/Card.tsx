import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Card.css'

export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  children: ReactNode;
  // propertyA?: 'primary' | 'secondary';
  // propertyB?: string;
}

export const Card = ({ imgSrc, title, description, children }: CardProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`cardSuperheroe-${theme}`}>
      <img alt="Card image" className="imageCard" src={imgSrc} />
      <div className="content">
        <p className={`tituloSuperheroe-${theme}`}>{title}</p>
        <p className={`descripcion-${theme}`}>{description}</p>
        {children}
      </div>
    </div>
  );
};
