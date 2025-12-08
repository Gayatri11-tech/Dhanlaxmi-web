import { Container } from "react-bootstrap";
import BlurText from "./UI/BlurText";
import { SharedButton } from "./UI/SharedButton";

export const Home = ({ref,id}) => {
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
        className={'cta-button btn-style703'}/>
        </div>

       
       
      </Container>
    </>
  );
};
