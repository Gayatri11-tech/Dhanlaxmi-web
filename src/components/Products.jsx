import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Modal,
  Button,
} from "react-bootstrap";
import { ProductData } from "../utilities/ProductData";
import { useState } from "react";
import { SharedButton } from "./UI/SharedButton";
import logo from "../assets/images/logo-removebg.png";
import { ContactForm } from "./ContactForm";

export const Products = ({ ref, id }) => {
  const [show, setshow] = useState(false);
  const [showProd, setshowProd] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showmodal, setShowModal] = useState(false);
  const [fail, setFail] = useState(false);

  const openModal = (prod) => {
    setshowProd(prod);
    setshow(true);
  };
  return (
    <>
      <Container className="p-5" ref={ref} id={id}>
        <h2 className="fw-bold text-center">
          Explore Our <span className="golden-text">Products</span>
        </h2>
        <p className="cursive-text text-center">
          Supplying bulk products that meet your quality standards and business
          needs.
        </p>
        <Row className="g-5 py-5">
          {ProductData.map((prod) => {
            return (
              <Col md={4} sm={12} key={prod.id} className="p-0">
                <Card
                  className="product-card"
                  onClick={() => {
                    openModal(prod);
                  }}
                >
                  <div className="image-hover-card">
                    <Card.Img
                      src={prod.image}
                      alt="Product"
                      className="image image-front"
                    />
                    <Card.Img
                      src={prod.hoverimage}
                      alt="Product"
                      className="image image-back"
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="golden-text fw-bold">
                      {prod.name}
                    </Card.Title>
                    <Card.Text>{prod.description} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {showProd && (
          <Modal show={show} onHide={() => setshow(false)} centered>
           
            {showForm ? (<>
              <Modal.Header closeButton >
          <h5 className="fw-bold golden-text mb-0 m-auto">Share Your Details with Us</h5>
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
              </>
            ) : (<>
               <Modal.Header className="border-0 w-100 text-center" closeButton>
              <Modal.Title className="fw-bold golden-text">
                {showProd.name}
              </Modal.Title>
            </Modal.Header>
              <Modal.Body className="text-center para-text m-0">
                <Image src={showProd.image} fluid />
                <h5 className="mt-3">
                  Available Packaging -{" "}
                  <span className="fw-bold">{showProd.availableIn}</span>
                </h5>
                <h5>
                  Best Wholesale Rate -
                  <span className="fw-bold"> {showProd.price} per KG</span>
                </h5>
                <h5>
                  Order Starts From -{" "}
                  <span className="fw-bold">{showProd.minOrder}</span>
                </h5>
              </Modal.Body>
               <Modal.Footer className="border-0 justify-content-center pb-4">
              <SharedButton
                BtnVariant={"golden"}
                Btnlabel={"Order Now"}
                className={"cta-button btn-style703 m-0"}
                BtnClick={() => setShowForm(true)}
              />
            </Modal.Footer>
              </>
            )}
           
          </Modal>
        )}
      </Container>

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
