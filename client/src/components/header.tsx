import React, {FC, useState} from "react";
import HeaderToggler from "./headerToggler";
import PagesNavList from "./pagesNavList";
import {Link} from "react-router-dom";


const Header: FC = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const HeaderTogglerHandler = () => {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Численные методы</Link>
                <HeaderToggler onClick={HeaderTogglerHandler}/>
                <div
                    className={`collapse navbar-collapse ${isShowMenu && "show"}`}
                    id="navbarNav"
                >
                    <nav>
                        <PagesNavList/>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;