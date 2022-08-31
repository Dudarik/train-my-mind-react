import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./MainMenu.scss";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";

const MainMenu: React.FC = () => {
  return (
    <div className='mainmenu'>
      <NavLink className='nav-link' to='/'>
        <div className='logo'>
          <Logo />
          <div className='title'>
            <h2>TRAIN</h2>
            <h2>MY</h2>
            <h2>MIND</h2>
          </div>
        </div>
      </NavLink>
      <ToggleMenu />
      <div className='menu'>
        <Menu />
      </div>
    </div>
  );
};

export default MainMenu;
