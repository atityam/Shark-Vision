import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";
import carousel1 from '../assets/img/carousel-1.jpg';
import ContactForms from './ContactForms';

const Contact = () => {
  return (
    <>
<Container
  fluid
  className="py-5 text-white"
  style={{
    backgroundImage: `linear-gradient(rgba(13, 110, 253, 0.9), rgba(13, 110, 253, 0.7)), url(${carousel1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>       <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">What Makes Shark Vision Different? </h2>
              <p className="mb-4">Shark Vision's multi-modal neural networks are built for real-time, real-world conditions delivering accuracy with minimal false alarms, even in crowds, low-light, and difficult video angles.</p>
              <div className="d-flex align-items-center bg-white rounded p-3 text-dark w-fit">
                <FaPhone className="text-primary fs-3 me-3" />
                <span className="fw-semibold">Call Us: +91 91366 68524</span>
              </div>
            </Col>
            <Col md={6}>

            <ContactForms/>

            </Col>
          </Row>
        </Container>
      </Container>
      
    </>
  )
}

export default Contact ;