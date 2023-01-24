import React, { ReactNode } from "react";
import "./NavbarItem.css";

export interface NavbarItemProps {
  children: ReactNode;
}

const NavbarItem = ({ children }: NavbarItemProps) => {
  return <a href="#">{children}</a>;
};

export default NavbarItem;
