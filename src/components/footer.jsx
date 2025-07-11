import React from "react";
import { Container, Row, Col, Form, Button,InputGroup, FormControl } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const links = [
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
    { label: "Features", path: "/features" },
    { label: "Team Members", path: "/team" },
  ];
  return (
    <footer className="bg-footer text-light pt-5 pb-5 py-5">
      <Container>
        <Row className="gy-4">
          {/* Logo & About */}
          <Col md={6} lg={3}>
            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2 py-sm-5">
              <FaShieldAlt size={30} />
             SHARK VISION
            </h4>
            <p>Security teams can spend upto 80% of their time searching for known perpetrators or individuals flagged as threats.
            </p>
            <div className="d-flex gap-2 mt-3 py-sm-3">
              {[FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="/"
                  className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Col>

          {/* Address */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3 py-sm-5">Address</h5>
            <p className="mb-2 d-flex align-items-center gap-2">
              <FaMapMarkerAlt /> 202, Plot N0. 94, Golden Tower, Sapna Sangeeta Road, Indore(M.P.), 452013
            </p>
            <p className="mb-2 d-flex align-items-center gap-2">
              <FaPhoneAlt /> +91 91366 68524
            </p>
            <p className="mb-0 d-flex align-items-center gap-2">
              <FaEnvelope /> info@sharkvisionindia.com
            </p>
          </Col>

          {/* Quick Links */}
    <Col md={6} lg={3}>
      <h5 className="fw-bold mb-3 py-sm-5">Useful Links</h5>
      {links.map(({ label, path }, i) => (
        <p key={i} className="mb-2">
          <Link to={path} className="text-light text-decoration-none d-flex align-items-center gap-2">
            <FaChevronRight size={12} /> {label}
          </Link>
        </p>
      ))}
    </Col>

          {/* Newsletter */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3 py-sm-5">Newsletter</h5>
            <p>Security teams can spend upto 80% of their time searching for known perpetrators or individuals flagged as threats.</p>
   <Form className="bg-border text-white">
      <InputGroup className="bg-border">
        <FormControl
          type="email"
          placeholder="Your email"
          className="rounded-pill pe-5 border-2 bg-border text-white"
          style={{ height: '48px' ,
            backgroundColor : '#15233c',
            color : '#fff',
            borderColor : '#fff',
            border:' 2px solid white',
          }}
        />
<Button
  type="submit"
  className="position-absolute end-0 me-2 my-auto rounded-pill text-white border-0"
  style={{
    backgroundColor: '#00D9FF',
    height: '38px',
    padding: '0 16px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 100,   // make sure button stays above the input on focus
  }}
>
  SignUp
</Button>
      </InputGroup>
    </Form>
          </Col>
        </Row>
        <hr className="border-light my-4" />
        <Row >
          <Col>
            <small>
              <div >
              <div className="text-center">
              © <span >Copyright 2025 By Shark Vision</span>
              </div> 
             
              </div>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
