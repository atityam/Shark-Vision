import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";

const Services = () => {
  return (
    <>
       <Container className="py-5 text-center">
        <h2 className="fw-bold mb-5">We Provide Professional Insurance Services</h2>
        <Row className="g-4">
          <Col md={4} >
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaUserShield className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Augmented Reality</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaHeartbeat className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Managed IT Services</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaHome className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Machine Learning</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaCar className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Augmented Reality</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaBriefcase className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Managed IT Services</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FaBuilding className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Machine Learning</h5>
              <p className="text-muted mb-3">paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business</p>
              <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services ;
