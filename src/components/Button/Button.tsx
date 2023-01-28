import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * This is the button type
   */
  type?: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ children, type }: ButtonProps) => {
  const typeClass = type ? `btn-${type}` : "";

  return <button className={`btn ${typeClass}`}>{children}</button>;
};
