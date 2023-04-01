import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./styles.css";

const Nav: React.FC = () => {
  const activeLink = "nav-link__item  nav-link__item--active ";
  const normalLink = "nav-link__item ";

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Главная
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/SecondPage"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Исполнители
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/ThirdPage"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Заказать песню
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export { Nav };
