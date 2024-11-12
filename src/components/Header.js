import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = ({ SetInputName }) => {
  return (
    <header>
      <h1>Should I watch it?</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/"> Home </Link>
        <Link to="/movieList"> Movie List </Link>
        <Link to="/addMovie"> Add movie </Link>
      </nav>
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
