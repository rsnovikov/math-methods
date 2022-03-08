import React from "react";

interface HeaderTogglerProps {
    onClick: () => void;
}

const HeaderToggler: React.FC<HeaderTogglerProps> = ({onClick}) : React.ReactElement => {
    return(
        <button onClick={onClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
    )
}

export default HeaderToggler;