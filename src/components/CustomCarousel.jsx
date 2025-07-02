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
            Insurance Creates <br /> Wealth For Everyone
          </h1>
          <p className="lead">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            magna dolore erat amet
          </p>
          <Button variant="primary" size="lg">
            More Details
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
            The Best Insurance <br /> Begins Here
          </h1>
          <p className="lead">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            magna dolore erat amet
          </p>
          <Button variant="primary" size="lg">
            More Details
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
