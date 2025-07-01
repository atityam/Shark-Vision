import React from "react";
import feature from '../assets/img/feature.jpg' ;
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";

const InsuranceLanding = () => {
  return (
    <>
      {/* SECTION 1: Few Reasons */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col sm={12} md={6} className="mb-4 mb-md-0 my-container-1">
            <h2 className="fw-bold mb-3">Few Reasons Why People Choosing Us!</h2>
            <p className="text-muted mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <Row className="g-3 px-5">
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <FaRegClipboard className="text-primary fs-1 mt-4 mb-3 " />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Easy Process</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <FaShippingFast className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Fast Delivery</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <FaShieldAlt className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Policy Controlling</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <FaMoneyBillWave className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Money Saving</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6}  className="d-flex justify-content-center my-container-2">
            <img
              src={feature}
              alt="Business woman at laptop"
              className="img-fluid rounded shadow"
              style={{height : "100%"}}
            />
          </Col>
        </Row>
      </Container>

      {/* SECTION 2: Insurance Services */}
      <Container className="py-5 text-center">
        <h2 className="fw-bold mb-5">We Provide Professional Insurance Services</h2>
        <Row className="g-4">
          <Col md={4} >
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaUserShield className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Life Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaHeartbeat className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Health Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaHome className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Home Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaCar className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Vehicle Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaBriefcase className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Business Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaBuilding className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Property Insurance</h5>
              <p className="text-muted mb-3">Aliqu diam amet eos erat ipsum et lorem et sit clita duo justo erat amet.</p>
              <Button variant="link" className="p-0 text-decoration-none">Read More</Button>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* SECTION 3: Award & Contact */}
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
  );
};

export default InsuranceLanding;
