import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logoimg from "../assets/images/logo-removebg.png";
import { useEffect, useState } from "react";

export const Header = ({activeSection,scrollToRef,contactusRef, ProductsRef,faqRef,HomeRef,aboutusRef}) => {
const [expanded, setExpanded] = useState(false);
  useEffect(()=>{
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  },[])
  
  return (
    <>
      <Navbar expand="lg"  expanded={expanded} className="navbar-header">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logoimg} alt="lalu wafers" width={75} height={75} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"  onClick={() => {scrollToRef(HomeRef);setExpanded(false);}} className={activeSection==='home'?"active":''}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={() => {scrollToRef(aboutusRef);setExpanded(false);}} className={activeSection==='about'?"active":''}>About</Nav.Link>
              <Nav.Link href="#product" onClick={() => {scrollToRef(ProductsRef);setExpanded(false);}} className={activeSection==='product'?"active":''}>Product</Nav.Link>
              <Nav.Link href="#faq" onClick={() => {scrollToRef(faqRef);setExpanded(false);}} className={activeSection==='faq'?"active":''}>FAQ</Nav.Link>
              <Nav.Link href="#contact" onClick={() => {scrollToRef(contactusRef);setExpanded(false);}} className={activeSection==='contact'?"active":''}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
