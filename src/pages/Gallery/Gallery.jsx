import Hero from "./Hero";
import Banner from "./Banner";
import WhySection from "./WhySection";
import Maintance from "./Maintance";
import Smiles from "./Smiles";
import Section from "./Section";
import Contact from "./Contact";

const Gallery = () => {
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
