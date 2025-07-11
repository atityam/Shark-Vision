import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "../assets/img/carousel-1.jpg"; 
import slide2 from "../assets/img/carousel-2.jpg";

const CustomCarousel = () => {
  return (
    <Carousel
      controls
      indicators={false}
      fade
      prevIcon={
        <span
          className="carousel-control-prev-icon custom-arrow"
          aria-hidden="true"
        />
      }
      nextIcon={
        <span
          className="carousel-control-next-icon custom-arrow"
          aria-hidden="true"
        />
      }
      className="custom-carousel"
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption className="text-start mb-5 ps-5 custom-caption">
          <h1 className="fw-bold display-4">
            Real-time person of Interest Watching Alerting
          </h1>
          <p className="lead">
            Far too often, organizations know the threats they face, but fail to recognize the face of threats. It doesn't have to be that way.
          </p>
          <Button variant="primary" size="lg">
            Explore More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption className="text-start mb-5 ps-5 custom-caption">
          <h1 className="fw-bold display-4">
            Real-time person of Interest Watching Alerting
          </h1>
          <p className="lead">
            OnWatch reliably helps you find that proverbial needle in the haystack - in real-time, real-world conditions , so that your security team can focus on doing what it does best.

          </p>
          <Button variant="primary" size="lg">
            Explore More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
