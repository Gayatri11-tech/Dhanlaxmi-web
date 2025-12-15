import { Col, Container, Row, Stack } from "react-bootstrap"; 
import { ContactForm } from "./ContactForm";

export const Contactus = ({ ref, id }) => {
  

  return (
    <>
      <Container className="p-5" ref={ref} id={id}>
        <h2 className="fw-bold text-center">
          Connect With Us{" "}
          <span className="golden-text">We’re Ready to Supply</span>
        </h2>
        <p className="cursive-text text-center">
          Let’s start a conversation — we’re here to help you grow your
          business.
        </p>
        <Row>
          <Col md={6} xs={12}>
            <Stack
              direction="vertical"
              className="justify-content-center align-items-start h-100"
            >
              <span className="heading">Get In Touch</span>
              <p className="para-text mt-4 mb-0">
                Got a question or want to place a bulk order?
              </p>
              <p className="para-text m-0">
                <span className="golden-text fw-bold">
                  Just drop your details
                </span>{" "}
                — our team will get back to you soon.
              </p>
              <p className="para-text mt-2 mb-0 w-75">
                Whether you’re looking for kacchi aloo papadi, raw potato chips,
                or any of our other products, our team is always ready to help.
                We make sure you get clear pricing, timely delivery, and
                reliable support every step of the way. Let’s build something
                great together!
              </p>
            </Stack>
          </Col>
          <Col md={6} xs={12}>
           <Container className="shadow rounded py-4 mt-5">
      <h5 className="fw-bold text-center">Share Your Details with Us</h5>
            <ContactForm />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
