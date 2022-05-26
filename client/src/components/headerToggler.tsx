import React, { FC, MouseEventHandler } from "react";

interface HeaderTogglerProps {
  onClick: MouseEventHandler;
}

const HeaderToggler: FC<HeaderTogglerProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon" />
    </button>
  );
};

export default HeaderToggler;
