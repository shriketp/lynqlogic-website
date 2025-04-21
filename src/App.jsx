import './App.css';
import Navbar from "./assets/components/Navbar";
import MainSection from "./assets/components/MainSection";
import AboutSection from "./assets/components/AboutSection";
import ServicesSection from "./assets/components/ServicesSection";
import TeamSection from "./assets/components/TeamSection";
import ContactSection from "./assets/components/ContactSection";
import Footer from "./assets/components/Footer";

import background from "./assets/images/bg-3.jpg";
import about from "./assets/images/about-2.jpg";



function App() {
  return (
    <>
      <Navbar />
      <MainSection
        background={background}
        heading="Strong Business Strategy To Grow Your Business"
        subheading="Empowering Your Business With Future-Ready Tech"
        buttonText1="Get Started"
        buttonText2="Contact Us"
      />
      <AboutSection
        image={about}
        heading="We help small Business owners and Professionals to get Things done."
        subheading="Our mission is to deliver practical, scalable solutions tailored to your business growth."
        description="Our mission is to deliver practical, scalable solutions tailored to your business growth."
        buttonText="Read More"
      />
      
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
