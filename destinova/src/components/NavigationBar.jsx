import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css"; // Ensure you import custom styles if needed
import Logo from "../assets/coloredlogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Add background color on scroll for larger screens
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${isMobile ? "bg-dark" : isScrolled ? "bg-dark" : "bg-transparent"}`} // Dark for mobile, transparent-to-dark for larger screens
      variant="dark"
      fixed="top"
    >
      <div className="container">
        <Navbar.Brand href="./" className="d-flex col-4">
          <img src={Logo} alt="logo" style={{ height: "10vh" }} />
          <div className="d-flex flex-column justify-content-center">
            <h4>Destinova</h4>
            <h6 className="fs-6 text-secondary col-4 d-none d-lg-block">
              Your Guiding Star to a Brighter Future
            </h6>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav col-8" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto p-3">
            <Nav.Link as={NavLink} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/meet-nova" className="nav-link">
              Meet Nova
            </Nav.Link>
            <Nav.Link as={NavLink} to="/career-vision" className="nav-link">
              Career Vision Crystal
            </Nav.Link>
            <Nav.Link as={NavLink} to="/wisdom-gateway" className="nav-link">
              Academic Networking
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
