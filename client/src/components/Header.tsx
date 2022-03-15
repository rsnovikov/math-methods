import React, {useState} from "react";
import HeaderToggler from "./HeaderToggler";
import PagesNavList from "./PagesNavList";
import {Link} from "react-router-dom";


const Header: React.FC = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const HeaderTogglerHandler = () => {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to={'/'} className="navbar-brand">Численные методы</Link>
                <HeaderToggler onClick={HeaderTogglerHandler}/>
                <div className={`collapse navbar-collapse ${isShowMenu ? 'show' : ''}`} id="navbarNav">
                    <nav>
                        <PagesNavList/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;