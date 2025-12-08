import { useEffect, useRef, useState } from "react";
import { Aboutus } from "./components/Aboutus";
import { Contactus } from "./components/Contactus";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Testimonial } from "./components/Testimonial";

function App() {
  const contactusRef = useRef(null);
  const faqRef = useRef(null);
  const HomeRef = useRef(null);
  const ProductsRef = useRef(null);
  const aboutusRef = useRef(null);

   const [activeSection, setActiveSection] = useState("home");

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // midpoint of screen

      const sections = [
        { id: "home", ref: HomeRef },
        { id: "about", ref: aboutusRef },
        { id: "contact", ref: contactusRef },
        { id: "product", ref: ProductsRef },
        { id: "faq", ref: faqRef },
      ];

      for (let sec of sections) {
        const el = sec.ref.current;
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sec.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Header scrollToRef={scrollToRef} activeSection={activeSection} contactusRef={contactusRef} ProductsRef={ProductsRef} faqRef={faqRef} HomeRef={HomeRef} aboutusRef={aboutusRef}/>
      <Home id={'home'} ref={HomeRef} />
      <Aboutus id={'about'} ref={aboutusRef}/>
      <Products id={'product '} ref={ProductsRef}/>
      <Testimonial />
      <Faq id={'faq'} ref={faqRef}/>
      <Contactus id={'contact'} ref={contactusRef}/>
      <Footer/>
    </>
  );
}

export default App;
