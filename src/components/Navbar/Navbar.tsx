import React, { ReactElement, ReactNode } from "react";
import "./Navbar.css";

export interface NavbarProps {
  imgSrc: string;
  children: ReactNode;
}

const Navbar = ({ imgSrc, children }: NavbarProps) => {
  return (
    <div className="navBar">
      <div className="logotipotix">
        <div className="dashiconssuperhero">
          <img
            alt="Logotipo app"
            className="vector"
            src={imgSrc}
          />
        </div>
        <p className="tix">TIX</p>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
