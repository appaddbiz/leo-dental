import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    { path: "/", display: "Home" },
    { path: "/services", display: "Our Services" },
    { path: "/profile", display: "Our Profile" },
    // { path: "/dr-lahari", display: "Dr. Lahari" },
    { path: "/about", display: "Why Us" },
    { path: "/testimonials", display: "Testimonials" },
    { path: "/contact", display: "Contact Us" },
    { path: "/Leo-Align", display: "Leo Align" },
    { path: "/tourism", display: "Dental Tourism" },
  ];
  return (
    <header className="bg-white/90 backdrop-blur-x fixed w-full h-[74px] flex items-center justify-center shadow-xl z-[200]">
      <div className="flex justify-between items-center mx-5 md:mx-20 w-full">
        {/* Logo */}
        <Link to="/" className="lg:w-[239px] w-[184px] lg:h-[54px]">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-x-7">
          <ul className="flex space-x-6 text-black font-sans font-normal text-base">
            {nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? "text-reds" : "text-black"
                  } transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-reds`}
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+919347108123">
            <button className="button">Book an Appointment</button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer text-reds"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-[300] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <FaTimes
              className="text-2xl cursor-pointer text-reds"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-start p-6  space-y-6 text-black font-sans font-normal text-base">
            {nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? "text-reds" : "text-black"
                  } hover:text-reds`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mt-4 button ml-5">Book an Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
