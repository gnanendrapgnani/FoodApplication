import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque ea
            vel numquam quo eum expedita velit recusandae. Vero exercitationem
            illo in labore! Saepe, dicta rem ex maiores quod et?
          </p>
          <div className="footer-social-iocns">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.github_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy and policy </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-222-334-3343</li>
            <li>contact@aksiyapatri.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ⓒ Aksiya Patri.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
