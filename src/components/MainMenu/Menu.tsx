import { NavLink } from "react-router-dom";

import "./Menu.scss";

const Menu: React.FC = () => {
  return (
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
  );
};

export default Menu;
