import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
const header = () => {
  return (
    <>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SHARK VISION</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Company" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#AboutUs">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#Testimonials">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#Faq">Faq</NavDropdown.Item>
              <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#FaceRecognitionSystem">Face Recognition System</NavDropdown.Item>
              <NavDropdown.Item href="#FRSInvestigation">FRS Investigation</NavDropdown.Item>
              <NavDropdown.Item href="#InsuranceClaimProcessing">Insurance Claim Processing</NavDropdown.Item>
              <NavDropdown.Item href="#AttendenceandVisitorManagement">Attendence & Visitor Management</NavDropdown.Item>
              <NavDropdown.Item href="#CabBookingPlatform">Cab Booking Platform</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Service" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#Service">Service</NavDropdown.Item>
              <NavDropdown.Item href="#ServiceDetails">Service Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
          <Nav>
            <Button variant="danger">Contact Us Now</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default header
