import { useState } from "react";
import { Container, Form, Image, Modal, Stack } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { SharedButton } from "./UI/SharedButton";

export const ContactForm = ({ onSuccess, onFailure }) => {
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
      const form_data = {
        user_name: fdata.name,
        user_email: fdata.email,
        user_phone: fdata.contact,
        message: fdata.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form_data,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setfdata({ name: "", email: "", contact: "", message: "" });
            onSuccess();
          },
          (error) => {
            setfdata({ name: "", email: "", contact: "", message: "" });
            onFailure();
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <>
      <Form onSubmit={HandleSubmit} className="p-3">
        <Form.Group className="mb-2">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control
            className={`${error.name ? "" : "border-black"} bg-transparent`}
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
            className={`${error.contact ? "" : "border-black"} bg-transparent`}
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
            className={`${error.email ? "" : "border-black"} bg-transparent`}
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
            className={`${error.message ? "" : "border-black"} bg-transparent`}
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
    </>
  );
};
