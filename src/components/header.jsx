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

// export default header

import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import homelogo from '../assets/img/icon/icon-02-primary.png';

const Header = () => {
  return (
    <>
      {/* Top info strip (scrolls with page) */}
      <div style={{ backgroundColor: "#0D1B2A", color: "white", fontSize: "0.9rem" }}>
        <Container className="d-flex justify-content-between align-items-center py-2 flex-wrap">
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
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
        <Container>
          {/* Brand */}
          <Navbar.Brand href="#">
            <img src={homelogo} alt="Logo" width="40" className="me-2" />
            <strong className="h1">Insure</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-end">
            <Nav className="m-auto">
              <Nav.Link href="#home" className="text-primary fw-bold">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#services">Our Services</Nav.Link>
              <NavDropdown title="Pages" id="pages-dropdown">
                <NavDropdown.Item href="#page1">Page 1</NavDropdown.Item>
                <NavDropdown.Item href="#page2">Page 2</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact" >Contact Us</Nav.Link>
            </Nav>
            <Button variant="primary" className="rounded-pill px-4">Get A Quote</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
