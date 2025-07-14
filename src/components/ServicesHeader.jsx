import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import servicesBg from "../assets/img/bgimg.jpg"; 

const ServicesHeader = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        position: "relative",
        color: "#000",
      }}
    >
      <Container>
        <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
          Services
        </h1>
        <Breadcrumb className="bg-transparent p-0 m-0">
          <Breadcrumb.Item href="/" className="text-dark">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="text-dark">
            Company
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-primary fw-bold">
            Services
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default ServicesHeader;
