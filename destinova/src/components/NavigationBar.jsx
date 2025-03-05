import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css"; // Ensure you import custom styles if needed
import Logo from "../assets/coloredlogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isScrolled ? "bg-dark" : "bg-transparent"}`} // Toggle class on scroll
      variant="dark"
      fixed="top" // Keeps the navbar fixed at the top
    >
      <div className="container">
        <Navbar.Brand href="./" className="d-flex col-4">
          <img src={Logo} alt="logo" style={{ height: "10vh" }} />
          <div className="d-flex flex-column justify-content-center">
            <h4>Destinova</h4>
            <div className="">
            <h6 className="fs-6 text-secondary col-4 ">Your Guiding Star to a Brighter Future</h6>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav col-8" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ms-auto p-3">
            <Nav.Link as={NavLink} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/meet-nova" className="nav-link">
              Meet Nova
            </Nav.Link>
            <Nav.Link as={NavLink} to="/careers" className="nav-link">
              Discover Job Market
            </Nav.Link>
            <Nav.Link as={NavLink} to="/education" className="nav-link">
              Academic Networking
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skill" className="nav-link">
              Soft Skill Development
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
