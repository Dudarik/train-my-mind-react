import { useState } from "react";

import "./ToggleMenu.scss";

const ToggleMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={isActive ? "toggle_menu toggle_menu__active" : "toggle_menu"}
      onClick={handleOnClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ToggleMenu;
