import React, { FC } from "react";
import NavItem from "./navItem";

const PagesNavList: FC = () => {
  return (
    <ul className="navbar-nav">
      <NavItem to="/">Калькулятор</NavItem>
      <NavItem to="/about">О приложении</NavItem>
    </ul>
  );
};

export default PagesNavList;
