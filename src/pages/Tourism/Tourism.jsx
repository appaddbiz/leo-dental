import banner from "../../assets/about/banner.jpeg";

import bannerimg from "../../assets/services/bannerimg.png";
// import text from "../../assets/services/text.png";
import logo from "../../assets/home/logo.png";
import profile1 from "../../assets/services/profile1.png";
import profile2 from "../../assets/services/profile2.png";
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
const Services = () => {
  const services = [
    {
      title: "Prime Location & Easy Accessibility",
      description:
        "Situated in a well-connected area, Leo Dental provides on-site dental and medical facilities, ensuring immediate assistance in case of medical emergencies and comprehensive health care support.",
    },
    {
      title: "Dr. Lahari – Expertise in Public Health Dentistry",
      description:
        "Under the leadership of Dr. Lahari, a renowned public health dentist with extensive knowledge of global healthcare systems and policies, we uphold the highest standards of patient safety and care.",
    },
    {
      title: "State-of-the-Art In-House Dental Lab",
      description:
        "Our cutting-edge in-clinic dental lab ensures rapid and precise fabrication of dental prosthetics, significantly reducing waiting times for patients.",
    },
    {
      title: "Specialized Smile Correction with LEOALIGN",
      description:
        "We take pride in our exclusive aligner brand, LEOALIGN, offering a lightning-fast aligner processing system that delivers results in just three days, ensuring a quick and effective smile transformation.",
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
        Discover Exceptional Dental Tourism with
        <span className="font-semibold"> Leo Dental.</span>
      </Banner>
      <section className="mt-10 lg:mt-[80px] ">
        <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 lg:px-0">
          <div>
            <h1 className="lg:text-[34px] text-[22px] text-reds lg:leading-[44px] font-semibold leading-7 text-center">
              Explore World-Class Dental Tourism with Leo Dental
            </h1>
            <p className="text-[20px] mt-5 leading-8 lg:text-center text-justify">
              Leo Dental is a premier destination for high-quality, affordable
              dental care, catering to patients seeking top-notch treatments.
              Our clinic offers advanced dental solutions combined with seamless
              medical support, ensuring a comfortable and efficient experience.
            </p>
          </div>
        </div>
      </section>

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
                  <p className="lg:text-[22px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:h-auto h-[450px] lg:w-[30%] lg:mt-20 mt-10">
            <div className="lg:w-[335.13px] w-[286.68px] h-[384.68px] lg:h-[449.69px] absolute top-0 left-16 lg:right-10">
              <img src={profile1} alt="" className="imgs" />
            </div>
            <div className="lg:w-[277.45px] w-[237.34px] h-[250.68px] lg:h-[293.04px] absolute -left-2 top-52 lg:right-48">
              <img src={profile2} alt="" className="imgs" />
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
        <div className="lg:w-[460px] lg:h-[349px] w-[331px] h-[251px]">
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
