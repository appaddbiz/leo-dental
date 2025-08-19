import banner from "../../assets/about/banner.jpeg";
import text from "../../assets/about/text.png";
import img1 from "../../assets/about/img.png";
import img2 from "../../assets/about/img2.png";
import contact from "../../assets/about/contact.png";
import ContactSection from "../../components/ContactSection";
import Banner from "../../components/banner/Banner";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        {/* Meta Title & Description */}
        <title>
          Trusted Dental Clinic in HSR Layout | Dental Clinic in HSR Layout
        </title>
        <meta
          name="description"
          content="Consult an Invisalign doctor in Harlur. Get clear teeth aligners for a smile. Book your appointment with a specialist near you today!"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D6RGQC5PCK"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-D6RGQC5PCK');
    `}
        </script>

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "leodental",
            url: "https://www.leodental.co.in/about",
            logo: "https://www.leodental.co.in/assets/logo-BuWTAvAG.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 93471 08123",
              contactType: "Customer Service",
              areaServed: "IN",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1st Floor, IFB Showroom Complex, 27th Main, opp. KLM mall, 2nd Sector, Sector 2, HSR layout",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              postalCode: "560102",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "12.9116",
              longitude: "77.6412",
            },
            keywords: [
              "Clear aligners clinic in hsr Layout",
              "Teeth aligners clinic in harlur",
              "Teeth aligners clinic in hsr Layout",
              "Best teeth aligner specialist in Harlur",
              "Best teeth aligner specialist in hsr Layout",
              "Affordable braces treatment in Hsr Layout",
              "Affordable braces treatment in Harlur",
              "Best Invisalign treatment in Harlur",
              "Best Invisalign treatment in HSR Layout",
            ],
            description:
              "Consult an Invisalign doctor in Harlur. Get clear teeth aligners for a smile. Book your appointment with a specialist near you today!",
            dateEstablished: "2023-01-01",
            email: "leodentalbanglore@gmail.com",
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <h2 style={{ display: "none" }}>Specialist for Teeth Aligners Near Me</h2>

      <div className="pt-20">
        <Banner img={banner}>
          Experienced dentists, advanced technology. Your trusted partners in
          <span className="font-semibold"> oral health.</span>
        </Banner>
        <section className="max-w-[1350px] mx-auto mt-10 lg:mt-[80px] px-3 lg:px-0">
          <div className="relative ">
            <div className="lg:w-[521px] lg:h-[134px] w-[138px] h-[100px]">
              <img src={text} alt="" className="" />
            </div>
            <h1 className="lg:text-[52px]  text-[30px] absolute top-3 lg:top-12 text-reds leading-9 lg:leading-[62px]  ">
              Highest Standards Of Dental Treatment
            </h1>
            <h1 className="lg:text-[22px]">
              Best Dentists Near Me in HSR Layout
            </h1>
            <p className="lg:text-[22px] text-[18px]">
              <h2 className="inline">Best Dentists Near Me in HSR Layout</h2>,
              Leo Dental Clinic has been independently assessed and accredited
              by the Indian Health Organization with the principles and practice
              of clinical governance as defined and laid down by the Indian
              Health Organization. We provide specialty-based dental care in
              accordance with the dental needs of the patients by our
              internationally trained team of specialized dentists.
              Multi-disciplinary treatments by M.D.S qualified dentists are also
              combined to ensure a minimum number of visits to the dental chair.
            </p>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-7">
              <div className="lg:w-1/2 lg:order-none order-1">
                <p className="lg:text-[22px] text-[18px]  ">
                  We take the utmost care to ensure sterilization of instruments
                  and equipment to safeguard our patients.
                </p>
                <p className="lg:text-[22px] text-[18px] mt-5">
                  We provide transparent treatment charges with all the charges
                  listed on the website.
                </p>
                <p className="lg:text-[22px] text-[18px] mt-5">
                  We constantly upgrade our services, techniques and equipment
                  on a regular basis to provide you the latest and best dental
                  treatment in every sphere from digital radiographs to laser
                  dentistry…
                </p>
              </div>
              <div className="lg:w-[593px] lg:h-[296px] mt-2 lg:mt-0">
                <img src={img1} alt="" className="" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full lg:h-[353px] bg-reds py-10 lg:px-0 px-3 mt-10 lg:mt-[80px]">
          <div className="max-w-[1300px] mx-auto  text-center text-white">
            <h1 className="lg:text-[32px] text-[18px] font-medium">
              Leo ensures Friendly and attentive services to all patients
              keeping in tune with the family dentistry atmosphere we firmly
              believe in.
            </h1>
            <p className="lg:text-[22px] mt-3 lg:mt-7 font-normal leading-7">
              With more than 500 unbiased reviews from just dial customers,
              Google Reviews and a rating of more than 4 stars , maintained for
              more than 5 yrs continuously, Leo is proud over its commitment
              towards excellence.
            </p>
            <p className="lg:text-[22px] mt-3 leading-7">
              With more than 10000 completed cosmetic and implant cases since
              the first branch was established in 2014, Leo has established
              itself as one of the leading providers of quality dental
              healthcare in Bangalore & Nellore, India.
            </p>
          </div>
        </section>
        <section className="max-w-[1350px] mx-auto lg:px-0 px-3 mt-10 lg:mt-[80px]">
          <h1 className="lg:text-[52px] text-[30px] text-reds leading-9 lg:leading-[62px]  ">
            Highest Standards Of Dental Treatment
          </h1>
          <p className="lg:text-[22px] text-[18px] mt-4 lg:mt-7 font-normal leading-7">
            Leo Dental Clinic has been independently assessed and accredited by
            the Indian Health Organization with the principles and practice of
            the clinical governance as defined and laid down by the Indian
            Health Organization. We provide specialty based dental care in
            accordance to the dental needs of the patients by our
            internationally trained team of specialized dentists. Multi
            disciplinary treatments by M.D.S qualified dentists are also
            combined to ensure minimum number of visits to the dental chair.
          </p>
          <div className="flex justify-between flex-col lg:flex-row items-start mt-8 gap-x-10">
            <div className="lg:w-[593px] lg:h-[380px]">
              <img src={img2} alt="" className="" />
            </div>
            <div className="lg:w-2/3">
              <p className="lg:text-[22px] text-[18px] mt-4 lg:mt-0">
                We ensure that the final diagnosis and treatment planning is
                arrived at by Post graduate M.D.S qualified dentists only; with
                a minimum of more than 5 yrs experience.
              </p>
              <p className="lg:text-[22px] text-[18px] mt-5">
                Leo has carved a niche for itself in Bangalore & Nellore as
                being a clinic with the ultimate combination of “ corporate
                standards of equipment and materials having a core group of
                empathetic M.D.S doctors of every specialty with a cost
                effective pricing”, making the highest quality of healthcare
                affordable to a larger section of people. <br />
                All the doctors are not only successful clinical practitioners
                but are academically inclined with numerous national and
                international publications to their credit.
              </p>
            </div>
          </div>
          <p className="lg:text-[22px] text-[18px] mt-4 lg:mt-10 font-normal leading-7">
            Our Chief Clinical Director Dr. Lahari ASR has been in academics
            over a decade and Dr. Lahari ASR, MDS 15 years experience Public
            health dentist Ex-Alumini Sardal Patel Dental College, Lucknow
            Colgate IDA Award Scholarship Awardee, Expert in Pediatric and
            Preventive Dentistry. <br />
            She is also a certified implantologist (the leading developers of
            dental implants) and has further undergone extensive training in
            Advanced Full mouth rehabilitation with Implants and Sinus lift
            procedures with Osstem implants along with certification in
            placement of implants in Asthetic zone. <br />
            The clinic aims at offering different specialties under one roof.
            With a multi disciplinary approach the patients have simultaneous
            access to aesthetic dentist, implantologist, endodontist,
            orthodontist, pedodontist, periodontist, prosthodontist and oral and
            maxillofacial surgeons.
          </p>
        </section>
        <ContactSection image={contact} />
      </div>
    </>
  );
};

export default About;
