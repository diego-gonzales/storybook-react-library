import React, { ReactNode } from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * This is the button type
   */
  type: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ children, type = "primary" }: ButtonProps) => {
  return <button className={`btn btn-${type}`}>{children}</button>;
};
