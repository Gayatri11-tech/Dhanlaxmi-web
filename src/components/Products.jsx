import { Col, Container, Row, Image, Card, Modal, Button } from "react-bootstrap";
import { ProductData } from "../utilities/ProductData";
import { useState } from "react";
import { SharedButton } from "./UI/SharedButton";

export const Products = ({ref,id}) => {
  const [show, setshow] = useState(false);
  const [showProd, setshowProd] = useState({});

  const openModal = (prod) => {
    setshowProd(prod);
    setshow(true);
  }
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
              <Col md={4} sm={12} key={prod.id}>
                <Card className="product-card" onClick={() => { openModal(prod) }}>
                  <div className="image-hover-card">
                    <Card.Img src={prod.image} alt="Product" className="image image-front" />
                    <Card.Img src={prod.hoverimage} alt="Product" className="image image-back" />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="golden-text fw-bold">{prod.name}</Card.Title>
                    <Card.Text>{prod.description} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>

        {showProd && (
          <Modal show={show} onHide={() => setshow(false)} centered>
            <Modal.Header className="border-0 w-100 text-center" closeButton>
              <Modal.Title className="fw-bold golden-text">{showProd.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center para-text m-0">
              <Image src={showProd.image} fluid />
              <h5 className="mt-3">Available Packaging - <span className="fw-bold">{showProd.availableIn}</span></h5>
              <h5>Best Wholesale Rate -<span className="fw-bold"> {showProd.price} per KG</span></h5>
              <h5>Order Starts From - <span className="fw-bold">{showProd.minOrder}</span></h5>
            </Modal.Body>
            <Modal.Footer className="border-0 justify-content-center pb-4">
              <SharedButton
                BtnVariant={'golden'}
                Btnlabel={'Order Now'}
                className={'cta-button btn-style703 m-0'} />
              {/* <Button variant="secondary" onClick={() => setshow(false)}>
              Close
            </Button> */}
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </>
  );
};
