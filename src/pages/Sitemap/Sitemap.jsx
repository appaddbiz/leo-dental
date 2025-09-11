import girl from "../../assets/home/girl.png";
import logo2 from "../../assets/home/logo.png";
import contact from "../../assets/home/contact.png";
import { Link } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import { Helmet } from "react-helmet";
const DentalClinicHSR = () => {
  const service = [
    {
      img: "/sitemap/Best Dental Clinic in HSR Layout.jpg",
      heading: "Best Dental Clinic in HSR Layout",
      description:
        "Leo Dental is No.1 Invisalign Provider in Bangalore & Nellore. A team of Orthodontist treat every case. Our best price guarantee is GUARANTEED to make you smile!",
      path: "/sitemap/dental-clinic-in-hsr-layout",
    },
    {
      img: "/sitemap/Dental Clinic in HSR Layout.jpg",
      heading: "Dental Clinic in HSR Layout",
      description:
        "Dental implants are a lifetime solution for people with missing teeth. We have onboard implantologists who have experience in dealing with world class implant systems and surgeries.",
      path: "/sitemap/dental-clinic-in-hsr-layout",
    },
    {
      img: "/sitemap/best-dentists-in-hsr-layout.jpg",
      heading: "Best Dentists in HSR Layout",
      description:
        "Providing best Laser Dentistry treatment in Bangalore & Nellore with advanced equipment and best dentists. Painless & Safe dental treatments. best Laser Dentistry in Nellore, this involves focusing the laser beam on the stained gums and teeth.",
      path: "/sitemap/best-dentists-in-hsr-layout",
    },
    {
      img: "/sitemap/dentists-in-hsr-layout.jpg",
      heading: "Dentists in HSR Layout",
      description:
        "Our endodontists are committed to providing you a pain free root canal treatment and help bust the myth of fear and trauma being associated with this therapy.",
      path: "/sitemap/dentists-in-hsr-layout",
    },
    {
      img: "/sitemap/top-dentists-in-hsr-layout.jpg",
      heading: "Top Dentists in HSR Layout",
      description:
        "Our orthodontists are specialized in correcting irregularities via metal, ceramic, self- ligating braces and invisible aligners. We have the most experienced & specialist dentists offering the best dental braces treatment.",
      path: "/sitemap/top-dentists-in-hsr-layout",
    },
  ];
  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Dental Clinic in HSR Layout</title>
        <meta
          name="description"
          content="Dental Clinic in HSR Layout. Expert care by Dr. Lahari ASR, MDS Gold Medalist, offering implants, root canals & smile care.
"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Leo Dental",
              url: "https://www.leodental.co.in/dental-clinic-in-hsr-layout",
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
                "Dental Clinic in HSR Layout",
                "Best Dental Clinic in HSR Layout",
                "Full mouth zirconia crowns in HSR Layout",
                "Root canal specialist in HSR Layout",
                "Best zirconia crowns in HSR Layout",
                "Best laser dentist in HSR Layout",
              ],
              dateEstablished: "2023-01-01",
              email: "leodentalbanglore@gmail.com",
              description:
                "Leo Dental – Dental Clinic in HSR Layout. Expert care by Dr. Lahari ASR, MDS Gold Medalist, offering implants, root canals & smile care.",
              alternateName: "Dental Clinic in HSR Layout",
              slogan: "Dental Clinic in HSR Layout",
            }),
          }}
        />
      </Helmet>
      {/* Page Content */}
      <h2 style={{ display: "none" }}>Clear Aligners Clinic in Harlur</h2>

      <div className="pt-1">
        <section className="lg:h-[752px] w-full bg-white pt-20 ">
          <div className="mx-auto flex flex-col lg:flex-row lg:justify-between md:relative h-full overflow-hidden">
            <div className="mt-10  lg:ml-[107px] flex flex-col items-center lg:items-start">
              <div className="w-[274px] lg:w-[400px] py-2 lg:text-3xl text-[23.27px] text-center mx-2  bg-yellows text-white">
                World Class Dental Care
              </div>
              <div className="w-full lg:w-[400px] px-10  lg:px-0 h-[120px] relative mt-4 lg:mt-6">
                <img src={logo2} alt="logo" className="mx-auto lg:mx-0 imgs" />
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
              Best dental clinic in hsr layout Dental clinic in hsr layout
            </h1>
            <p className="text text-center text-white md:px-0 px-[20px]">
              Leo Dental is one of the best multi-specialty dental clinic in HSR
              layout based in Bangalore & Nellore. Leo Dental assures its
              patients a holistic personalized dental experience through <br />{" "}
              its internationally trained team of dentists, dental experts,
              world-class dental equipment and technology and patient-centered
              treatment plans.
            </p>
          </div>
        </section>
        {/* MEET DOCOTORS */}
        <section className="max-w-[1350px] mx-auto mt-10 md:mt-[89px]">
          {/* <div className="text-center">
            <h1 className="heading text-reds">Our Services</h1>
            <p className="text lg:max-w-[48rem] mx-4 lg:mx-auto">
              All of our treatments and services are provided in a comfortable,
              handy capped friendly environment.
            </p>
          </div> */}
          <div className="grid lg:grid-cols-3 place-items-center  gap-y-8">
            {service.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl mx-3 lg:mx-0  shadow-xl border-2 lg:w-[392px] h-[100%] lg:mt-14 mt-3"
              >
                <div className="">
                  <img src={item.img} style={{ aspectRatio: "3/2" }} alt="" />
                </div>
                <div className=" lg:px-10 mx-5 lg:mx-0">
                  <h2 className="text-[28px] text-reds mt-10">
                    {item.heading}
                  </h2>
                  {/* <p className="mt-1 text-[17px] leading-6 pb-2">
                    {item.description}
                  </p> */}
                  <Link
                    to={item.path}
                    className="text-reds underline text-lg pt-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*get in touch*/}
        <ContactSection image={contact} />
      </div>
    </>
  );
};

export default DentalClinicHSR;
