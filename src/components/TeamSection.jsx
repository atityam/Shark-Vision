import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import member1 from "../assets/img/team-1.jpg"; 
import member2 from "../assets/img/team-2.jpg";
import member3 from "../assets/img/team-3.jpg";
import member4 from "../assets/img/team-4.jpg";

const teamMembers = [
  { img: member1, name: "John Doe", designation: "Product Manager" },
  { img: member2, name: "Jin Doe", designation: "Product Developer" },
  { img: member3, name: "Jin Doe", designation: "UI/UX Designer" },
  { img: member4, name: "John Doe", designation: "Web Developer" },
];

const TeamSection = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold">
        Meet Our Professional <br /> Team Members
      </h2>
      <Row className="g-4 justify-content-center">
        {teamMembers.map((member, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Card className="team-card border-0 shadow" style={{ width: "100%" }}>
              <div className="team-img-container position-relative overflow-hidden rounded-3">
                <Card.Img
                  variant="top"
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                />
                <div className="social-icons d-flex justify-content-center gap-3 position-absolute bottom-0 start-0 end-0 py-3 bg-white"
                  style={{ transform: "translateY(100%)", transition: "transform 0.4s" }}>
                  <FaTwitter className="social-icon" />
                  <FaFacebookF className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaLinkedinIn className="social-icon" />
                </div>
              </div>
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.designation}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamSection;
