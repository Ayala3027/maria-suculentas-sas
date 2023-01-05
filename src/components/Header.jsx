import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import madera from "../assets/madera.png";

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="banner">
        <div className="chains">
          <div></div>
          <div></div>
        </div>
        <div className="contBanner">
          <img src={madera} alt="" />
          <h1>Maria Suculentas S.A.S.</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
