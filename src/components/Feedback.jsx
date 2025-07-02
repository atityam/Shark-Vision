import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel, Button, Container } from "react-bootstrap";
import Client1 from "../assets/img/testimonial-1.jpg"
import Client2 from "../assets/img/testimonial-2.jpg"
import Client3 from "../assets/img/testimonial-3.jpg"



const slides = [
  {
    text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name 1",
    profession: "Profession",
    image: Client1,
  },
  {
    text: "Eirmod erat diam duo magna rebum amet ipsum. Magna lorem invidunt sit sit clita et, sed et lorem kasd labore amet dolore lorem.",
    name: "Client Name 2",
    profession: "Profession",
    image: Client2,
  },
  {
    text: "At tempor sea diam et tempor amet, amet sit dolor amet magna magna. Clita amet lorem sed duo dolor amet et.",
    name: "Client Name 3",
    profession: "Profession",
    image: Client3,
  },
];

const Feedback = () => {
   const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <section className="testimonial-section position-relative py-5 text-center">
      <Container>
        <h2 className="fw-bold mb-4">
          What They Say About <br /> Our Insurance
        </h2>

        <div className="position-relative">
          {/* Floating images */}
          <img src={Client1} alt="" className="floating-img d-none d-xl-block float-img-1" />
          <img src={Client2} alt="" className="floating-img d-none d-xl-block float-img-2" />
          <img src={Client3} alt="" className="floating-img d-none d-xl-block float-img-3" />
          <img src={Client1} alt="" className="floating-img d-none d-xl-block float-img-4" />
          <img src={Client2} alt="" className="floating-img d-none d-xl-block float-img-5" />
          <img src={Client3} alt="" className="floating-img d-none d-xl-block float-img-6" />

          <Carousel
            indicators={false}
            controls={false}
            interval={3000}
            ref={carouselRef}
            className="testimonial-carousel"
          >
            {slides.map((slide, idx) => (
              <Carousel.Item key={idx}>
                <div className="mb-3">
                  <img
                    src={slide.image}
                    alt={`Client ${idx + 1}`}
                    className="rounded-circle mx-auto d-block"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mx-auto mb-3" style={{ maxWidth: "800px" }}>
                  {slide.text}
                </p>
                <h5 className="fw-bold">{slide.name}</h5>
                <p className="text-secondary mb-4">{slide.profession}</p>
              </Carousel.Item>
            ))}
          </Carousel>


          {/* Custom navigation buttons */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Button
          variant="primary"
          onClick={handlePrev}
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px" }}
        >
          <FaArrowLeft />
        </Button>
        <Button
          variant="primary"
          onClick={handleNext}
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px" }}
        >
          <FaArrowRight />
        </Button>
      </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;
