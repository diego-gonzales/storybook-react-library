import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  type: "primary" | "secondary";
}

const Button = ({ label, type = "primary" }: ButtonProps) => {
  return (
    <button className={`btn btn-${type}`}>
      {label}
    </button>
    // <div className="btn">
    //   <p className="button">{label}</p>
    // </div>
  );
};

export default Button;
