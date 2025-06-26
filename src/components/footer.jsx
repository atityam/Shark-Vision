import React from 'react'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaPaperPlane } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-dark text-light pt-5 pb-3" style={{ fontFamily: 'sans-serif' }}>
      <Container>
        <Row className="justify-content-between text-secondary text-center text-md-start">
          <Col md={4} className="mb-4 text-center text-md-start">
            <h4 className="fw-bold bg-light text-dark d-inline-block px-2 py-1">SHARK VISION</h4>
            <p className="mt-3">
              Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine
              multifunctional mind design.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaPinterestP />
            </div>

          </Col>

          <Col md={2} className="mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled mt-3">
              <li>About Company</li>
              <li>Meet Our Team</li>
              <li>Latest Blog</li>
              <li>Contact Us</li>
              <li>Testimonials</li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5 className="fw-bold">Services.</h5>
            <ul className="list-unstyled mt-3">
              <li>About Company</li>
              <li>Meet Our Team</li>
              <li>Latest Blog</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="mt-3">
              Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine
              multifunctional mind design.
            </p>
            <InputGroup className="mt-3">
              <Form.Control placeholder="Enter Your E-mail" />
              <Button variant="danger">
                <FaPaperPlane />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <hr className="border-secondary" />
        <Row className="justify-content-between text-secondary">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
             <p className="mb-0">© Copyright 2025 By Shark Vision</p>
          </Col>
          <Col xs={12} md={6}>
             <p className="mb-0">Privacy Policy &nbsp;&nbsp; Supports</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

