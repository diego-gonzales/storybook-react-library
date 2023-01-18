import React, { ReactNode } from "react";
import "./Square.css";

interface SquareProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  shape?: "circle" | "roundend";
}

export const Square = ({ children, variant, shape }: SquareProps) => {
  const squareVariant = variant ? `square-${variant}` : "";
  const squareShape = shape ? `square-${shape}` : "";

  return (
    <div className={`square ${squareVariant} ${squareShape}`}>{children}</div>
  );
};
