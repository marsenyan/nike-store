import React from "react";
import { Navbar } from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { Products } from "../Components/Products";
import { AboutUs } from "../Components/AboutUs";
import { Offer } from "../Components/Offer";
import { Testimonials } from "../Components/Testimonials";
import { ContactUs } from "../Components/ContactUs";
import { Footer } from "../Components/Footer";


export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Offer />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

