import { useState } from "react";
import Menu from "./Menu";

import "./ToggleMenu.scss";

const ToggleMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div
        className={isActive ? "toggle_menu toggle_menu__active" : "toggle_menu"}
        onClick={handleOnClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='toggle_menu__overlay' onClick={() => setIsActive(false)}>
        <div className='toggle_menu__content'>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default ToggleMenu;
