import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHandshake, FaUserFriends, FaFileContract, FaStar } from "react-icons/fa"; // example icons
import AnimatedCounters from './AnimatedCounters';

const AnimatedCounters = () => {
  const targetValues = [1250, 250, 125000, 20];
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 2000;
    const increments = targetValues.map(v => Math.ceil(v / (duration / 20)));

    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, i) => {
          if (count < targetValues[i]) {
            const next = count + increments[i];
            return next >= targetValues[i] ? targetValues[i] : next;
          }
          return count;
        })
      );
    }, 20);

    const timeout = setTimeout(() => clearInterval(interval), duration + 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const icons = [FaHandshake, FaUserFriends, FaFileContract, FaStar];
  const labels = [
    "Happy Customer",
    "Professional Agent",
    "Contract Signed",
    "Years of Experience",
  ];

  return (
    <div style={{ backgroundColor: "#23A6F0", padding: "60px 0" }}>
      <Container>
        <Row className="text-center justify-content-center">
          {counts.map((count, idx) => {
            const Icon = icons[idx];
            return (
              <Col
                key={idx}
                md={3}
                sm={6}
                xs={12}
                className="d-flex flex-column align-items-center mb-4 mb-md-0"
              >
                <div
                  style={{
                    backgroundColor: "#FDB515",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={36} color="white" />
                </div>
                <h2 style={{ color: "white", fontWeight: "bold" }}>
                  {count.toLocaleString()}{idx === 1 || idx === 3 ? "+" : idx === 2 ? "K" : ""}
                </h2>
                <p style={{ color: "white", margin: 0, fontSize: 16 }}>
                  {labels[idx]}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default AnimatedCounters;
