import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { SharedButton } from "./UI/SharedButton";
// import emailjs from '@emailjs/browser';
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contactus = ({ ref, id }) => {
  const [fdata, setfdata] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [error, seterror] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const InputHandler = (e) => {
    const { name, value } = e.target;
    setfdata((pre) => ({ ...pre, [name]: value }));
    seterror((pre) => ({ ...pre, [name]: "" }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    var isvalid = true;

    if (!fdata.name) {
      seterror((pre) => ({ ...pre, name: "Name is required" }));
      isvalid = false;
    } else if (fdata.name === " ") {
      seterror((pre) => ({ ...pre, name: "Invalid name" }));
      isvalid = false;
    }

    if (!fdata.email) {
      seterror((pre) => ({ ...pre, email: "Email is required" }));
      isvalid = false;
    } else if (fdata.email === " ") {
      seterror((pre) => ({ ...pre, email: "Invalid email" }));
      isvalid = false;
    }

    if (!fdata.contact) {
      seterror((pre) => ({ ...pre, contact: "Email is required" }));
      isvalid = false;
    } else if (fdata.contact === " ") {
      seterror((pre) => ({ ...pre, contact: "Invalid email" }));
      isvalid = false;
    }

    if (!fdata.message) {
      seterror((pre) => ({ ...pre, message: "Requirement is required" }));
      isvalid = false;
    }

    if (isvalid) {
      const form_data = { user_name:fdata.name , user_email:fdata.email, user_phone:fdata.contact,message:fdata.message}
      console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log("=========data=====", form_data);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form_data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    }
  };

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
              <h5 className="fw-bold text-center">
                Share Your Details with Us
              </h5>
              <Form onSubmit={HandleSubmit} className="p-3">
                <Form.Group className="mb-2">
                  <Form.Label>Enter Name</Form.Label>
                  <Form.Control
                    className={`${
                      error.name ? "" : "border-black"
                    } bg-transparent`}
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={InputHandler}
                    isInvalid={!!error.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Enter Contact Detail</Form.Label>
                  <Form.Control
                    className={`${
                      error.contact ? "" : "border-black"
                    } bg-transparent`}
                    type="text"
                    placeholder="Enter Contact details"
                    minLength={10}
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit number"
                    name="contact"
                    onChange={InputHandler}
                    isInvalid={!!error.contact}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.contact}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Enter Email Address</Form.Label>
                  <Form.Control
                    className={`${
                      error.email ? "" : "border-black"
                    } bg-transparent`}
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    onChange={InputHandler}
                    isInvalid={!!error.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Let’s Know Your Requirement</Form.Label>
                  <Form.Control
                    className={`${
                      error.message ? "" : "border-black"
                    } bg-transparent`}
                    as="textarea"
                    rows={5}
                    placeholder="Tell us what you’re looking for (product name, quantity, location, etc.)"
                    name="message"
                    onChange={InputHandler}
                    isInvalid={!!error.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Stack direction="vertical" className="align-items-center">
                  <SharedButton
                    Btntype={"submit"}
                    Btnlabel={"Submit"}
                    BtnVariant={"golden"}
                    className={"cta-button btn-style703 w-75"}
                  />
                </Stack>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
