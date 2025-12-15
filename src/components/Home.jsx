import { Container, Modal, Stack } from "react-bootstrap";
import BlurText from "./UI/BlurText";
import { SharedButton } from "./UI/SharedButton";
import { useState } from "react";
import { ContactForm } from "./ContactForm";
import logo from "../assets/images/logo-removebg.png";


export const Home = ({ref,id}) => {
  const [ showForm, setShowForm] = useState(false);
    const [showmodal, setShowModal] = useState(false);
  const [fail, setFail] = useState(false);
  return (
    <>
      <Container fluid className="Hero-section" ref={ref} id={id}>
        <div className="title-text col-sm-10 col-md-5">
        <BlurText
          text="Wholesale "
          delay={100}
          animateBy="words"
          direction="top"
          className="mb-0"
        />
        <BlurText
          text="Raw Potato Chips"
          delay={400}
          animateBy="words"
          direction="top"
          className="primary-text mb-0"
        />
        <BlurText
          text="Direct From Manufacturer"
          delay={500}
          animateBy="words"
          direction="top"
        />
         <BlurText
          text="Lalu Chips – Naturally Simple ,Always Fresh"
          delay={250}
          animateBy="words"
          direction="top"
          className="fs-5"
        />
         <BlurText
          text="We are leading traders of kacchi aloo papadi (raw potato chips) supplying across India. Our focus is on consistent quality, timely delivery, and competitive wholesale prices   trusted by namkeen manufacturers, distributors, and snack units nationwide."
          delay={100}
          animateBy="words"
          direction="top"
          className="para-text"
        />

         <SharedButton 
         BtnVariant={'golden'}
        Btnlabel={'Order Now'} 
        className={'cta-button btn-style703'}
        BtnClick={()=>setShowForm(true)}
        />
        
        </div>

       {showForm && (
       <Modal show={showForm} onHide={()=>setShowForm(false)} centered className="shadow border-0">
        <Modal.Header closeButton >
          <h5 className="fw-bold golden-text mb-0 m-auto">Share Your Details with Us</h5>
          </Modal.Header>
        <Modal.Body>
            <ContactForm onSuccess={()=>{setShowForm(false);setShowModal(true)}} onFailure={()=>{setShowModal(true);setFail(true)}}/>
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

       
       
      </Container>
    </>
  );
};
