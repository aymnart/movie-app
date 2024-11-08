import React from "react";
import "../App.css";

const Header = ({ SetInputName }) => {
  return (
    <header>
      <h1>Should I watch it?</h1>
      <form id="form">
        <input
          type="text"
          placeholder="Search..."
          id="search"
          className="search"
          onChange={(e) => SetInputName(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
