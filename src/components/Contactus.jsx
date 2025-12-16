import { Col, Container, Image, Modal, Row, Stack } from "react-bootstrap"; 
import { ContactForm } from "./ContactForm";
import { useState } from "react";
import logo from "../assets/images/logo-removebg.png";
import { SharedButton } from "./UI/SharedButton";


export const Contactus = ({ ref, id }) => {
      const [showmodal, setShowModal] = useState(false);
    const [fail, setFail] = useState(false);

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
                        <ContactForm onSuccess={()=>{setShowModal(true)}} onFailure={()=>{setShowModal(true);setFail(true)}}/>
            </Container>
          </Col>
        </Row>
      </Container>


        {/* --------------------Form response modal------------------------------------- */}
        {showmodal && (
      <Modal show={showmodal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="pb-0 mb-0">
          <Stack
            direction="vertical"
            gap={3}
            className="justify-content-center align-items-center p-3 pb-0"
          >
            <Image src={logo} className="text-center" width={150} height={200}/>
            <h3 className="golden-text text-center fw-bold">
              Thank you for reaching out to Dhanlaxmi Trading Company.
            </h3>
            {!fail ? 
            <p className="paratext text-center mb-0">
              Your inquiry has been successfully submitted. Our team will
              connect with you soon with the best possible details.
            </p>: <p className="paratext text-center text-danger mb-0">
                We’re sorry! An error occurred while submitting the form. Please try again later.
                </p>}
          </Stack>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0 align-items-center justify-content-center">
            <SharedButton
            Btntype={"button"}
            Btnlabel={"Okay"}
            BtnVariant={"golden"}
            className={"cta-button btn-style703"}
            BtnClick={()=>setShowModal(false)}
          />
        </Modal.Footer>
      </Modal>
       )} 


    </>
  );
};
