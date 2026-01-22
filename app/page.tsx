

import Hero from "./components/Hero";
import ServicesIntro from "./components/ServicesIntro";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import AboutCards from "./components/AboutCards";
import ServicesCarousel from "./components/ServicesCarousel";
import MainProducts from "./components/MainProducts";
import OurProcess from "./components/OurProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import FaqSection from "./components/FaqSection";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutCards />
      <ServicesCarousel />
      <MainProducts/>
      <OurProcess/>
      <WhyChooseUs/>
       <Testimonials/> 
      <FaqSection/>
      
{/*      
      <FinalCTA/> */}
    </>
  );
}

