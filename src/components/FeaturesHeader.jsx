import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import featureBg from "../assets/img/bgimg.jpg"; 

const FeaturesHeader = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featureBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        position: "relative",
        color: "#000",
      }}
    >
      <Container>
        <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
          Features
        </h1>
        <Breadcrumb className="bg-transparent p-0 m-0">
          <Breadcrumb.Item href="/" className="text-dark">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="text-dark">
            Company
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-primary fw-bold">
            Features
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default FeaturesHeader;
