import React, { ReactNode } from "react";
import styles from "./Square.module.css";

export interface SquareProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  shape?: "circle" | "rounded";
}

export const Square = ({ children, variant, shape }: SquareProps) => {
  const squareVariant = variant ? styles[`square-${variant}`] : "";
  const squareShape = shape ? styles[`square-${shape}`] : "";

  return (
    <div className={`${styles.square} ${squareVariant} ${squareShape}`}>{children}</div>
  );
};
