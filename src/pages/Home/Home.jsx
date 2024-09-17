import girl from "../../assets/home/girl.png";
import logo from "../../assets/home/logo.png";
import person1 from "../../assets/home/person1.png";
import person2 from "../../assets/home/person2.png";
import smile from "../../assets/home/toothsmile.png";
import img1 from "../../assets/home/img1.png";
import img2 from "../../assets/home/img2.png";
import service5 from "../../assets/home/service5.png";
import service1 from "../../assets/home/service1.png";
import service2 from "../../assets/home/service2.png";
import service3 from "../../assets/home/service3.png";
import service4 from "../../assets/home/service4.png";
import service6 from "../../assets/home/service6.png";
import test1 from "../../assets/home/test1.png";
import test2 from "../../assets/home/test2.png";
import test3 from "../../assets/home/test3.png";
import contact from "../../assets/home/contact.png";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import ContactSection from "../../components/ContactSection";
const Home = () => {
  const contentData = [
    {
      title: "Quality Dentistry",
      text: "Focuses on what’s important to you during a dental visit: comfort, ease, & simplicity. Whether you’re visiting for yourself or the kids, you’ll receive the attentive, thorough, and gentle care you deserve.",
    },
    {
      title: "Advanced Equipment & Technology",
      text: "We believe in maintaining true transparency with our patients and through advanced equipment & technology we are able to show every step of the dental work that is being completed for the patient.",
    },
    {
      title: "Patient centered approach",
      text: "At Leo Dental, we provide personalized care and treatment that is focused on elimination of root cause of any problem that patients are experiencing.",
    },
    {
      title: "Offering High Quality Healthcare",
      text: "Leo Dental offers a comprehensive set of oral healthcare services, leverages best-in-class equipment, and utilizes the latest pain management technology to provide affordable healthcare of the highest quality.",
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
  const clinicInfo = [
    "Leo Dental Clinic embodies the ethos of Customer-friendly, Cost-effective, and Complete dental solutions.",
    "With more than 50,000 successful cosmetic and implant cases. Over a decade has defined us as one of the best dental clinics in Bangalore & Nellore.",
    "With treatment provided by highly specialized MDS doctors, in a sterilized environment having completely transparent treatment charges, one can be at ease walking into our clinic at any time.",
    "Leo Dental Clinic has been independently assessed and accredited by the Indian Health Organization and complies with the principles and practice of the clinical governance as defined and laid down by the Indian Health Organization.",
  ];
  const records = [
    { total: "16000+", desc: "Patients Treated" },
    { total: "16000+", desc: "Successful Ortho cases" },
    { total: "1600+", desc: "Implants Placed" },
    { total: "5+", desc: "Clinics" },
  ];
  const testimonials = [
    {
      name: "Sri Hari",
      image: test1, // Your image path here
      description: `I came for a tooth pain in Leo dental.. Dr lahari explained
        about single sitting root canal within hours.. I felt
        relieve from the pain... Dr. Lahari mds gold medalist she is
        a experienced doctor with friendly nature.I prefer Leo
        dental as a best dental care in nellore.`,
    },
    {
      name: "Laxmi Kranth",
      image: test2, // Your image path here
      description: `My father had suffering with old metal caps with pain then I went to Leo dental meet dr Feroz sir thy explain about the cause of pain and also advise root cannal treatment dr Lahari mam did root canal now now my father is feeling complet painless and he is 😊 happy with treatment I thank both the doctor s and I advised Leo dental for good and painless treatment s thank you Leo dental`,
    },
    {
      name: "Teja Geddam",
      image: test3, // Your image path here
      description: `I had braces done at leo dental Dr feroz sir orthodontist he is a good in experience and exlent in giving treatment I am very happy to say treatment was pain less through our my brace's treatment I now I am confident to smile thank you for giving confident smile thank you leo dental`,
    },
  ];
  return (
    <div className="pt-1">
      <section className="lg:h-[752px] w-full bg-white pt-20 ">
        <div className="mx-auto flex flex-col lg:flex-row lg:justify-between md:relative h-full overflow-hidden">
          <div className="mt-10  lg:ml-[107px] flex flex-col items-center lg:items-start">
            <div className="w-[274px] lg:w-[400px] py-2 lg:text-3xl text-[23.27px] text-center mx-2  bg-yellows text-white">
              World Class Dental Care
            </div>
            <div className="w-full lg:w-[400px] px-10  lg:px-0 h-[120px] relative mt-4 lg:mt-6">
              <img src={logo} alt="logo" className="mx-auto lg:mx-0 imgs" />
              <p className="absolute bottom-6 left-0 right-28 lg:left-auto lg:right-auto font-[700] text-[11.64px] lg:text-[14px] tracking-tighter text-center lg:text-left">
                Orthodontics - Implants - Laser Centre
              </p>
            </div>
            <h1 className="text-[36px] lg:text-[62px] text-center lg:text-left mt-4 lg:mt-6">
              Your <span className="font-bold"> Smile</span> Deserves A <br />
              <span className="font-bold text-reds"> Professional Care!</span>
            </h1>
            <form className="mt-[32px] flex flex-col items-center lg:items-start">
              <div className="mb-4 flex items-center rounded-2xl">
                <div className="bg-[#727070] text-white text-xl font-normal py-2 px-4">
                  +91
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-[250px] px-1 py-2 text-xl bg-[#E8E8E8] focus:outline-none"
                />
              </div>
              <button type="submit" className="button mt-5">
                Book an Appointment
              </button>
            </form>
          </div>
          <div className="w-[383px] lg:w-[639px] h-[350px] lg:h-[584px] lg:-bottom-24 lg:right-0 relative mt-10 lg:mt-0">
            <img
              src={girl}
              alt="girl"
              className="mx-auto lg:absolute lg:bottom-0 lg:right-0 imgs"
            />
          </div>
        </div>
      </section>
      {/* SMALL BANNER */}
      <section className="md:h-[380px] w-full bg-reds py-16">
        <div className="max-w-screen-lg mx-auto ">
          <h1 className="heading text-yellows font-bold text-center">
            Best Multi-Specialty Dental Clinic!
          </h1>
          <p className="text text-center text-white md:px-0 px-[20px]">
            Leo Dental is one of the best multi-specialty dental clinic based in
            Bangalore & Nellore. Leo Dental assures its patients a holistic
            personalized dental experience through <br /> its internationally
            trained team of dentists, dental experts, world-class dental
            equipment and technology and patient-centered treatment plans.
          </p>
        </div>
      </section>
      {/* MEET DOCOTORS */}
      <section className="bg- max-w-[1450px] mx-auto mt-10 md:mt-[89px]">
        <div className="text-center max-w-screen-lg mx-auto ">
          <h1 className="heading text-reds">Meet Our Doctors</h1>
          <p className="text  md:px-0 px-5">
            <span className="font-semibold">Leo Dental</span> Doctors has
            internationally trained and experienced specialists for every branch
            that exists within dentistry and adopts only a specialized approach
            to dentistry.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row md:mx-0 mx-5 items-center justify-between mt-[56px]">
          {/* Container for Image and Details */}
          <div className="w-full lg:w-[1025px] h-auto lg:h-[400px] bg-[#FFF6CA] flex flex-col lg:flex-row items-center rounded-lg">
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
                  +91 00000 00000
                </div>
                <div className="flex items-center gap-x-2">
                  <FiPhone className="text-reds text-xl lg:text-2xl" />
                  info@leodental.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-end mt-[56px] md:mx-0 mx-5">
          {/* Container for Image and Details */}
          <div className="w-full lg:w-[1025px] h-auto lg:h-[383px] bg-[#FFF6CA] flex flex-col lg:flex-row items-center justify-between rounded-lg">
            {/* Image Section */}

            {/* Details Section */}
            <div className="px-6 lg:px-16 py-4 lg:py-0 flex flex-col items-start">
              <p className="text-[24px] lg:text-[32px] text-reds h-10">
                Dr. Feroz
              </p>
              <p className="text-[16px] lg:text-[18px] font-[600] pb-[10px] lg:pb-[14px]">
                MDS Orthodontist
              </p>

              {/* Experience Details */}
              {[
                "Orthodontics & Dento Facial Orthopaedics.",
                "Invisalign Expert.",
                "Cosmetic & Aesthetic dentist.",
                "Dental Surgeon.",
                "Implantologist.",
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
                  +91 00000 00000
                </div>
                <div className="flex items-center gap-x-2">
                  <FiPhone className="text-reds text-xl lg:text-2xl" />
                  info@leodental.com
                </div>
              </div>
            </div>
            <div className="h- lg:h-full w-full lg:w-[375px] flex items-center justify-center">
              <img
                src={person2}
                alt="Dr. Feroz"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* WE PROMISED */}
      <section className="mt-10 md:mt-[89px] max-w-[1400px] mx-auto   h-auto">
        <div className="lg:mx-2 mx-5">
          <h1 className="heading md:text-left text-center">
            We <span className="text-reds">Promised</span> to take care… and we{" "}
            <span className="text-reds">Delivered</span>
            <p className="text lg:leading-[38px] text-left">
              A smile is the first thing a person notices in you, so why not
              make it your best! Visiting a good dentist for your oral care is
              the ideal way to ensure your oral hygiene is maintained at its
              best. Being the best dental clinic in Nellore & in Bangalore, we
              are dedicated to providing you with the all dental treatments. You
              can place your complete trust in the quality of our dentists to
              provide the right care for your teeth.
            </p>
            <p className="text lg:leading-[38px] text-left">
              Our care is defined by the values that all staff share and is
              summed up in the term “Excellent Care by Working Together”. When
              you visit one of our locations, you can expect to receive world
              class care, in terms of hospitality and treatment. Expert dental
              specialists with caring clinical staff provides you with an
              exceptional patient experience in creating smiles.
            </p>
          </h1>
        </div>
        <div className="w-full bg-white flex justify-end items-end mt-10">
          <div className="lg:w-[662px] lg:h-[136px] ">
            <img src={smile} alt="smile" className="imgs" />
          </div>
        </div>
      </section>
      {/* GRAY BACKGROUND */}
      <section className="bg-[#E2E2E2] py-10 lg:py-20 mt-10 md:mt-[89px] flex flex-col  gap-y-10 lg:gap-x-20 items-center px-6 lg:px-2">
        <div className="flex lg:justify-between lg:flex-row flex-col md:max-w-[1300px] md:mx-auto  w-full  gap-y-10">
          <div className="md:w-1/2">
            {contentData.slice(0, 2).map((item, index) => (
              <div key={index} className="mb-5">
                <h1 className="text-[24px] lg:text-[32px] text-reds">
                  {item.title}
                </h1>
                <p className="text-[16px] lg:text-[20px] lg:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[455px] h-[250px] lg:h-[304px] rounded-2xl">
            <img
              src={img1}
              alt="smile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="flex  justify-between lg:flex-row flex-col w-full md:max-w-[1300px] md:mx-auto gap-y-10">
          <div className="md:w-1/2">
            {contentData.slice(2).map((item, index) => (
              <div key={index} className="mb-5">
                <h1 className="text-[24px] lg:text-[32px] text-reds">
                  {item.title}
                </h1>
                <p className="text-[16px] lg:text-[20px] lg:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[455px] h-[250px] lg:h-[304px] rounded-2xl">
            <img
              src={img2}
              alt="smile"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/*OUR SERVICE*/}
      <section className="max-w-[1400px] mx-auto mt-10 md:mt-[89px]">
        <div className="text-center">
          <h1 className="heading text-reds">Our Services</h1>
          <p className="text lg:max-w-[48rem] mx-4 lg:mx-auto">
            All of our treatments and services are provided in a comfortable,
            handy capped friendly environment.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-y-8">
          {service.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl mx-3 lg:mx-0  shadow-xl border-2 lg:w-[392px] h-[515px] mt-14"
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
      {/*WHY LEO DENTAL*/}
      <section className="max-w-[1400px] lg:mx-auto mt-10 md:mt-[100px] mx-[25px]">
        <h1 className="heading">
          Why <span className="text-reds">Leo Dental</span> ?
        </h1>
        <ul className="mt-5 ">
          {clinicInfo.map((item, index) => (
            <li key={index} className="flex items-baseline  gap-x-1">
              <span className="flex-shrink-0 ">
                <TbPointFilled className="text-reds lg:text-xl " />
              </span>
              <span className="lg:text-[20px] text-[16px]">{item}</span>
            </li>
          ))}
        </ul>
        <button className="mt-6 button ">Know More</button>
      </section>
      {/*NUMBERS*/}
      <section className="bg-[#FFF6CA] lg:h-[350px] mt-10 md:mt-[50px] lg:py-0 py-12 w-full">
        <div className="max-w-[1400px] mx-auto lg:mt-[59px] ">
          <h1 className="heading text-reds text-center lg:pt-[53px]">
            Maintenance of Life Time Dental Records
          </h1>{" "}
          <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-20 text-center lg:mt-14">
            {records.map((item, index) => (
              <div key={index}>
                <h1 className="lg:text-[45px] text-[35px] mt-10">
                  {item.total}
                </h1>
                <p className="lg:text-[30px] text-[22px] text-reds">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Testimonials*/}
      <section className="mt-10 md:mt-[100px] max-w-[1300px]  mx-auto">
        <div className="text-center">
          <h1 className="heading text-reds">Testimonials</h1>
          <p className="lg:text-[24px] mt-2 mx-auto">
            With more than 1000 unbiased reviews from just dial customers,
            Google reviews and a rating of more than 4 stars , maintained for
            more than 10 yrs continuously, Leo Dental is proud over its
            commitment towards excellence..
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:px-0 px-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mt-10 lg:mt-0">
              <div className=" lg:mt-16 py- px-5 rounded-3 flex items-center flex-col relative h-[550px] ">
                <div className="lg:w-[241px] h-[202px] rounded-xl  z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img "
                  />
                </div>
                <div className="border-2 pt-[80px] h-[400px] py-3 lg:pb-10 absolute top-36 shadow-lg rounded-xl px-5 lg:w-[392px]">
                  <div className="text-center">
                    <h1 className="text-2xl text-reds">{testimonial.name}</h1>
                    <p className="mt-2 lg:text-[18px] leading-[24px]">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*get in touch*/}
      <ContactSection image={contact} />
    </div>
  );
};

export default Home;
