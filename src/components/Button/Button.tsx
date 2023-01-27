import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * This is the button content
   */
  children: ReactNode;
  /**
   * This is a custom description
   */
  type: "primary" | "secondary";
}

export const Button = ({ children, type = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${type}`}>
      {children}
    </button>
  );
};
