import React from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={assets.logos} alt="" />
    </div>
  );
};

export default NavBar;
