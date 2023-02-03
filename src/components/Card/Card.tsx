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

  const classCardSuperheroeDark = theme === 'dark' ? 'cardSuperheroDark' : '';
  const classTituloSuperheroeDark = theme === 'dark' ? 'tituloSuperheroeDark' : '';
  const classDescripcionDark = theme === 'dark' ? 'descripcionDark' : '';

  return (
    <div className={`cardSuperheroe ${classCardSuperheroeDark}`}>
      <img alt="Card image" className="imageCard" src={imgSrc} />
      <div className="content">
        <p className={`tituloSuperheroe ${classTituloSuperheroeDark}`}>{title}</p>
        <p className={`descripcion ${classDescripcionDark}`}>{description}</p>
        {children}
      </div>
    </div>
  );
};
