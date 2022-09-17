import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-div">
        <img src={require("../asset/logo.png")} alt="" />
        <h1>Estatery</h1>
      </div>
      <p> One stop solution for all your searches related to real estate</p>
    </div>
  );
};
export default Footer;
