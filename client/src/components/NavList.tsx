import React from "react";

import NavItem from "./NavItem";

const NavList: React.FC = () => {
    return (
        <ul className="navbar-nav">
            <NavItem to="/">Калькулятор</NavItem>
            <NavItem to="/about">О приложении</NavItem>
        </ul>
    );
};

export default NavList;