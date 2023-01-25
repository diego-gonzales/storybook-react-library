import React, { ReactElement, ReactNode } from "react";
import "./Navbar.css";

export interface NavbarProps {
  imgSrc: string;
  title: string;
  children: ReactNode;
}

export const Navbar = ({ imgSrc, title, children }: NavbarProps) => {
  return (
    <div className="navBar">
      <div className="logotipotix">
        <div className="dashiconssuperhero">
          <img alt="Logotipo app" className="vector" src={imgSrc} />
        </div>
        <p className="tix">{title}</p>
      </div>
      {children}
    </div>
  );
};

