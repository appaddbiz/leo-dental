import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { RiTwitterXFill } from "react-icons/ri";
import ContactButtons from "../ContactButtons";
const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
    },
    { name: "YouTube", icon: <TfiYoutube />, url: "https://www.youtube.com/" },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
    {
      name: "Twitter",
      icon: <RiTwitterXFill />,
      url: "https://www.twitter.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/",
    },
  ];
  const nav = [
    { path: "/home", display: "Home" },
    { path: "/services", display: "Our Services" },
    { path: "/profile", display: "Our Profile" },
    { path: "/about", display: "Why Us" },
    { path: "/testimonials", display: "Testimonials" },
    { path: "/gallery", display: "Gallery" },
    { path: "/contact", display: "Contact Us" },
    { path: "/Leo-Align", display: "Leo Align" },
    { path: "/sitemap/best-dental-clinic-in-hsr-layout", display: "Sitemap" },
  ];
  const treatments = [
    { path: "/service/invisalign", display: "Invisalign" },
    { path: "/service/Root-Canal-Treatment", display: "Root Canal Treatment" },
    { path: "/service/Dental-Implant", display: "Dental Implant" },
    { path: "/service/Dental-Crowns", display: "Dental Crowns" },
    { path: "/service/laser-dentistry", display: "Laser Dentistry" },
  ];
  // const treatments = [
  //   "Invisalign",
  //   "Root Canal Treatment",
  //   "Dental Implant",
  //   "Dental Crowns",
  //   "Laser Dentistry",
  // ];
  return (
    <div className="bg-yellows ">
      <div className="max-w-[1400px] lg:mx-auto pt-[50px] mx-3">
        <div className="grid lg:grid-cols-5 lg:grid-rows-1  gap-x-10">
          <div className="col-span-3 ">
            <div className="w-[339px] h-[94px]">
              <img src={logo} alt="logo" />
            </div>
            <div className="lg:mt-[43px]">
              <h1 className="text-reds text-[24px] ">Subscribe Now</h1>
              <p className="lg:text-[20px] text-[14px]">
                Don’t miss our future updates! Get Subscribed Today!
              </p>
              <input
                type="email"
                className=" mt-3 lg:w-[400px] w-[320px] px-4 py-2 rounded-full bg-yellow-300 border-none outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex space-x-4 lg:mt-16 mt-8">
              {socialMediaLinks.map((social) => (
                <Link
                  key={social.name}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl duration-150 transform hover:text-red-600 hover:scale-110"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-start-4 lg:mt-0 mt-10 ">
            {" "}
            <h1 className="text-reds text-[20px]">Useful Links </h1>
            <ul className="flex flex-col  lg:mt-5 mt-2 space-y-2 text-black font-sans font-normal text-base">
              {nav.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`transform hover:scale-110  lg:text-[20px] transition-transform duration-150 ease-in-out hover:text-reds`}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 lg:col-start-5 col-span-3   lg:mt-0 mt-10">
            {" "}
            <h1 className="text-reds text-[20px]">Treatments</h1>
            <ul className="flex flex-col lg:mt-5 mt-2 space-y-2 text-black font-sans font-normal text-base">
              {treatments.map((item, index) => (
                <li key={index} className="lg:text-[20px]">
                  <Link
                    to={item.path}
                    className={`transform hover:scale-110  lg:text-[20px] transition-transform duration-150 ease-in-out hover:text-reds`}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[18px] text-center mt-10 pb-2">
          ©2024. Leo Dental All Rights Reserved.
        </p>
      </div>
      <div className="lg:hidden">
        <ContactButtons />
      </div>
    </div>
  );
};

export default Footer;
