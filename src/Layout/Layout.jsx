import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import ScrollToTop from "./../utils/ScrollToTop";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Testimonials from "../pages/Testimonials/Testimonials";
import Profile from "../pages/Profile/Profile";
import Tourism from "../pages/Tourism/Tourism";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs";
import Invisalign from "../pages/OurServices/Invisalign";
import Dental from "../pages/OurServices/Dental";
import Laser from "../pages/OurServices/Laser";
import RootCanal from "../pages/OurServices/RootCanal";
import Braces from "../pages/OurServices/Braces";
import Crowns from "../pages/OurServices/Crowns";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Leo-Align" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/service/invisalign" element={<Invisalign />} />
          <Route path="/service/Dental-Implant" element={<Dental />} />
          <Route path="/service/laser-dentistry" element={<Laser />} />
          <Route path="/service/Root-Canal-Treatment" element={<RootCanal />} />
          <Route path="/service/Braces" element={<Braces />} />
          <Route path="/service/Dental-Crowns" element={<Crowns />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
