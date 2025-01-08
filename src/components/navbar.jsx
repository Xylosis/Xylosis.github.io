import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './navbar.css';

const SiteNavBar = ({currPage, setCurrPage, setPrevPage, darkMode, setDarkMode}) => {

    const [expanded, setExpanded] = useState(false);

    const handleSelect = () => {
      setExpanded(false); // Collapse the navbar when a menu item is clicked
      const navButton = document.getElementsByClassName("navbar-toggler")[0];
      navButton.click();
    };

    const styles = {
      navBarItems : {
        color: darkMode ? "white" : null,
        transition : "all 0.9s ease",
        paddingLeft : ".75rem",
        paddingRight: ".75rem",
      }
    }

    return(
      <div>
        <Navbar bg={darkMode ? "dark" : "light"} expand="lg">
          <Navbar.Brand style={styles.navBarItems}>AJD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mr-auto">
              <Nav.Link as={NavLink} to={"/home"} onClick={() => {setPrevPage(currPage); setCurrPage("Home"); handleSelect();}} style={styles.navBarItems} className={currPage === "Home" ? "activePage navbar-links" : "navbar-links" }>Home</Nav.Link>
              <Nav.Link as={NavLink} to={"/about"} onClick={() => {setPrevPage(currPage); setCurrPage("About"); handleSelect();}} style={styles.navBarItems} className={currPage === "About" ? "activePage" : null }>About</Nav.Link>
              <Nav.Link as={NavLink} to={"/projects"} onClick={() => {setPrevPage(currPage); setCurrPage("Projects"); handleSelect();}} style={styles.navBarItems} className={currPage === "Projects" ? "activePage" : null }>Projects</Nav.Link>
              <Nav.Link as={NavLink} to={"/research"} onClick={() => {setPrevPage(currPage); setCurrPage("Research"); handleSelect();}} style={styles.navBarItems} className={currPage === "Research" ? "activePage" : null }>Research</Nav.Link>
              <Nav.Link as={NavLink} to={"/resume"} onClick={() => {setPrevPage(currPage); setCurrPage("Resume"); handleSelect();}} style={styles.navBarItems} className={currPage === "Resume" ? "activePage" : null }>Resume</Nav.Link>
              <Nav.Link as={NavLink} to={"/contact"} onClick={() => {setPrevPage(currPage); setCurrPage("Contact"); handleSelect();}} style={styles.navBarItems} className={currPage === "Contact" ? "activePage" : null }>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default SiteNavBar;