import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import mainImage from "../assets/img/about.jpg";
import icon1 from "../assets/img/icon/icon-04-primary.png"; 
import icon2 from "../assets/img/icon/icon-03-primary.png";
import callPerson from "../assets/img/profile.jpg"; // Replace with person icon for call line

const AssistanceSection = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">
        {/* Left Side */}
        <Col md={6} className="position-relative">
          {/* Experience Badge */}
          <div
  style={{
    position: "absolute",
    border: "20px solid #fff", 
    top: "-60px",                  // fixed: added missing comma above
    left: "-30px",
    zIndex: 10,
    backgroundColor: "#0d6efd",
    color: "#fff",
    padding: "30px 30px",
    borderRadius: "15px",
    textAlign: "center",
    fontWeight: "bold",
    
  }}
>
  <div style={{ fontSize: "3rem", lineHeight: "1.2" }}>25</div>
  <div>Years</div>
  <div style={{ fontSize: "1.5rem", fontWeight: "normal" }}>
    Experience
  </div>
</div>


          {/* Main Image */}
          <Image
            src={mainImage}
            alt="Advisor"
            fluid
            rounded
            className="w-100 shadow"
          />
        </Col>

        {/* Right Side */}
        <Col md={6}>
          <h1 className="fw-bold mb-4">
            We're Here To Assist You With Exploring Protection
          </h1>
          <p className="text-primary mb-4">
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
            lorem sit clita duo justo erat amet
          </p>

          <Row className="mb-4">
            <Col xs={6} className="d-flex align-items-start">
              <Image
                src={icon1}
                alt="Flexible Insurance Plans"
                style={{ width: "40px", marginRight: "15px" }}
              />
              <div>
                <h5 className="fw-bold mb-1">Flexible Insurance Plans</h5>
              </div>
            </Col>
            <Col xs={6} className="d-flex align-items-start">
              <Image
                src={icon2}
                alt="Money Back Guarantee"
                style={{ width: "40px", marginRight: "15px" }}
              />
              <div>
                <h5 className="fw-bold mb-1">Money Back Guarantee</h5>
              </div>
            </Col>
          </Row>

          <p className="text-muted mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            magna dolore erat amet
          </p>

          <hr />

          <div className="d-flex align-items-center mt-3">
            <Image
              src={callPerson}
              alt="Call Person"
              roundedCircle
              style={{ width: "50px", height: "50px", marginRight: "15px" }}
            />
            <h5 className="fw-bold mb-0">Call Us: +012 345 6789</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AssistanceSection;
