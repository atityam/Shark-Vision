import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ContactForms from "./ContactForms";

const MapContactSection = () => {
  return (
    <Container className="py-5">
      <Row className="gy-4 align-items-center">
        {/* Contact Form */}
        <Col lg={6}>
          <h1 className="mb-4 fw-bold">
            If You Have Any Query, Please Contact Us
          </h1>
          <p className="mb-4 text-muted">
           Shark Vision inquiry processed thousands of hours of footage in a matter of minutes and successfully detected the robber across a number of cameras which clearly mapped out his route. 
          </p>

            <ContactForms/>
        </Col>
        {/* Google Map */}
        <Col lg={6}>
          <div className="h-100 rounded overflow-hidden" style={{ minHeight: "100px" }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7674799104097!2d75.86470487476082!3d22.699698228301067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce2c1f7a605%3A0xf052d6f6d94333f3!2sSapna%20Sangeeta%20Rd%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1751522284725!5m2!1sen!2sin"
              width="100%"
              height="675px"
              borderRadius="10px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default MapContactSection;
