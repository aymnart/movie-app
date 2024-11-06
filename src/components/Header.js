import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <h1>Should I watch it?</h1>
      <form id="form">
        <input
          type="text"
          placeholder="Search"
          id="search"
          className="search"
        />
      </form>
    </header>
  );
};

export default Header;
