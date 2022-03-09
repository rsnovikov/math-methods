import React, {useState} from "react";
import HeaderToggler from "./HeaderToggler";
import NavList from "./NavList";


const Header : React.FC = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const HeaderTogglerHandler = () => {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Численные методы</a>
                <HeaderToggler onClick={HeaderTogglerHandler}/>
                <div className={`collapse navbar-collapse ${isShowMenu ? 'show' : ''}`} id="navbarNav">
                    <nav>
                     <NavList/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;