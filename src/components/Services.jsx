import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {FiAlertTriangle,} from "react-icons/fi";
import { PiX } from "react-icons/pi";
import { MdGroups2 , MdOutlineQuickreply ,MdPrivacyTip} from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { TbShoppingBagSearch } from "react-icons/tb";



const Services = () => {
  return (
    <>
       <Container className="py-5 text-center">
        <h2 className="fw-bold mb-5">Capabilities That Solve These Challenges</h2>
        <Row className="g-4">
          <Col md={4} >
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <FiAlertTriangle className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Automates POI Altering</h5>
              <p className="text-muted mb-3">In real-time, identify POIs even in the most challenging conditions(low lighting, harsh angles, crowds, etc.) and get alerts on any device. </p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
             </Card> 
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <MdGroups2 className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Find Associates</h5>
              <p className="text-muted mb-3">Review POI detections and find the people they have come in contact with.</p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <GiBodyHeight className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Body Search</h5>
              <p className="text-muted mb-3">Use unique skeletal models to track POIs across cameras, even without a face match.</p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <TbShoppingBagSearch className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Attribute Search</h5>
              <p className="text-muted mb-3">Search by attributes like clothing color (top and bottom) and accessories such as backpacks.</p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <MdOutlineQuickreply className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Rapidly Scale</h5>
              <p className="text-muted mb-3">Cost effectively expand and add licenses by adding edge devices without losing out on performance.</p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-start p-4 border-0 shadow-sm">
              <MdPrivacyTip className="text-primary fs-1 mb-3" />
              <h5 className="fw-semibold mb-2">Privacy</h5>
              <p className="text-muted mb-3">Detect and recognize only POIs, manage team viewing privileges, and protect bystander privacy.  </p>
              {/* <Button variant="link" className="p-0 text-decoration-none" href='#top'>Read More</Button> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services ;
