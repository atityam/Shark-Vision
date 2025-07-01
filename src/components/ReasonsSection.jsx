import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import feature from '../assets/feature.jpg';

const ReasonsSection = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left content */}
        <Col md={6} className="mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">
            Few Reasons Why People Choosing Us!
          </h2>
          <p className="text-muted mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>

          <Row className="g-3">
            <Col xs={6}>
              <Card className="h-100 text-center p-3 border-0 shadow-sm align-items-center">
                <FaRegClipboard className="text-primary fs-1 mb-2 " />
                <Card.Body className="p-0">
                  <Card.Title className="fs-5 fw-semibold">Easy Process</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="h-100 text-center p-3 border-0 shadow-sm">
                <FaShippingFast className="text-primary fs-1 mb-2" />
                <Card.Body className="p-0">
                  <Card.Title className="fs-5 fw-semibold">Fast Delivery</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="h-100 text-center p-3 border-0 shadow-sm">
                <FaShieldAlt className="text-primary fs-1 mb-2" />
                <Card.Body className="p-0">
                  <Card.Title className="fs-5 fw-semibold">Policy Controlling</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card className="h-100 text-center p-3 border-0 shadow-sm d-flex justify-content-center">
                <FaMoneyBillWave className="text-primary fs-1 mb-2 " />
                <Card.Body className="p-0">
                  <Card.Title className="fs-5 fw-semibold">Money Saving</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right image */}
        <Col md={6} className="text-center">
          <img
            src={feature}
            alt="Business woman at laptop"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ReasonsSection;
