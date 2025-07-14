import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import heroimg from '../assets/img/frs_header.png';
import lapimg from "../assets/img/centralized-intelligence-oosto.png";
import { SiTicktick } from "react-icons/si";
import './Sidebar.css';


const Products = () => {
  return (
    <>
      <FullWidthImage src={heroimg} />
      <OnWatchLayout/>
    </>
  );
};

export default Products;

function FullWidthImage({ src }) {
  return (
    <Container fluid className="p-sm-5">
      <Image
        src={src}
        fluid
        style={{
          width: '100vw',
          objectFit: 'cover'
        }}
      />
    </Container>
  );
}

function OnWatchLayout () {
  return (
    <Container className="py-4">
      <Row>
        {/* Main Content */}
        <Col xs={12} lg={8} className="px-4">
          <h2 className='fw-bold'>Real-time Person of Interest Watchlist Alerting</h2>
          <p>
            Far too often, organizations know the threats they face, but fail to recognize the face of threats.
             It doesn’t have to be that way. Security teams can spend up to 80% of their time searching for known 
             perpetrators or individuals flagged as threats. Yet, 60% of these same security professionals say they 
             struggle to monitor and identify known persons of interest in real-time.
          </p>

          <p>
            OnWatch reliably helps you find that proverbial needle in the haystack - in real-time, real-world conditions,
             so that your security team can focus on doing what it does best.
          </p>

          <h3 className="mt-5 fw-bold">OnWatch finds the people who don't want to be found</h3>
          <p>
           OnWatch solves your most challenging person of interest (POI) alerting use cases. Built for excellence in real-time,
            real-world scenarios, OnWatch has earned a reputation for superior accuracy in-the-wild, using your existing camera
             and VMS infrastructure. Leveraging highly accurate facial recognition, plus body and attribute detection,
              OnWatch finds the people who don't want to be found:
          </p>

          <Row className="align-items-start">
            <Col md={6}>
              <Image src={lapimg} fluid rounded />
            </Col>
            <Col md={6}>
              <h4 className='fw-bold'>Key Features</h4>
              <ListGroup variant="flush">
                {[
                  'Automated POI Alerting',
                  'Find Associates',
                  'Body Search',
                  'Attribute Search',
                  'Rapidly Scale',
                  'Attribute Search',
                  'Rapidly Scale',

                ].map((feat, idx) => (
                  <ListGroup.Item key={idx}>
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    <span className='tickicon'><SiTicktick /></span>
                    {feat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <h2 className='fw-bold text-primary mt-4'>Competently architect intermandated deliverables client niches continually underwhelm</h2>
            <p>Appropriately communicate economically sound e-commerce after enterprise services. Dramatically target cross-media solutions and error-free platforms. Monotonectally pontificate 24/365 human capital and dynamic potentialities compellingly pursue</p>
          </Row>
        </Col>

        {/* Sidebar */}
        <Col xs={12} lg={4} className="px-4 mt-5 mt-lg-0">
        <Sidebar/>
        </Col>

      </Row>
    </Container>
  );
}


function Sidebar() {
    const industries = [
  'Law Enforcement',
  'Airports and Seaports',
  'Homeland Security & Border Control',
  'Smart Cities',
  'Correctional Facilities',
  'Courthouses & Government Buildings',
  'Schools and Education'
];
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">
        Solutions by Industry<br />
        Verticals
                <span className="underline" />
      </h1>
      <ul className="sidebar-list">
        {industries.map((item, idx) => (
          <li key={idx} className="sidebar-item">
            <a href="#" className="sidebar-link">
              <span className="icon">📁</span>
              {item}
              <span className="arrow">→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

