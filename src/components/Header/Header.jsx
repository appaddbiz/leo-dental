import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClinicsOpen, setIsClinicsOpen] = useState(false); // <-- Add this

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
    { path: "/our-clinics", display: "Our Clinics" },
  ];

  const clinicsDropdown = {
    Andhra: [
      {
        path: "https://clinic.leodental.co.in/best-dental-clinic-in-nellore/",
        display: "Nellore",
      },
      {
        path: "https://clinic.leodental.co.in/best-dental-clinic-in-tirupathi/",
        display: "Tirupathi",
      },
    ],
    Karnataka: [
      {
        path: "/best-dental-clinic-in-hsr-layout",
        display: "Bangalore - HSR LAYOUT",
      },
      {
        path: "/best-dental-clinic-in-whitefield",
        display: "Bangalore - WHITEFIELD",
      },
    ],
  };

  return (
    <header className="bg-white/90 backdrop-blur-x fixed w-full h-[74px] flex items-center justify-center shadow-xl z-[200]">
      <div className="flex justify-between items-center mx-5 md:mx-20 w-full">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="lg:w-48" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-x-7">
          <ul className="flex space-x-6 text-black font-sans font-normal text-base">
            {nav.map((item) =>
              item.path === "/our-clinics" ? (
                <li key={item.path} className="relative group">
                  <span
                    className={`cursor-pointer ${
                      location.pathname.startsWith(item.path)
                        ? "text-reds"
                        : "text-black"
                    } transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-reds`}
                  >
                    {item.display}
                  </span>
                  <div className="absolute -right-12  w-[500px] bg-white shadow-lg rounded hidden group-hover:flex z-50 border border-gray-200">
                    <div className="flex w-full">
                      {/* Hyderabad Column */}
                      <div className="w-1/2 p-4 border-r border-gray-200">
                        <h3 className="font-bold text-lg mb-2">
                          Andhra Pradesh
                        </h3>
                        <ul>
                          {clinicsDropdown.Andhra.map((clinic) => (
                            <li key={clinic.path} className="py-1">
                              <Link
                                to={clinic.path}
                                className="block px-2 py-1 hover:bg-red-100 text-black hover:text-reds rounded"
                              >
                                {clinic.display}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Bangalore Column */}
                      <div className="w-1/2 p-4">
                        <h3 className="font-bold text-lg mb-2">Karnataka</h3>
                        <ul>
                          {clinicsDropdown.Karnataka.map((clinic) => (
                            <li key={clinic.path} className="py-1">
                              <Link
                                to={clinic.path}
                                className="block px-2 py-1 hover:bg-red-100 text-black hover:text-reds rounded"
                              >
                                {clinic.display}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? "text-reds"
                        : "text-black"
                    } transform hover:scale-110 transition-transform duration-300 ease-in-out hover:text-reds`}
                  >
                    {item.display}
                  </Link>
                </li>
              )
            )}
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
              onClick={() => {
                setIsOpen(false);
                setIsClinicsOpen(false);
              }}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col items-start p-6 space-y-6 text-black font-sans font-normal text-base overflow-y-auto h-[70%]">
            {nav.map((item) =>
              item.path === "/our-clinics" ? (
                <li key={item.path} className="w-full">
                  <button
                    className="flex items-center w-full focus:outline-none"
                    onClick={() => setIsClinicsOpen((prev) => !prev)}
                  >
                    Our Clinics
                    <span className="ml-2">{isClinicsOpen ? "▲" : "▼"}</span>
                  </button>
                  {isClinicsOpen && (
                    <div className="ml-2 mt-2 ">
                      <div>
                        <h3 className="font-bold text-base mb-1">
                          Andhra Pradesh
                        </h3>
                        <ul>
                          {clinicsDropdown.Andhra.map((clinic) => (
                            <li key={clinic.path}>
                              <Link
                                to={clinic.path}
                                className="hover:text-reds block py-1"
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsClinicsOpen(false);
                                }}
                              >
                                {clinic.display}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="">
                        <h3 className="font-bold text-base mb-1">Karnataka</h3>
                        <ul>
                          {clinicsDropdown.Karnataka.map((clinic) => (
                            <li key={clinic.path}>
                              <Link
                                to={clinic.path}
                                className="hover:text-reds block py-1"
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsClinicsOpen(false);
                                }}
                              >
                                {clinic.display}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? "text-reds"
                        : "text-black"
                    } hover:text-reds`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.display}
                  </Link>
                </li>
              )
            )}
          </ul>
          <button className="mt-4 button ml-5">Book an Appointment</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
