import React, {useState} from "react";
import HeaderToggler from "./HeaderToggler";


const Header : React.FC = (): React.ReactElement => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const HeaderTogglerHandler = () => {
        setIsShowMenu(!isShowMenu);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Численные методы</a>
                <HeaderToggler onClick={HeaderTogglerHandler}/>
                <div className={`collapse navbar-collapse ${isShowMenu ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Калькулятор</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">О приложении</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;