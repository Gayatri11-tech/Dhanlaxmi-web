import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { TestimonialData } from "../utilities/TestimonialData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination , Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';

export const Testimonial = () => {
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

        {/* <Carousel interval={3000}>
            <Row className="justify-content-center">
                  <Col md={4} xs={12}>

          {TestimonialData.map((data, idx) => {
            return (
              <Carousel.Item key={idx}>
                
                    <Card className="border rounded">
                      <Card.Body className="p-3">
                        <h5>{data.name}</h5>
                        <h6>{data.company}</h6>
                        <p className="para-text">{data.message}</p>
                      </Card.Body>
                    </Card>
                  
              </Carousel.Item>
            );
          })}
          </Col>
                </Row>
        </Carousel> */}

         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true,}}
         autoplay={{delay: 2500,disableOnInteraction: false,}}
        modules={[Pagination,Autoplay]}

        className="mySwiper"
      > 
        {TestimonialData.map((data, idx) => {
            return (
              <SwiperSlide key={idx}>
                    <Card className="border rounded" >
                      <Card.Body className="p-3">
                        <h5>{data.name}</h5>
                        <h6>{data.company}</h6>
                        <p className="para-text">{data.message}</p>
                      </Card.Body>
                    </Card>
             </SwiperSlide>
            );
          })}
      </Swiper>
      </Container>
    </>
  );
};
