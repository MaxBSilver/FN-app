import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <img
        alt="fortnite logo"
        src="https://image.fnbr.co/logo/logo.png"
        style={{ height: 50, width: 50 }}
      />
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/fn/news">News</NavLink>
      <NavLink to="/fn/cosmetics">Cosmetics</NavLink>
      <NavLink to="/fn/store">Store</NavLink>
    </nav>
  );
}
