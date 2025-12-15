import { Col, Container, Image, Modal, Row, Stack } from "react-bootstrap";
import img1 from "../assets/images/chips-pyramid.png";
import { SharedButton } from "./UI/SharedButton";
import logo from "../assets/images/logo-removebg.png";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

export const Aboutus = ({ ref, id }) => {
  const [showForm, setShowForm] = useState(false);
  const [showmodal, setShowModal] = useState(false);
  const [fail, setFail] = useState(false);
  return (
    <>
      <Container className="py-5" ref={ref} id={id}>
        <h2 className="fw-bold text-center">
          Welcome to <span className="golden-text">Dhanlaxmi Trading</span>
        </h2>
        <p className="cursive-text text-center">
          where good business meets good quality!
        </p>
        {/* <h4>jaha business aur trust dono saath chalte hain!</h4> */}
        <Row>
          <Col md={6} xs={12}>
            <Stack className="align-items-center">
              <Image src={img1} width={450} height={350} />
            </Stack>
          </Col>
          <Col md={6} xs={12}>
            <Stack
              direction="vertical"
              className="justify-content-center align-items-start h-100"
            >
              <span className="heading">Our Story</span>
              <p className="para-text mt-3">
                We’ve been into trading for many years now, growing step by step
                through trust, hard work, and happy customers. What started as a
                small trading setup has turned into a reliable name for
                <span className="golden-text fw-bold">
                  {" "}
                  bulk raw potato chips supply{" "}
                </span>
                across different parts of India.
              </p>
            </Stack>
            <p></p>
          </Col>

          <Col md={6} xs={12}>
            <Stack
              direction="vertical"
              className="justify-content-center align-items-start h-100"
            >
              <span className="heading ">Our Mission</span>

              <p className="para-text mt-3">
                We believe in keeping things simple —{" "}
                <span className="golden-text fw-bold">
                  fresh products, fair deals, and on-time delivery.
                </span>{" "}
                Our focus is on building long-term partnerships with
                wholesalers, namkeen makers, and snack businesses who value
                quality and consistency just like we do.
              </p>
            </Stack>
            <p></p>
          </Col>
          <Col md={6} xs={12}>
            <Stack className="align-items-center">
              <Image src={img1} width={450} height={350} />
            </Stack>
          </Col>
          <Col md={12} xs={12}></Col>
        </Row>

        <Stack direction="vertical" className="justify-content-center mt-3">
          <h5 className="text-center px-5 mt-5">
            At Dhanlaxmi Trading, we don’t just sell — we connect, support, and
            grow together.
          </h5>
          <h5 className="text-center px-5">
            Because for us, every deal is the start of a long lasting
            relationship.
          </h5>
          <SharedButton
            BtnVariant={"golden"}
            Btnlabel={"Start Your Deal"}
            className={"btn-style703 mx-auto mt-4"}
            BtnClick={() => setShowForm(true)}
          />
        </Stack>
      </Container>

      {showForm && (
        <Modal
          show={showForm}
          onHide={() => setShowForm(false)}
          centered
          className="shadow border-0"
        >
          <Modal.Header closeButton>
            <h5 className="fw-bold golden-text mb-0 m-auto">
              Share Your Details with Us
            </h5>
          </Modal.Header>
          <Modal.Body>
            <ContactForm
              onSuccess={() => {
                setShowForm(false);
                setShowModal(true);
              }}
              onFailure={() => {
                setShowModal(true);
                setFail(true);
              }}
            />
          </Modal.Body>
        </Modal>
      )}

      {showmodal && (
        <Modal show={showmodal} onHide={() => setShowModal(false)} centered>
          <Modal.Body className="pb-0 mb-0">
            <Stack
              direction="vertical"
              gap={3}
              className="justify-content-center align-items-center p-3 pb-0"
            >
              <Image
                src={logo}
                className="text-center"
                width={150}
                height={200}
              />
              <h3 className="golden-text text-center fw-bold">
                Thank you for reaching out to Dhanlaxmi Trading Company.
              </h3>
              {!fail ? (
                <p className="paratext text-center mb-0">
                  Your inquiry has been successfully submitted. Our team will
                  connect with you soon with the best possible details.
                </p>
              ) : (
                <p className="paratext text-center text-danger mb-0">
                  We’re sorry! An error occurred while submitting the form.
                  Please try again later.
                </p>
              )}
            </Stack>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0 align-items-center justify-content-center">
            <SharedButton
              Btntype={"button"}
              Btnlabel={"Okay"}
              BtnVariant={"golden"}
              className={"cta-button btn-style703"}
              BtnClick={() => setShowModal(false)}
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};
