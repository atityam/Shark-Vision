// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// const header = () => {
//   return (
//     <>
//           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">SHARK VISION</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="m-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <NavDropdown title="Company" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#AboutUs">About Us</NavDropdown.Item>
//               <NavDropdown.Item href="#Testimonials">Testimonials</NavDropdown.Item>
//               <NavDropdown.Item href="#Faq">Faq</NavDropdown.Item>
//               <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Products" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#FaceRecognitionSystem">Face Recognition System</NavDropdown.Item>
//               <NavDropdown.Item href="#FRSInvestigation">FRS Investigation</NavDropdown.Item>
//               <NavDropdown.Item href="#InsuranceClaimProcessing">Insurance Claim Processing</NavDropdown.Item>
//               <NavDropdown.Item href="#AttendenceandVisitorManagement">Attendence & Visitor Management</NavDropdown.Item>
//               <NavDropdown.Item href="#CabBookingPlatform">Cab Booking Platform</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Service" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#Service">Service</NavDropdown.Item>
//               <NavDropdown.Item href="#ServiceDetails">Service Details</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#contact">Contact</Nav.Link>

//           </Nav>
//           <Nav>
//             <Button variant="danger">Contact Us Now</Button>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   )
// }

// exportdefault header

import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import homelogo from '../assets/img/icon/icon-02-primary.png';
import { NavLink , useLocation } from "react-router-dom";

const Header = () => {
  const [showPages, setShowPages] = useState(false);
  const location = useLocation();
  const isPagesActive = [
    "/features", "/appointment", "/team", "/testimonial", "/404",
  ].some(path => location.pathname.startsWith(path));


  return (
    <>
      {/* Top info strip (scrolls with page) */}
      <div className="d-none d-lg-block" style={{ backgroundColor: "#0D1B2A", color: "white", fontSize: "0.9rem" }}>
        <Container fluid className="d-flex px-md-5 justify-content-between align-items-center py-2 flex-wrap">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <span><FaPhone /> +012 345 6789</span>
            <span><FaEnvelope /> info@example.com</span>
            <span><FaClock /> Mon - Fri : 09 AM - 09 PM</span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </Container>
      </div>

      {/* Main navbar (sticky) */}
<Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3 px-md-5">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={homelogo} alt="Logo" width="40" className="me-2" />
          <strong className="h1">SHARK VISION</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav
            className="m-auto"
            style={{
              backgroundColor: "#f6f7fc",
              borderRadius: "12px",
              padding: "3px 30px",
              gap: "1rem",
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-decoration-none"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="text-decoration-none"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              className="text-decoration-none"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
            >
              Our Services
            </Nav.Link>

            {/* Dropdown */}
            <NavDropdown
              title="Pages"
              id="pages-dropdown"
              show={showPages}
              onMouseEnter={() => setShowPages(true)}
              onMouseLeave={() => setShowPages(false)}
              className="text-decoration-none"
            >
              <NavDropdown.Item as={NavLink} to="/features" className="text-decoration-none">
                Features
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/appointment" className="text-decoration-none">
                Appointment
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/team" className="text-decoration-none">
                Team Members
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/testimonial" className="text-decoration-none">
                Testimonial
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/404" className="text-decoration-none">
                404 Page
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="text-decoration-none"
              style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Button variant="primary" className="rounded-pill px-4 hover-blue text-white mt-3 mt-lg-0">
            Get A Quote
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;


