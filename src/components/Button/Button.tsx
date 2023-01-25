import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  children: ReactNode;
  type: "primary" | "secondary";
}

export const Button = ({ children, type = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${type}`}>
      {children}
    </button>
  );
};
