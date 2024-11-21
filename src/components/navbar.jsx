import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './navbar.css';

const SiteNavBar = ({currPage, setCurrPage, setPrevPage}) => {

    return(
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link as={NavLink} to={"/home"} onClick={() => {setPrevPage(currPage); setCurrPage("Home");}}>Home</Nav.Link>
              <Nav.Link as={NavLink} to={"/about"} onClick={() => {setPrevPage(currPage); setCurrPage("About");}}>About</Nav.Link>
              <Nav.Link as={NavLink} to={"/projects"} onClick={() => {setPrevPage(currPage); setCurrPage("Projects");}}>Projects</Nav.Link>
              <Nav.Link as={NavLink} to={"/resume"} onClick={() => {setPrevPage(currPage); setCurrPage("Resume");}}>Resume</Nav.Link>
              <Nav.Link as={NavLink} to={"/contact"} onClick={() => {setPrevPage(currPage); setCurrPage("Contact");}}>Contact</Nav.Link>
              <Nav.Link as={NavLink} to={"/other"} onClick={() => {setPrevPage(currPage); setCurrPage("Other");}}>Other</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default SiteNavBar;