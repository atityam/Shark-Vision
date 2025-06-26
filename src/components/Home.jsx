import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import heroimg from '../assets/heroimg.png';


const Home = () => {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className='bg-dark'>
          <Container className="py-5 text-white ">
            <Row className="align-items-center g-4 ">
              <Col xs={12} md={6}>
                <div
                  className="d-inline-block px-3 py-1 mb-3 rounded-pill"
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '2px solid #ff4500',
                    color: '#ff4500',
                  }}
                >
                  <strong>SHARK VISION TECHNOLOGIES</strong>
                </div>

                <h1 className="fw-bold display-5 mb-3">
                  Empowering Your
                  <br />
                  Digital Future
                </h1>

                <p className="text-secondary mb-4" style={{ maxWidth: '500px' }}>
                  Where your interests meet global networks, we deliver custom software solutions
                  with exceptional value.
                </p>

                <Button variant="danger" className="rounded-pill px-4 py-2">
                  EXPLORE MORE
                </Button>
              </Col>

              <Col xs={12} md={6} className="text-center">
                <img
  src={heroimg}
  alt="Hero"
  className="img-fluid"
  style={{ maxHeight: '400px' }}
/>

              </Col>

            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="py-5 text-white ">
            <Row className="align-items-center g-4 ">
              <Col xs={12} md={6} className="text-center">
                <img
  src={heroimg}
  alt="Hero"
  className="img-fluid"
  style={{ maxHeight: '400px' }}
/>

              </Col>
<Col xs={12} md={6}>
                <div
                  className="d-inline-block px-3 py-1 mb-3 rounded-pill"
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '2px solid #ff4500',
                    color: '#ff4500',
                  }}
                >
                  <strong>SHARK VISION TECHNOLOGIES</strong>
                </div>

                <h1 className="fw-bold display-5 mb-3">
                  Empowering Your
                  <br />
                  Digital Future
                </h1>

                <p className="text-secondary mb-4" style={{ maxWidth: '500px' }}>
                  Where your interests meet global networks, we deliver custom software solutions
                  with exceptional value.
                </p>

                <Button variant="danger" className="rounded-pill px-4 py-2">
                  EXPLORE MORE
                </Button>
              </Col>
            </Row>
            </Container>
        </Carousel.Item>

        <Carousel.Item>
            <Container className="py-5 text-white ">
            <Row className="align-items-center g-4 ">
                <Col xs={12} md={6}>
                <div
                  className="d-inline-block px-3 py-1 mb-3 rounded-pill"
                  style={{
                    backgroundColor: '#1a1a1a',
                    border: '2px solid #ff4500',
                    color: '#ff4500',
                  }}
                >
                  <strong>SHARK VISION TECHNOLOGIES</strong>
                </div>

                <h1 className="fw-bold display-5 mb-3">
                  Empowering Your
                  <br />
                  Digital Future
                </h1>

                <p className="text-secondary mb-4" style={{ maxWidth: '500px' }}>
                  Where your interests meet global networks, we deliver custom software solutions
                  with exceptional value.
                </p>

                <Button variant="danger" className="rounded-pill px-4 py-2">
                  EXPLORE MORE
                </Button>
              </Col>

              <Col xs={12} md={6} className="text-center">
                <img
  src={heroimg}
  alt="Hero"
  className="img-fluid"
  style={{ maxHeight: '400px' }}
/>

              </Col>
               </Row>
               </Container>  
        </Carousel.Item>
      </Carousel>

<div className="marquee-wrapper">
  <div className="marquee-track">
    {Array(10).fill(0).map((_, i) => (
      <span key={i} className="marquee-item">
        * Experience Seamless IT Solutions *
      </span>
    ))}
    {/* Repeat the same items to make loop seamless */}
    {Array(10).fill(0).map((_, i) => (
      <span key={i + 100} className="marquee-item">
        * Experience Seamless IT Solutions *
      </span>
    ))}
  </div>
</div>
<div> adtya</div>



    </>
  );
};

export default Home;
