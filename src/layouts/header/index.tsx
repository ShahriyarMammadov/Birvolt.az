import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";
import basket_icon from "../../assets/icons/header_basket.png";
import header_menu from "../../assets/icons/header_menu.png";
import header_search from "../../assets/icons/header_search.png";
import { Badge, Drawer } from "antd";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <nav>
          <Link to={"/"}>Ana səhifə</Link>
          <Link to={"/haqqimizda"}>Haqqımızda</Link>
          <Link to={"/xidmetler"}>Xidmətlər</Link>
          <Link to={"/mehsullar"}>Məhsullar</Link>
          <Link to={"/elaqe"}>Əlaqə</Link>
        </nav>

        <div className="rightAction">
          <Link to="/sebet" title="Səbətim">
            <Badge showZero count={5}>
              <img src={basket_icon} alt="basket" />
            </Badge>
          </Link>

          <img src={header_search} alt="search" title="Axtarış" />
          <img
            src={header_menu}
            alt="menu"
            title="menu"
            className="menu"
            onClick={showDrawer}
          />
        </div>
      </div>

      {/* DRAWER */}
      <Drawer title="Birvolt.az" onClose={onClose} open={open}>
        <p>Isa</p>
        <p>Mee ...</p>
        <p>Havha ...</p>
      </Drawer>
    </header>
  );
};

export default Header;
