import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/MenuNavbar.scss";

const MenuNavbar = () => {
  return (
    <nav className="navbar-step">
      <NavLink to="gafassol" activeclassname={"active"}>
        Gafas de Sol
      </NavLink>
      <NavLink to="gafasgraduadas" activeclassname={"active"}>
        Gafas Graduadas
      </NavLink>
      <NavLink to="bajavision" activeclassname={"active"}>
        Baja Vision
      </NavLink>
      <NavLink to="lentillas" activeclassname={"active"}>
        Lentillas
      </NavLink>
      <NavLink to="audilogia" activeclassname={"active"}>
        Audilogia
      </NavLink>
    </nav>
  );
};

export default MenuNavbar;
