import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";

const Contact = () => {
  return (
    <>
         <Container fluid className="py-5 text-white" style={{ background: '#0d6efd' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">We're Award Winning Insurance Company</h2>
              <p className="mb-4">Aliqu diam amet eos erat ipsum et lorem et sit, clita duo justo erat amet. Clita erat ipsum et lorem et sit clita duo justo magna dolore erat amet.</p>
              <div className="d-flex align-items-center bg-white rounded p-3 text-dark w-fit">
                <FaPhone className="text-primary fs-3 me-3" />
                <span className="fw-semibold">Call Us: 012 345 6789</span>
              </div>
            </Col>
            <Col md={6}>
              <Form className="bg-white rounded p-4 text-dark shadow">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control placeholder="Your Name" className="mb-3 mb-md-0"/>
                  </Col>
                  <Col md={6}>
                    <Form.Control placeholder="Your Email"/>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Control placeholder="Your Mobile" className="mb-3 mb-md-0"/>
                  </Col>
                  <Col md={6}>
                    <Form.Control placeholder="Service Type"/>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={3} placeholder="Message"/>
                </Form.Group>
                <Button variant="primary" className="w-100">Get Appointment</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      
    </>
  )
}

export default Contact ;