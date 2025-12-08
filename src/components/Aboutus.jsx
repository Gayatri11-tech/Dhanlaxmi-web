import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import img1 from "../assets/images/chips-pyramid.png";
import { SharedButton } from "./UI/SharedButton";
export const Aboutus = ({ref,id}) => {
    return (
        <>
            <Container className="py-5" ref={ref} id={id}>
                <h2 className="fw-bold text-center">Welcome to <span className="golden-text">Dhanlaxmi Trading</span></h2>
                <p className="cursive-text text-center">where good business meets good quality!</p>
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
                    <Col md={12} xs={12}>
                    </Col>
                    
                </Row>

                <Stack  direction="vertical" className="justify-content-center mt-3">

                <h5 className="text-center px-5 mt-5">
                    At Dhanlaxmi Trading, we don’t just sell — we connect, support, and
                    grow together.
                </h5>
                <h5 className="text-center px-5">
                    Because for us, every deal is the start of a long lasting relationship.
                </h5>
                 <SharedButton
                         BtnVariant={'golden'}
                        Btnlabel={'Start Your Deal'} 
                        className={'btn-style703 mx-auto mt-4'}/>
                        </Stack>
            </Container>

        </>
    );
};
