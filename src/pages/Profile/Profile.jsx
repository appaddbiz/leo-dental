import banner from "../../assets/profile/banner.png";
import text from "../../assets/profile/text.png";
import img1 from "../../assets/profile/img1.png";
import img2 from "../../assets/profile/img2.png";
import img3 from "../../assets/profile/img3.png";
import img4 from "../../assets/profile/img4.png";
import image1 from "../../assets/profile/image.png";
import image2 from "../../assets/profile/image2.png";
import image3 from "../../assets/profile/image3.png";
import container from "../../assets/profile/container.png";
import line from "../../assets/profile/line.png";
import service5 from "../../assets/home/service5.png";
import service1 from "../../assets/home/service1.png";
import service2 from "../../assets/home/service2.png";
import service3 from "../../assets/home/service3.png";
import service4 from "../../assets/home/service4.png";
import service6 from "../../assets/home/service6.png";
import contact from "../../assets/profile/contact.png";
import { Link } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
const Profile = () => {
  const service = [
    {
      img: service1,
      heading: "Invisalign",
      description:
        "Leo Dental is No.1 Invisalign Provider in Bangalore & Nellore. A team of Orthodontist treat every case. Our best price guarantee is GUARANTEED to make you smile!",
      path: "service/invisalign",
    },
    {
      img: service2,
      heading: "Dental Implant",
      description:
        "Dental implants are a lifetime solution for people with missing teeth. We have onboard implantologists who have experience in dealing with world class implant systems and surgeries.",
      path: "service/Dental-Implant",
    },
    {
      img: service3,
      heading: "Laser Dentistry",
      description:
        "Providing best Laser Dentistry treatment in Bangalore & Nellore with advanced equipment and best dentists. Painless & Safe dental treatments. best Laser Dentistry in Nellore, this involves focusing the laser beam on the stained gums and teeth.",
      path: "service/laser-dentistry",
    },
    {
      img: service4,
      heading: "Root Canal Treatment",
      description:
        "Our endodontists are committed to providing you a pain free root canal treatment and help bust the myth of fear and trauma being associated with this therapy.",
      path: "service/Root-Canal-Treatment",
    },
    {
      img: service5,
      heading: "Braces",
      description:
        "Our orthodontists are specialized in correcting irregularities via metal, ceramic, self- ligating braces and invisible aligners. We have the most experienced & specialist dentists offering the best dental braces treatment.",
      path: "service/Braces",
    },
    {
      img: service6,
      heading: "Invisalign",
      description:
        "Best Dental Crowns treatment at affordable costs. Dental Crowns Treatment is the best solution If the major part of the tooth is missing. After the placement of a crown, the tooth can function normally.",
      path: "service/Dental-Crowns",
    },
  ];
  return (
    <div className="pt-20">
      {/* <section className="relative w-full h-[481px]">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="absolute inset-44 text-center max-w-[900px] mx-auto text-white text-[50px]">
          Excellence In <span className="font-semibold"> Dental Care</span> For
          Every Member Of Your Family!
        </h1>
      </section> */}
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <div className="flex lg:flex-row flex-col items-enter justify-between gap-x-16 ">
          <div className="relative w-3/5">
            <div className="w-[521px] h-[134px]">
              <img src={text} alt="" className="" />
            </div>
            <h1 className="text-[52px]  absolute top-12 text-reds leading-[62px]  ">
              Leo Dental
            </h1>
            <p className="text-[22px]">
              Leo Dental was first established on 12 May 2014 in Nellore, Andra
              Pradesh expanding to multiple branches in Bangalore since 2020.
              Reaching to decade down the journey, the evolving need and the
              urge to provide personalized, highest level of care to each
              individual resulted in the merging of all the branches to one main
              center at the heart of Bangalore, ensuring the constant presence
              of the highly experienced and skilled dentists.
            </p>
            <p className="text-[22px] mt-5">
              Having a combined experience of more than 15 years of different
              specialties at all times along with the latest in technology and
              equipment’s – all under one roof .
            </p>
          </div>
          <div className=" mt-14">
            <div className="grid grid-cols-1 grid-rows-2 gap-x-11 gap-y-7">
              <div className="w-[198px] h-[206px]">
                <img src={img1} alt="" className="" />
              </div>
              <div className="col-span-2 col-start-1 row-start-2 w-[304px] h-[206px]">
                <img src={img3} alt="" className="" />
              </div>
              <div className="col-span-2 col-start-2 row-start-1 w-[304px] h-[206px]">
                <img src={img2} alt="" className="" />
              </div>
              <div className="col-start-3   row-start-2 w-[198px] h-[206px] bg-red-700">
                {" "}
                <img src={img4} alt="" className="imgs" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px] bg-[#E2E2E2] py-14">
        <div className="flex justify-center gap-x-20 items-center">
          <div className="w-[453px] h-[310px]">
            <img src={container} alt="" className="" />
          </div>
          <div className="w-1/2">
            <p className="small">
              With our growing experience and successful treatments we have been
              serving our patients by solving their dental problems. Leo dental
              clinic was founded by Dr. Lahari ASR, MDS 15 years experience
              Public health dentist Ex-Alumini Sardal Patel Dental College,
              Lucknow Colgate IDA Award Scholarship Awardee, Expert in Pediatric
              and Preventive Dentistry. She is also a practicing implantologist
              having completed his Implant course and she is also certified in
              Complicated Sinus lift Implant procedures and Advanced Full mouth
              rehabilitation.
            </p>
          </div>
        </div>
        <p className="small  px-20 ">
          Dr. Lahari ASR is also accompanied by her Husband Dr. Feroz, MDS
          Orthodontist Oral and Dentofacial Orthopedics Invisalign ceramic
          braces, Damon braces, Lingual & permanent retainers. Invisalign expert
          Cosmetic and Esthetic Dental Surgeon Implantologist. He is also a
          practicing aesthetic dentist and a certified ‘Invisalign Aligner’
          Specialist.
        </p>
      </section>
      <section className="w-full h-[272px] bg-reds py-10 mt-[80px]  ">
        <div className="max-w-[1400px] mx-auto relative  ">
          <p className="text-[32px] text-center text-white">
            Leo was started with the{" "}
            <span className="text-yellows ">
              unique concept of treatment planning
            </span>{" "}
            where top priority is given to sterilization and patient
            information, consultation and explanation of treatment and the
            follow up after treatment. Right from the days of their
            establishment these clinics have strived and succeeded in providing
            quality dental care.
          </p>
          <img src={line} alt="" className="absolute  right-[400px]" />
        </div>
      </section>
      <section className="max-w-[1450px] mx-auto mt-[80px]">
        <div className="flex items-start justify-between gap-x-28 ">
          <div className="bg-red-500 w-1/3 relative place-content-center">
            <div className="w-[415.07px] h-[556.96px] absolute top-0 left-10">
              <img src={image1} alt="" className="imgs" />
            </div>
            <div className="w-[343.64px] h-[362.94px] absolute  top-72 left-48">
              <img src={image2} alt="" className="imgs" />
            </div>
          </div>

          <div className="w-3/5">
            <h1 className="text-[52px] leading-[60px]">
              Recognized for Clinical <br />{" "}
              <span className="text-reds">Excellence</span>{" "}
            </h1>
            <p className="text-[22px] mt-10 leading-8">
              Leo Dental Clinic has been independently assessed and accredited
              by the Indian Health Organization with the principles and practice
              of the clinical governance as defined and laid down by the Indian
              Health Organization.
            </p>
            <p className="text-[22px] mt-7 leading-8">
              We provide speciality based dental care in accordance to the
              dental needs of the patients by our internationally trained team
              of specialized dentists. Multi disciplinary treatments by M.D.S
              qualified dentists are also combined to ensure minimum number of
              visits to the dental chair.
            </p>
            <p className="text-[22px] mt-7 leading-8">
              We take the utmost care to ensure sterilization of instruments and
              equipment to safeguard our patients.
            </p>
            <p className="text-[22px] mt-7 leading-8">
              We provide transparent treatment charges with all the charges
              listed on the website.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px] bg-[#FFF6CA] py-5 px-16">
        <p className="text text-center ">
          We constantly upgrade our services, techniques and equipment on a
          regular basis to provide you the latest and{" "}
          <b>best dental treatment</b> in every sphere from digital radiographs
          to laser dentistry…
        </p>
      </section>
      <section className="bg-[#E2E2E2] mt-[80px] py-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-x-10">
          <div className="w-1/2">
            <h1 className="text-[34px] text-reds leading-[44px] ">
              Leo ensures Friendly and attentive services to all patients
              keeping in tune with the family dentistry atmosphere we firmly
              believe in.
            </h1>
            <p className="text-[20px] mt-5 leading-8">
              With more than 500 unbiased reviews from just dial customers,
              Google Reviews and a rating of more than 4 stars , maintained for
              more than 5 yrs continuously, Leois proud over its commitment
              towards excellence.
            </p>
            <p className="text-[20px] mt-5 leading-8">
              With more than 10000 completed cosmetic and implant cases since
              the first branch was established in 2014, Leo has established
              itself as one of the leading providers of quality dental
              healthcare in Bangalore & Nellore, India.
            </p>
          </div>
          <div className="h-[426px]">
            <img src={image3} alt="" className="imgs" />
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[90px]">
        <div className="text-center">
          <h1 className="heading text-reds">Our Services</h1>
          <p className="text max-w-[48rem] mx-auto">
            All of our treatments and services are provided in a comfortable,
            handy capped friendly environment.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-8">
          {service.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-xl w-[392px] h-[515px] mt-14"
            >
              <img src={item.img} alt="" />
              <div className="mt-5 px-10">
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

export default Profile;
