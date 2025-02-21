import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Header: React.FC = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            {/* <h3>Birvolt.az</h3> */}
            <img src={logo} />
          </Link>
        </div>

        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About Us</Link>
          <Link to={"/"}>Service</Link>
          <Link to={"/"}>Pages</Link>
          <Link to={"/"}>Contact Us</Link>
        </nav>

        <div className="contactOur">
          <Link to={"/"}>Get a quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
