import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './navbar.css';

const SiteNavBar = ({currPage, setCurrPage, setPrevPage, darkMode, setDarkMode}) => {

    const styles = {
      navBarItems : {
        color: darkMode ? "white" : "#333",
        transition : "all 0.9s ease"
      }
    }

    return(
      <div>
        <Navbar bg={darkMode ? "dark" : "light"} expand="lg">
          <Navbar.Brand style={styles.navBarItems}>AJD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
              <Nav.Link as={NavLink} to={"/home"} onClick={() => {setPrevPage(currPage); setCurrPage("Home");}} style={styles.navBarItems} className="navbar-links">Home</Nav.Link>
              <Nav.Link as={NavLink} to={"/about"} onClick={() => {setPrevPage(currPage); setCurrPage("About");}} style={styles.navBarItems}>About</Nav.Link>
              <Nav.Link as={NavLink} to={"/projects"} onClick={() => {setPrevPage(currPage); setCurrPage("Projects");}} style={styles.navBarItems}>Projects</Nav.Link>
              <Nav.Link as={NavLink} to={"/research"} onClick={() => {setPrevPage(currPage); setCurrPage("Research");}} style={styles.navBarItems}>Research</Nav.Link>
              <Nav.Link as={NavLink} to={"/resume"} onClick={() => {setPrevPage(currPage); setCurrPage("Resume");}} style={styles.navBarItems}>Resume</Nav.Link>
              <Nav.Link as={NavLink} to={"/contact"} onClick={() => {setPrevPage(currPage); setCurrPage("Contact");}} style={styles.navBarItems}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default SiteNavBar;