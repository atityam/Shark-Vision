import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import heroimg from '../assets/img/frs_header.png';
import lapimg from "../assets/img/centralized-intelligence-oosto.png";
import { SiTicktick } from "react-icons/si";
import './Sidebar.css';

const FRSContent = () => {
  return (
    <>
      <FullWidthImage src={heroimg} />
      <OnWatchLayout/>
    </>
  );
};

export default FRSContent;

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
          <h2 className='fw-bold'>FRS Investigation Portable Device</h2>
          <p>
           In today’s world, surveillance cameras are practically everywhere, from government buildings, airports, roadways, retail shops, and corporate offices, to wearable and car-mounted cameras. Given their prevalence, video evidence is now playing a pivotal role in civil and criminal investigations, mediations, and trials.
          </p>

          <p>
           Often, video footage must be captured from many disparate sources – CCTV cameras, mobile phones, and even street cameras – to develop a more holistic understanding of a crime scene. Just as important, video analytics solutions must comb through hours of footage to identify persons of interest quickly and accurately.
          </p>
          <p>
            Unfortunately, this process can often take hours or days with traditional VMS systems. This is the power of Rapid Enquiry - a FRS Investigation Portable Device, which swiftly ingests video footage from a variety of cameras and searches for likely suspects in minutes.
          </p>

          <h3 className="mt-5 fw-bold">How Rapid Inquiry Expedites Forensic Investigations</h3>
          <p>
         By breaking down your security events into cases and monitoring each case independently with cutting-edge facial recognition, Rapid Inquiry helps you investigate any appearances of bad actors to gain situational awareness and understand previous attacks. New powerful case management tools enable you to ingest videos from multiple sources and perform forensic searches on those files to quickly identify potential subjects and persons of interest.
          </p>

          <Row className="align-items-start mt-3">
            <Col md={6}>
              <Image src={lapimg} fluid rounded />
            </Col>
            <Col md={6}>
              <h4 className='fw-bold'>Key Features</h4>
              <ListGroup variant="flush">
                {[
                  'Perform Forensic Video Analysis in Minutes',
                  'Ingest Multiple Media Files',
                  'Streamline Case Management',
                  'Find Repeat Appearances of Individuals',
                  'Advanced Search Filters',
                  'Track Subject’s Route Using Body Recognition',

                ].map((feat, idx) => (
                  <ListGroup.Item key={idx}>
                    <i className="bi bi-check-circle-fill text-success me-2" />
                    <span className='tickicon'><SiTicktick /></span>
                    {feat}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <h2 className='fw-bold text-primary mt-4'>Case Study: Jewelry Store Robbery</h2>
            <p>Following a jewelry store robbery during which an unknown man smashed display cases and took items worth millions of dollars, the local police force was faced with two critical challenges – the first was to confirm the thief’s identity, and the second was to map out his route during the week prior to the act. The police began by gathering footage from the 10 CCTV cameras installed in and around the store, focusing on the time of the robbery. Using this footage, they quickly extracted the thief’s face and ran it through their database, successfully identifying the suspect with Oosto’s OnWatch system. Next, they gathered footage from 100 CCTV cameras across the surrounding neighborhood and analyzed hours of recordings using the system’s forensic mode</p>
          <h2 className='fw-bold text-primary mt-4'> The Results</h2>
          <p>
            Oosto Inquiry processed thousands of hours of footage in a matter of minutes and successfully detected the robber across a number of cameras which clearly mapped out his route. It also identified a second person assisting him, and, as a result, they were both located and apprehended by the police.
          </p>
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
      <h1 className="sidebar_title">
        Solutions by Industry<br />
        Verticals
                <span className="underline" />
      </h1>
      <ul className="sidebar_list">
        {industries.map((item, idx) => (
          <li key={idx} className="sidebar_item">
            <a href="#" className="sidebar_link">
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