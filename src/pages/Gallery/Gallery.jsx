import Hero from "./Hero";
import Banner from "./Banner";
import WhySection from "./WhySection";
import Maintance from "./Maintance";
import Smiles from "./Smiles";
import Section from "./Section";
import Contact from "./Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Gallery = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/Leo-Align" &&
      !sessionStorage.getItem("reloaded")
    ) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, [location]);

  return (
    <div className="pt-16">
      <Banner />
      <Hero />
      <WhySection />
      <Maintance />
      <Smiles />
      <Section />
      <Contact />
    </div>
  );
};

export default Gallery;
