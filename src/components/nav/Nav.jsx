import React from "react";
import { NavLink } from "react-router-dom";
import MaterialIcon from "material-icons-react";
export default function Nav() {
  return (
    <nav>
      <div>
        <img alt="fortnite logo" src="https://image.fnbr.co/logo/logo.png" />
      </div>
      <section>
        <NavLink to="/fn/home">
          <MaterialIcon icon="home" size="small" />
          HOME
        </NavLink>
        <NavLink to="/fn/cosmetics">
          <MaterialIcon icon="people_outline" size="small" />
          COSMETICS
        </NavLink>
        <NavLink to="/fn/store">
          <MaterialIcon icon="store" size="small" />
          STORE
        </NavLink>
      </section>
    </nav>
  );
}
