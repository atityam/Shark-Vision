import React from "react";
import feature from '../assets/img/feature.jpg' ;
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaRegClipboard, FaShippingFast, FaShieldAlt, FaMoneyBillWave, FaCar, FaHeartbeat, FaHome, FaBriefcase, FaBuilding, FaUserShield, FaPhone } from "react-icons/fa";
import { PiX } from "react-icons/pi";
import { TiStopwatch ,TiLocationOutline } from "react-icons/ti";
import { LuFileSearch } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { PiFolderBold } from "react-icons/pi";
import { TbDatabaseSearch } from "react-icons/tb";



const Features = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col sm={12} md={6} className="mb-4 mb-md-0 my-container-1">
            <h2 className="fw-bold mb-3">Few Reasons Why People Choosing Us!</h2>

            <Row className="g-3 px-5">
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <TiStopwatch className="text-primary fs-1 mt-4 mb-3 " />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Forensic Video Analysis in Minutes</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <PiFolderBold className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Ingest Multiple Media Files</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <LuFileSearch className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Streamline Case Management</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <MdPeopleAlt className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Find Repeat Appearances of Specified Individuals</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <TbDatabaseSearch className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Advanced Search Filters</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} >
                <Card className="h-100 text-center p-3 border-0 shadow-lg align-items-center ">
                  <TiLocationOutline className="text-primary fs-1 mt-4 mb-3" />
                  <Card.Body className="p-0 mb-4">
                    <Card.Title className="fs-5 fw-semibold">Track Subject's Route using Body Recognition</Card.Title>
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
