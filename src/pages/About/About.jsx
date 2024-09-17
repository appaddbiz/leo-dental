import banner from "../../assets/about/banner.png";
import text from "../../assets/about/text.png";
import img1 from "../../assets/about/img.png";
import img2 from "../../assets/about/img2.png";
import contact from "../../assets/about/contact.png";
import ContactSection from "../../components/ContactSection";

const About = () => {
  return (
    <div className="pt-20">
      <section className="relative w-full h-[481px]">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="absolute inset-44 text-center max-w-[900px] mx-auto text-white text-[50px]">
          Experienced dentists, advanced technology. Your trusted partners in
          <span className="font-semibold"> oral health.</span>
        </h1>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <div className="relative ">
          <div className="w-[521px] h-[134px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="text-[52px]  absolute top-12 text-reds leading-[62px]  ">
            Highest Standards Of Dental Treatment
          </h1>
          <p className="text-[22px]">
            Leo Dental Clinic has been independently assessed and accredited by
            the Indian Health Organization with the principles and practice of
            the clinical governance as defined and laid down by the Indian
            Health Organization. <br />
            We provide specialty based dental care in accordance to the dental
            needs of the patients by our internationally trained team of
            specialized dentists. Multi disciplinary treatments by M.D.S
            qualified dentists are also combined to ensure minimum number of
            visits to the dental chair.
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="w-1/2">
              <p className="text-[22px] ">
                We take the utmost care to ensure sterilization of instruments
                and equipment to safeguard our patients.
              </p>
              <p className="text-[22px] mt-5">
                We provide transparent treatment charges with all the charges
                listed on the website.
              </p>
              <p className="text-[22px] mt-5">
                We constantly upgrade our services, techniques and equipment on
                a regular basis to provide you the latest and best dental
                treatment in every sphere from digital radiographs to laser
                dentistry…
              </p>
            </div>
            <div className="w-[593px] h-[296px]">
              <img src={img1} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[353px] bg-reds py-10 mt-[80px]">
        <div className="max-w-[1300px] mx-auto  text-center text-white">
          <h1 className="text-[32px] font-normal">
            Leo ensures Friendly and attentive services to all patients keeping
            in tune with the family dentistry atmosphere we firmly believe in.
          </h1>
          <p className="text-[22px] mt-7 font-normal leading-7">
            With more than 500 unbiased reviews from just dial customers, Google
            Reviews and a rating of more than 4 stars , maintained for more than
            5 yrs continuously, Leo is proud over its commitment towards
            excellence.
          </p>
          <p className="text-[22px] mt-3 leading-7">
            With more than 10000 completed cosmetic and implant cases since the
            first branch was established in 2014, Leo has established itself as
            one of the leading providers of quality dental healthcare in
            Bangalore & Nellore, India.
          </p>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-[52px] text-reds leading-[62px]  ">
          Highest Standards Of Dental Treatment
        </h1>
        <p className="text-[22px] mt-7 font-normal leading-7">
          Leo Dental Clinic has been independently assessed and accredited by
          the Indian Health Organization with the principles and practice of the
          clinical governance as defined and laid down by the Indian Health
          Organization. We provide specialty based dental care in accordance to
          the dental needs of the patients by our internationally trained team
          of specialized dentists. Multi disciplinary treatments by M.D.S
          qualified dentists are also combined to ensure minimum number of
          visits to the dental chair.
        </p>
        <div className="flex justify-between items-start mt-8 gap-x-10">
          <div className="w-[593px] h-[380px]">
            <img src={img2} alt="" className="imgs" />
          </div>
          <div className="w-2/3">
            <p className="text-[22px] ">
              We ensure that the final diagnosis and treatment planning is
              arrived at by Post graduate M.D.S qualified dentists only; with a
              minimum of more than 5 yrs experience.
            </p>
            <p className="text-[22px] mt-5">
              Leo has carved a niche for itself in Bangalore & Nellore as being
              a clinic with the ultimate combination of “ corporate standards of
              equipment and materials having a core group of empathetic M.D.S
              doctors of every specialty with a cost effective pricing”, making
              the highest quality of healthcare affordable to a larger section
              of people. <br />
              All the doctors are not only successful clinical practitioners but
              are academically inclined with numerous national and international
              publications to their credit.
            </p>
          </div>
        </div>
        <p className="text-[22px] mt-10 font-normal leading-7">
          Our Chief Clinical Director Dr. Lahari ASR has been in academics over
          a decade and Dr. Lahari ASR, MDS 15 years experience Public health
          dentist Ex-Alumini Sardal Patel Dental College, Lucknow Colgate IDA
          Award Scholarship Awardee, Expert in Pediatric and Preventive
          Dentistry. <br />
          She is also a certified implantologist (the leading developers of
          dental implants) and has further undergone extensive training in
          Advanced Full mouth rehabilitation with Implants and Sinus lift
          procedures with Osstem implants along with certification in placement
          of implants in Asthetic zone. <br />
          The clinic aims at offering different specialties under one roof. With
          a multi disciplinary approach the patients have simultaneous access to
          aesthetic dentist, implantologist, endodontist, orthodontist,
          pedodontist, periodontist, prosthodontist and oral and maxillofacial
          surgeons.
        </p>
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default About;
