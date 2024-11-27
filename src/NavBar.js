import { useState } from "react";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <Search />
      <p className="num-results">
        Found <strong>X</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
