import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <p className="num-results">
        Found <strong>X</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
