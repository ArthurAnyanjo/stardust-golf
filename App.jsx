import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle = 'Our Courses' title = 'How We Help' />
        <Programs />
        <About />
        <Title subTitle = 'Testimonals' title = "What our student's say" />
        <Testimonials />
        <Title subTitle = 'Contact Us' title = "Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
