import React, { ReactNode } from "react";
import "./NavbarItem.css";

export interface NavbarItemProps {
  children: ReactNode;
}

export const NavbarItem = ({ children }: NavbarItemProps) => {
  return <a href="#" className="navLinkItem">{children}</a>;
};

