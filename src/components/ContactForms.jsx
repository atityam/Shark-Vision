import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ContactForms = () => {
  return (
    <Form className="bg-white rounded p-5 my-5 text-dark shadow">
      <Row className="mb-md-3">
        <Col md={6}>
          <Form.Control placeholder="Your Name" className="mb-md-3 p-md-3 mb-2"/>
        </Col>
        <Col md={6}>
          <Form.Control placeholder="Your Email" className="p-md-3 mb-md-3 mb-2"/>
        </Col>
      </Row>
      <Row className="mb-md-3">
        <Col md={6}>
          <Form.Control placeholder="Subject" className="p-md-3 mb-md-3 mb-2"/>
        </Col>
        <Col md={6}>
          <Form.Control placeholder="Mobile" className="p-md-3 mb-md-3 mb-2"/>
        </Col>
      </Row>
      <Form.Group className="mb-md-3 mb-2">
        <Form.Control as="textarea" rows={3} placeholder="Message"/>
      </Form.Group>
      <Button variant="primary" className="w-100 p-md-3">Submit</Button>
    </Form>
  );
};

export default ContactForms;
