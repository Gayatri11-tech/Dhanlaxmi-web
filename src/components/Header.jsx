import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logoimg from "../assets/images/logo-removebg.png";
import { useEffect } from "react";

export const Header = ({activeSection,scrollToRef,contactusRef, ProductsRef,faqRef,HomeRef,aboutusRef}) => {

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
      <Navbar expand="lg" className="navbar-header">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logoimg} alt="lalu wafers" width={75} height={75} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => scrollToRef(HomeRef)} className={activeSection==='home'?"active":''}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={() => scrollToRef(aboutusRef)} className={activeSection==='about'?"active":''}>About</Nav.Link>
              <Nav.Link href="#product" onClick={() => scrollToRef(ProductsRef)} className={activeSection==='product'?"active":''}>Product</Nav.Link>
              <Nav.Link href="#faq" onClick={() => scrollToRef(faqRef)} className={activeSection==='faq'?"active":''}>FAQ</Nav.Link>
              <Nav.Link href="#contact" onClick={() => scrollToRef(contactusRef)} className={activeSection==='contact'?"active":''}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
