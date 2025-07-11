import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import leftImage from "../assets/img/carousel-1.jpg";   // replace with your left bg image
import rightImage from "../assets/img/carousel-2.jpg"; // replace with your right bg image

const StatsSection = () => {
  const stats = [
    { label: "Happy Clients", value: 1234 },
    { label: "Projects Succeed", value: 1234 },
    { label: "Awards Achieved", value: 1234 },
    { label: "Team Members", value: 1234 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 100);
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 30);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <Container fluid className="p-0">
      <Row className="m-0 position-relative">
        {/* Left Half */}
        <Col md={6}
          className="d-flex flex-column justify-content-center p-5 position-relative text-white overflow-hidden"
          style={{ minHeight: "600px" }}
        >
          {/* Background image as normal img */}
          <img
            src={leftImage}
            alt="Left background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          {/* Optional overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(13,110,253,0.9)",
              zIndex: 1,
            }}
          />
          {/* Content */}
          <div className="container" style={{ zIndex: 2 }}>
            <h2 className="display-5 fw-bold mb-4">
              How Shark Vision Inquiry Expendites Investigations
            </h2>
            <p className="mb-4 fs-5">
              By breaking down your security events into cases and monitoring each cases independently with cutting-edge facial recognition, 
              Shark Vision Inquiry helps you investigate any appearances of bad actors to gain situational awareness and understand previous attacks. 
              New powerful case management tools enable you to ingest videos from multiple sources and perform forensic searches on those files 
              to quickly identify potentail subjects and persons of interest.
            </p>
            <Button variant="light" size="lg">
              More Details
            </Button>
          </div>
        </Col>

        {/* Right Half */}
        <Col
          md={6}
          className="d-flex align-items-center p-5 position-relative text-dark overflow-hidden"
          style={{ minHeight: "600px" }}
        >
          {/* Background image as normal img */}
          <img
            src={rightImage}
            alt="Right background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
          {/* Optional overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255,255,255,0.8)",
              zIndex: 1,
            }}
          />
          {/* Stats */}
          <Container style={{ zIndex: 2 }}>
            <Row>
              {stats.map((stat, i) => (
                <Col md={6} key={i} className="mb-5 text-center">
                  <h2 className="fw-bold display-5">{counts[i]}</h2>
                  <p className="fs-5 text-primary">{stat.label}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsSection;
