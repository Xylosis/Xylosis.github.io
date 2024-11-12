import React, { useState } from "react";
import './navbar.css';

const NavBar = () => {

    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">MySite</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
};

export default NavBar;