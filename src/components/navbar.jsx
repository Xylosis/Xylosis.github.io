import React from "react";
import './navbar.css';

const NavBar = ({currPage, setCurrPage, setPrevPage}) => {



    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home" onClick={() => {setPrevPage(currPage); setCurrPage("Home");}}>MySite</a>
        </div>
        <ul className="navbar-links">
          {/*<li><a onClick={() => {setCubeVisible(true)}}>Cube</a></li>*/}
          <li><a href="#about" onClick={() => {setPrevPage(currPage); setCurrPage("About");}}>About</a></li>
          <li><a href="#projects" onClick={() => {setPrevPage(currPage); setCurrPage("Projects");}}>Projects</a></li>
          <li><a href="#resume" onClick={() => {setPrevPage(currPage); setCurrPage("Resume");}}>Resume</a></li>
          <li><a href="#contact" onClick={() => {setPrevPage(currPage); setCurrPage("Contact");}}>Contact</a></li>
          <li><a href="#other" onClick={() => {setPrevPage(currPage); setCurrPage("Other");}}>Other</a></li>
        </ul>
      </nav>
    );
};

export default NavBar;