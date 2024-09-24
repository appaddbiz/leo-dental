import banner from "../../assets/about/banner.jpeg";

import bannerimg from "../../assets/services/bannerimg.png";
import text from "../../assets/services/text.png";
import logo from "../../assets/home/logo.png";
import profile1 from "../../assets/services/profile1.png";
import profile2 from "../../assets/services/profile2.png";
import service5 from "../../assets/home/service5.png";
import service1 from "../../assets/home/service1.png";
import service2 from "../../assets/home/service2.png";
import service3 from "../../assets/home/service3.png";
import service4 from "../../assets/home/service4.png";
import service6 from "../../assets/home/service6.png";
import contact from "../../assets/services/contact.png";
import { Link } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import Banner from "../../components/banner/Banner";
const Services = () => {
  const services = [
    {
      title: "Expert Dental Surgeons",
      description:
        "We have handpicked clinicians with a wealth of expertise and unparalleled clinical etiquettes to ensure exemplary healthcare.",
    },
    {
      title: "Innovative Technology",
      description:
        "Experience world-class dentistry with our ultra-modern technology and quintessential products.",
    },
    {
      title: "Comprehensive Dental Services",
      description:
        "All of our treatments and services are provided in a comfortable, handy capped friendly environment.",
    },
  ];
  const service = [
    {
      img: service1,
      heading: "Invisalign",
      description:
        "Leo Dental is No.1 Invisalign Provider in Bangalore & Nellore. A team of Orthodontist treat every case. Our best price guarantee is GUARANTEED to make you smile!",
      path: "/service/invisalign",
    },
    {
      img: service2,
      heading: "Dental Implant",
      description:
        "Dental implants are a lifetime solution for people with missing teeth. We have onboard implantologists who have experience in dealing with world class implant systems and surgeries.",
      path: "/service/Dental-Implant",
    },
    {
      img: service3,
      heading: "Laser Dentistry",
      description:
        "Providing best Laser Dentistry treatment in Bangalore & Nellore with advanced equipment and best dentists. Painless & Safe dental treatments. best Laser Dentistry in Nellore, this involves focusing the laser beam on the stained gums and teeth.",
      path: "/service/laser-dentistry",
    },
    {
      img: service4,
      heading: "Root Canal Treatment",
      description:
        "Our endodontists are committed to providing you a pain free root canal treatment and help bust the myth of fear and trauma being associated with this therapy.",
      path: "/service/Root-Canal-Treatment",
    },
    {
      img: service5,
      heading: "Braces",
      description:
        "Our orthodontists are specialized in correcting irregularities via metal, ceramic, self- ligating braces and invisible aligners. We have the most experienced & specialist dentists offering the best dental braces treatment.",
      path: "/service/Braces",
    },
    {
      img: service6,
      heading: "Dental Crowns",
      description:
        "Best Dental Crowns treatment at affordable costs. Dental Crowns Treatment is the best solution If the major part of the tooth is missing. After the placement of a crown, the tooth can function normally.",
      path: "/service/Dental-Crowns",
    },
  ];

  return (
    <div className="pt-20">
      <Banner img={banner}>
        Transforming Smiles With Our Comprehensive{" "}
        <span className="font-semibold">Dental Services.</span>
      </Banner>
      <section className="max-w-[1350px] mx-auto mt-[80px] px-3 lg:px-0">
        <div className="flex lg:flex-row flex-col items-enter justify-between gap-x-64 ">
          <div className="relative lg:w-2/3">
            <div className="lg:w-[521px] h-[91px] w-[270px] lg:h-[164px]">
              <img src={text} alt="" className="" />
            </div>
            <h1 className="lg:text-[52px] text-[30px] top-7  absolute lg:top-14 lg:leading-[62px] leading-10 ">
              Personalized <span className="text-reds"> Dental Care</span>{" "}
              <br /> To Meet All Your Needs.
            </h1>
            <div className="lg:mt-10">
              {services.map((item, index) => (
                <div key={index} className="lg:mt-[31px] mt-6">
                  <h1 className="lg:text-[34px] text-[22px] text-reds">
                    {item.title}
                  </h1>
                  <p className="lg:text-[22px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:h-auto h-[450px] lg:w-[35%] lg:mt-20 mt-10">
            <div className="lg:w-[335.13px] w-[286.68px] h-[384.68px] lg:h-[449.69px] absolute top-0 left-16 lg:right-10">
              <img src={profile1} alt="" className="imgs" />
            </div>
            <div className="lg:w-[277.45px] w-[237.34px] h-[250.68px] lg:h-[293.04px] absolute -left-2 top-52 lg:right-48">
              <img src={profile2} alt="" className="imgs" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1350px] bg-[#FFF6CA] gap-y-10 lg:h-[451px] px-5 lg:py-0 py-10 mx-auto mt-[80px] flex lg:flex-row flex-col justify-between items-center lg:px-20">
        <div>
          <div className="w-[309.19px] h-[89px] relative">
            <img src={logo} alt="logo" className="imgs" />
            <p className="absolute bottom-2 font-[700] text-[12.5px] tracking-tighter">
              Orthodontics - Implants - Laser Centre
            </p>
          </div>
          <p className="text max-w-[700px] lg:text-[36px] ">
            Book an appointment with our experts for a consultation to avail our
            preventive, cosmetic or therapeutic services.
          </p>
          <Link to="/contact">
            <button className="mt-5 button">Contact Us</button>
          </Link>
        </div>
        <div className="lg:w-[460px] lg:h-[349px] w-[331px] h-[251px]">
          <img src={bannerimg} alt="" className="imgs" />
        </div>
      </section>
      <section className="max-w-[1350px] mx-auto   mt-10 md:mt-[89px]">
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
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default Services;
