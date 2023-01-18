import React from 'react';
import "./Square.css";

interface SquareProps {
  isLight?: boolean;
}

export const Square = ({ isLight = false }: SquareProps) => {
  const mode = isLight
    ? "square-light"
    : "square-dark";

  return <div className={`square ${mode}`}></div>;
};
