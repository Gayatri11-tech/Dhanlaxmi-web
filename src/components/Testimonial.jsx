import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { TestimonialData } from "../utilities/TestimonialData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination , Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { useRef } from "react";

export const Testimonial = () => {
  const swiperRef = useRef(null); // Persistent reference
  return (
    <>
      <Container className="p-5">
        <h2 className="fw-bold text-center">
          What Our <span className="golden-text">Customers</span> says
        </h2>
        <p className="cursive-text text-center">
          Trusted by traders, wholesalers, and businesses who believe in quality
          and long-term partnerships.
        </p>
 

        <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      onMouseOver={() => swiperRef.current?.autoplay.stop()}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
      breakpoints={{ 0: {slidesPerView: 1,}, 768: {slidesPerView: 3,},}}
      className="mySwiper"
    >
      {TestimonialData.map((data, idx) => (
        <SwiperSlide key={idx} className="mb-5"  ref={swiperRef}>
          <Card className="border border-2 cursor-pointer bg-transparent rounded">
            <Card.Body className="p-3">
              <h5>{data.name}</h5>
              <h6>{data.company}</h6>
              <p className="para-text">{data.message}</p>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
      </Container>
    </>
  );
};
