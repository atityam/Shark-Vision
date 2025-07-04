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

const Footer = () => {
  return (
    <footer className="bg-footer text-light pt-5 pb-3">
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
            {["About Us", "Contact Us", "Our Services"].map(
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
