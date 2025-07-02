import React from "react";
import feature from '../assets/img/feature.jpg' ;
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";

const Features = () => {
  return (
    <>
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

    </>
  );
};

export default Features;
