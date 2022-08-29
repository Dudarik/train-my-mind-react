import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./MainMenu.scss";

const MainMenu: React.FC = () => {
  return (
    <div className='mainmenu'>
      <div className='logo'>
        <Logo />
        <div className='title'>
          <h2>TRAIN</h2>
          <h2>MY</h2>
          <h2>MIND</h2>
        </div>
      </div>
      <div className='menu'>
        <menu>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-selected" : "nav-link"
            }
            to='/'>
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-selected" : "nav-link"
            }
            to='/rules'>
            Правила
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-selected" : "nav-link"
            }
            to='/about'>
            О приложении
          </NavLink>
        </menu>
      </div>
    </div>
  );
};

export default MainMenu;
