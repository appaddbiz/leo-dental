import banner from "../../assets/about/banner.jpeg";
import person1 from "../../assets/home/person1.png";

import bannerimg from "../../assets/profile/Plan Your Dental Journey Today.jpg";
// import text from "../../assets/services/text.png";
import logo from "../../assets/home/logo.png";
import profile1 from "../../assets/profile/dental-setup.jpg";
import profile2 from "../../assets/profile/clinic.jpg";
// import service5 from "../../assets/home/service5.png";
// import service1 from "../../assets/home/service1.png";
// import service2 from "../../assets/home/service2.png";
// import service3 from "../../assets/home/service3.png";
// import service4 from "../../assets/home/service4.png";
// import service6 from "../../assets/home/service6.png";
import contact from "../../assets/services/contact.png";
import { Link } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import Banner from "../../components/banner/Banner";
import { TbPointFilled } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
const Services = () => {
  const services = [
    {
      title: "Prime Location & Easy Accessibility",
      description: "Situated in a well-connected area, Leo Dental provides ",
      descriptionHighlight: "on-site dental and medical facilities",
      descriptionEnd:
        ", ensuring immediate assistance in case of medical emergencies and comprehensive health care support.",
    },
    {
      title: "Dr. Lahari MDS PHD – Expertise in Public Health Dentistry",
      description:
        "Under the leadership of Dr. Lahari MDS PHD, a renowned public health dentist with extensive knowledge of global healthcare systems and policies, we uphold the highest standards of patient safety and care. Full mouth rehabilitation [FMR] with advanced dental implants in less than two weeks of time within assured results",
    },
    {
      title: "State-of-the-Art In-House Dental Lab",
      description:
        "Our cutting-edge in-clinic dental lab ensures rapid and precise fabrication of dental prosthetics, significantly reducing",
      descriptionHighlight: " waiting times ",
      descriptionEnd: "for patients.",
    },
    {
      title: "Specialized Smile Correction with LEOALIGN",
      description:
        "We take pride in our exclusive aligner brand, LEOALIGN, offering a lightning-fast aligner processing system that delivers results in just",
      descriptionHighlight: " three days",
      descriptionEnd: " , ensuring a quick and effective smile transformation.",
    },
  ];

  const subServices = [
    {
      title: "Exclusive Pediatric and Preventive Services",
      description:
        "Specialized pediatric dentistry and preventive dental care tailored to nurture healthy smiles from a young age.",
    },
    {
      title:
        "Availability of Blood Lab, Diagnostic Centre, and Vaccination Centre in the Same Building",
      description:
        "Convenient access to blood lab, diagnostic, and vaccination services under one roof for comprehensive care.",
    },
    {
      title: "Empathetic and Friendly Approach of the Doctors and Team",
      description:
        "Our compassionate doctors and staff create a welcoming, stress-free environment for every patient.",
    },
    {
      title:
        "Tie-Ups with Multiple Dental Hospitals Globally for After Care and Follow-Up",
      description:
        "Global partnerships with leading dental hospitals to ensure seamless follow-up and aftercare services worldwide.",
    },
  ];

  const dentalTourism = [
    "Initial Virtual Consultation – Discuss your concerns and receive expert guidance before traveling.",
    "Customized Treatment Plan – Get a detailed itinerary and cost estimation for your dental care.",
    "Hassle-Free Travel Assistance – We assist with accommodation, airport transfers, and local guidance.",
    "Advanced Dental Treatments – Experience world-class dental care in a fully-equipped clinic.",
    "Post-Treatment Follow-Ups – Enjoy continued virtual support for a smooth recovery.",
  ];

  return (
    <div className="pt-20">
      <Banner img={banner}>
        <div className="flex justify-between items-center flex-col lg:flex-row w-[100%] gap-10 ">
          <div className="lg:w-[75%]">
            Discover Exceptional <br />
            <span className="text-red-600"> Dental Tourism </span> <br />
            <span className="font-semibold"> @Leo Dental.</span>
          </div>
          <div className="border-2 border-[#ed1e24] mt-5 rounded-md lg:w-[25%]">
            <p className="text-[20px] text-center">
              Avail immediate video consultation from our expert 👨‍⚕
            </p>
          </div>
        </div>
      </Banner>
      <section className="mt-10 lg:mt-[80px] ">
        <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 lg:px-0">
          <div>
            <h1 className="lg:text-[34px] text-[22px] text-reds lg:leading-[44px] font-semibold leading-7 text-center">
              Explore World-Class Dental Tourism with Leo Dental
            </h1>
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-10 mt-5">
              <p className="text-[20px] mt-5 leading-8 lg:text-justify text-justify">
                Leo Dental is a premier destination for high-quality, affordable
                dental care, catering to patients seeking top-notch treatments.
                Our clinic offers advanced dental solutions combined with
                seamless medical support, ensuring a comfortable and efficient
                experience.
              </p>
            </div>
            <p className="text-[20px] mt-5 leading-8 lg:text-center text-justify">
              <span
                className="text-[#ed1e24]"
                style={{ textTransform: "uppercase" }}
              >
                Translators
              </span>{" "}
              available to assist patients in multiple languages, ensuring clear
              communication, along with dedicated{" "}
              <span
                className="text-[#ed1e24]"
                style={{ textTransform: "uppercase" }}
              >
                online support
              </span>{" "}
              for appointments, queries, and follow-ups.
            </p>
          </div>
        </div>
      </section>
      <div className="container max-w-7xl mx-auto mt-10">
        {/* Container for Image and Details */}
        <div className="w-full lg:w-[1025px]  bg-[#FFF6CA] flex flex-col lg:flex-row items-center rounded-lg">
          {/* Image Section */}
          <div className=" lg:h-full lg:w-[385px] flex items-center justify-center">
            <img
              src={person1}
              alt="Dr. Lahari ASR"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details Section */}
          <div className="px-6 lg:px-16 py-4 lg:py-0 flex flex-col items-start">
            <p className="text-[24px] lg:text-[32px] text-reds h-10">
              Dr. Lahari ASR
            </p>
            <p className="text-[16px] lg:text-[18px] font-[600] pb-[10px] lg:pb-[14px]">
              MDS Gold medalist
            </p>

            {/* Experience Details */}
            {[
              "Public health dentist with 15 years of experience.",
              "Ex-Alumni Sardar Patel Dental College, Lucknow",
              "Reader, Narayana Dental College.",
              "Colgate IDA Award Scholarship Awardee.",
              "Implantologist & Root Canal Specialist.",
              "Expert in Pediatric & Preventive Dental Practice.",
              "Leo Dental Proprietor.",
            ].map((item, index) => (
              <ul
                key={index}
                className="flex justify-start items-start text-[16px] lg:text-[18px]"
              >
                <li className="flex items-center justify-center gap-1 font-sans">
                  <TbPointFilled className="text-reds" />
                  {item}
                </li>
              </ul>
            ))}

            {/* Contact Info */}
            <div className="mt-4 flex flex-col gap-2 text-[16px] lg:text-[18px]">
              <div className="flex items-center gap-x-2">
                <IoMailOutline className="text-reds text-xl lg:text-2xl" />
                +91 93471 08123
              </div>
              <div className="flex items-center gap-x-2">
                <FiPhone className="text-reds text-xl lg:text-2xl" />
                leodentalbanglore@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-[1350px] mx-auto mt-[80px] px-3 lg:px-0">
        <div className="flex lg:flex-row flex-col items-enter justify-between gap-x-36 ">
          <div className="relative lg:w-[70%]">
            <h1 className="lg:text-[34px] text-[22px] text-reds lg:leading-[44px] font-semibold leading-7 text-center">
              Why Choose Leo Dental for Dental Tourism?
            </h1>
            <div className="lg:mt-10">
              {services.map((item, index) => (
                <div key={index} className="lg:mt-[31px] mt-6">
                  <h1 className="lg:text-[20px] font-semibold text-[22px] text-reds">
                    {item.title}
                  </h1>
                  <p className="lg:text-[22px]">
                    {item.description}
                    <span className="text-[#ed1e24] uppercase">
                      {item.descriptionHighlight}
                    </span>
                    {item.descriptionEnd}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:h-auto h-[450px] lg:w-[30%] lg:mt-20 mt-10">
            <div className="lg:w-[335.13px] w-[286.68px] h-[384.68px] lg:h-[449.69px] absolute top-0 left-16 lg:right-10">
              <img src={profile1} alt="" className="imgs" />
            </div>
            <div className="lg:w-[277.45px] w-[237.34px] h-[250.68px] lg:h-[293.04px] absolute lg:-left-25 lg:top-72 bottom-0  lg:right-48">
              <img src={profile2} alt="" className="imgs" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1350px] mx-auto mt-[80px] px-3 lg:px-0">
        <div className="flex lg:flex-row flex-col items-enter justify-between gap-x-36 ">
          <div className="relative lg:w-[70%]">
            <div className="lg:mt-10">
              {subServices.map((item, index) => (
                <div key={index} className="lg:mt-[31px] mt-6">
                  <h1 className="lg:text-[20px] font-semibold text-[22px] text-reds">
                    {item.title}
                  </h1>
                  <p className="lg:text-[22px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:h-auto h-[450px] lg:w-[30%] lg:mt-20 mt-10">
            <div className="lg:w-[335.13px] w-[286.68px] h-[384.68px] lg:h-[449.69px] absolute top-0 left-16 lg:right-10">
              <img src="/tourism/blood-checkup.avif" alt="" className="imgs" />
            </div>
            <div className="lg:w-[277.45px] w-[237.34px] h-[250.68px] lg:h-[293.04px] absolute lg:-left-25 lg:top-72 bottom-0  lg:right-48">
              <img
                src="/tourism/Pediatric-and-Preventive.avif"
                alt=""
                className="imgs"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1350px] lg:mx-auto mt-10 md:mt-[100px] mx-[25px]">
        <h1 className="heading">
          Seamless <span className="text-reds">Dental Tourism </span> Experience
        </h1>
        <ul className="mt-5 ">
          {dentalTourism.map((item, index) => (
            <li key={index} className="flex items-baseline  gap-x-1">
              <span className="flex-shrink-0 ">
                <TbPointFilled className="text-reds lg:text-xl " />
              </span>
              <span className="lg:text-[20px] text-[16px]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-[1350px] bg-[#FFF6CA] gap-y-10 lg:h-[451px] px-5 lg:py-0 py-10 mx-auto mt-[80px] flex lg:flex-row flex-col justify-between items-center lg:px-20">
        <div>
          <div className="w-[309.19px] h-[89px] relative">
            <img src={logo} alt="logo" className="imgs" />
            <p className="absolute bottom-2 font-[700] text-[12.5px] tracking-tighter">
              Orthodontics - Implants - Laser Centre
            </p>
          </div>
          <span className="text max-w-[700px] lg:text-[25px] ">
            Plan Your Dental Journey Today!
          </span>
          <p className="text max-w-[700px] lg:text-[36px] ">
            Choose Leo Dental for exceptional dental care at a fraction of the
            cost. Contact us today to schedule your consultation and start your
            journey toward a perfect
          </p>
          <Link to="/contact">
            <button className="mt-5 button">Contact Us</button>
          </Link>
        </div>
        <div className="lg:w-[460px]  w-[331px] ">
          <img src={bannerimg} alt="" className="imgs" />
        </div>
      </section>

      {/* <section className="max-w-[1350px] mx-auto   mt-10 md:mt-[89px]">
        <div className="text-center">
          <h1 className="heading text-reds">Our Services</h1>
          <p className="text lg:max-w-[48rem] mx-4 lg:mx-auto">
            All of our treatments and services are provided in a comfortable,
            handy capped friendly environment.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 place-items-center  gap-y-8">
          {service.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl mx-3 lg:mx-0  shadow-xl border-2 lg:w-[392px] h-[515px] lg:mt-14 mt-3"
            >
              <div className="md:w-[392px] md:h-[233px]">
                <img src={item.img} alt="" />
              </div>
              <div className="mt-5 lg:px-10 mx-5 lg:mx-0">
                <h2 className="text-[28px] text-reds">{item.heading}</h2>
                <p className="mt-1 text-[17px] leading-6 pb-2">
                  {item.description}
                </p>
                <Link to={item.path} className="text-reds underline text-lg b ">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <ContactSection image={contact} />
    </div>
  );
};

export default Services;
