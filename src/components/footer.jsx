import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          {/* Logo & About */}
          <Col md={6} lg={3}>
            <h4 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FaShieldAlt size={30} />
              Insure
            </h4>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex gap-2 mt-3">
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
            <h5 className="fw-bold mb-3">Address</h5>
            <p className="mb-2 d-flex align-items-center gap-2">
              <FaMapMarkerAlt /> 123 Street, New York, USA
            </p>
            <p className="mb-2 d-flex align-items-center gap-2">
              <FaPhoneAlt /> +012 345 67890
            </p>
            <p className="mb-0 d-flex align-items-center gap-2">
              <FaEnvelope /> info@example.com
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            {["About Us", "Contact Us", "Our Services", "Terms & Condition", "Support"].map(
              (link, i) => (
                <p key={i} className="mb-2">
                  <a href="/" className="text-light text-decoration-none d-flex align-items-center gap-2">
                    <FaChevronRight size={12} /> {link}
                  </a>
                </p>
              )
            )}
          </Col>

          {/* Newsletter */}
          <Col md={6} lg={3}>
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="rounded-start"
              />
              <Button variant="primary" className="rounded-end">
                SignUp
              </Button>
            </Form>
          </Col>
        </Row>
        <hr className="border-light my-4" />
        <Row >
          <Col>
            <small>
              <div >
              <div>
              © <span className="text-primary text-start">Your Site Name</span>, All Rights
              Reserved.
              </div> 
              <div className="text-end">
              Designed By{" "}
              <a href="/" className="text-primary text-decoration-none">
                HTML Codex
              </a>{" "}
              <br />
              Distributed By{" "}
              <a href="/" className="text-primary text-decoration-none">
                ThemeWagon
              </a>
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
