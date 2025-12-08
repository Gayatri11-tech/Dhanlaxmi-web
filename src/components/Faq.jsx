import { Accordion, Container } from "react-bootstrap";
import { FaqData } from "../utilities/FaqData";

export const Faq = ({ref,id}) => {
  
  return (
    <>
      <Container className="p-5" ref={ref} id={id}>
        <h2 className="fw-bold text-center">
          Everything You Need to <span className="golden-text">Know</span>
        </h2>
        <p className="cursive-text text-center">
          Quick answers to the most common questions about our products and
          services.
        </p>

        <Accordion className="custom-accordion mt-5" defaultActiveKey="0" flush>
          {FaqData.map((faq,idx) => {
            return (
              <Accordion.Item className='mb-3' eventKey={faq.id} key={idx}>
                <Accordion.Header >{faq.Question}</Accordion.Header>
                <Accordion.Body className="pt-0">{faq.answer}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </>
  );
};
