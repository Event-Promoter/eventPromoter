import React, { useState, useEffect } from "react";
import logo from "./logo1.svg";
import "./Navbar.css";
// import SearchIcon from '@material-ui/icons/Search';
// import { IconButton } from '@material-ui/core';
import Close from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", handleShow());
    };
  }, []);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div className="navbar__logo">
        <img src={logo} alt="logo" width="100px" height="50px" />
      </div>
      <div className="navbar__right">
        <p>Home</p>
        <p>About Us</p>
        <Button
          style={{ textTransform: "none" }}
          variant="contained"
          color="primary"
        >
          Sign In/Up
        </Button>
      </div>
      <div className="menu">
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <Close className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <div className={` ${!click && "menu__option"}`}>
          <p>Home</p>
          <p>About Us</p>
          <Button
            style={{ textTransform: "none", marginLeft: "5px" }}
            variant="contained"
            color="primary"
          >
            Sign In/Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
