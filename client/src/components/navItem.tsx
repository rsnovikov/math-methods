import React, { NavLink, NavLinkProps } from "react-router-dom";

const NavItem = ({ children, className, ...props }: NavLinkProps) => {
  return (
    <li className="nav-item">
      <NavLink
        {...props}
        className={({ isActive }) => `nav-link ${isActive && "active"}`}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
