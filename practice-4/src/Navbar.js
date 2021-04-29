import React from "react";
import brand from "./brand.png";
import { useContext } from "react";
import { Context } from "./GlobalContext";

function Navbar() {
  const { todoList } = useContext(Context);
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg sticky-top"
      style={{ backgroundColor: "teal", height: "35px" }}
    >
      <div className="navbar-brand " style={{ color: "white", float: "left" }}>
        <img src={brand} alt="-" height="30" />
        <span> TookNoot</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        style={{ color: "white", float: "right" }}
        id="navbarNav"
      >
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav">
          <small>notes: {todoList.length}</small>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
