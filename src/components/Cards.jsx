import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Cards.css';

const testimonials = [
  {
    name: 'Alberta Infantino',
    role: 'UI Designer',
    text: 'Monotonectally extend open-source paradigms via competitive methods of empowerment.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    stars: 5,
  },
  {
    name: 'Saifur Rahman',
    role: 'Developer',
    text: 'Monotonectally extend open-source paradigms via competitive methods of empowerment.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    stars: 5,
  },
  {
    name: 'Maria Gomez',
    role: 'Project Manager',
    text: 'Dramatically leverage existing best practices vis-a-vis dynamic growth strategies.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    stars: 5,
  },
  {
    name: 'John Smith',
    role: 'CEO',
    text: 'Completely synergize scalable e-commerce via resource maximizing ROI.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">
          Few Stories From Our <span style={{ color: '#ff4500' }}>Client</span>
        </h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card p-4 rounded-4 shadow">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-image rounded-4 me-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small className="text-danger fw-semibold">{item.role}</small>
                  </div>
                </div>
                <p className="text-light-emphasis">{item.text}</p>
                <div className="mt-3">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <span key={i} style={{ color: '#ffc107', fontSize: '1.2rem' }}>★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
