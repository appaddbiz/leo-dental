import banner from "../../assets/ourservice/banner2.jpg";
import text from "../../assets/ourservice/text1.png";
import img2 from "../../assets/ourservice/img2.png";
import img3 from "../../assets/ourservice/img3.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import { TbPointFilled } from "react-icons/tb";
import ContactSection from "../../components/ContactSection";
import contact from "../../assets/ourservice/contact1.png";
import ServiceBanner from "../../components/banner/ServiceBanner";
import { Helmet } from "react-helmet";

const Dental = () => {
  const accordionData = [
    {
      value: "1",
      trigger: "What is a Zygoma Implant?",
      content:
        "In patients with very poor bone structure of the upper jaw, a dental implant is surgically drilled into the zygomatic bone for anchorage. This, along with anterior dental implants, can restore one’s bite effectively. Since the dental implants are anchored into the zygomatic bone, it is called a zygoma implant.",
    },
    {
      value: "2",
      trigger: "What is an all-on-4 dental implant?",
      content:
        "In patients with complete missing teeth and compromised jaw bone, four dental implants per jaw are planted in pre-planned positions to balance either 10 or 12 teeth per jaw. This procedure of complete dental rehabilitation with four dental implants on each jaw is called all-on-4 dental implant surgery. If six teeth are placed per jaw, then it is called all-on-6 dental implant surgery. If these 4 or 6 dental implants are screwed with a denture, then it's a hybrid denture.",
    },
    {
      value: "3",
      trigger: "Why are Dental Implants Expensive?",
      content:
        "We, at Leo Dental, do not consider dental implant surgery expensive, especially when we look at the restoring capabilities of a dental implant. A simple dental implant surgery is affordable and a very good option for restoring teeth. The true-to-life capability of a dental implant relies on the skill of the surgeon, the surgery itself, and the crown component of the dental implant. If one has a challenging bone structure, then components like bone grafts and membranes add to the cost.",
    },
  ];

  const advantages = [
    "Most effective in restoring form & function",
    "Conservative – no need to trim or damage adjacent teeth unlike dental bridge",
    "Longevity – lifetime warranty",
    "Aesthetic – results achieved are extremely pleasant",
    "True tooth like prosthesis",
  ];
  const dentalImplantTypes = [
    "Engaging Dental Implant",
    "Ridge Expansion",
    "Non-engaging Dental Implant",
    "Bone Augmentation",
    "Bone coated Dental implant",
  ];
  const points = [
    "Conventional Dental Implant",
    "Immediate Dental Implant",
    "Sinus Lift Dental Implant",
    "Zygomatic Dental Implant",
    "All-on-4 Dental Implant",
    "All-on-6 Dental Implant",
    "Same day tooth Dental Implant",
    "Hybrid Denture",
  ];
  return (
    <>
      <Helmet>
        {/* Meta Title & Description */}
        <title>Best Dental Implants in HSR layout | Leo Dental Clinic</title>
        <meta
          name="description"
          content="Leo Dental Clinic offers the best dental implants in HSR Layout with expert care, advanced technology, and lasting solutions for strong, natural-looking teeth.
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Best Dental Implants in HSR Layout | Leo Dental Clinic",
              url: "https://www.leodental.co.in/service/Dental-Implant",
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
                  "1st Floor, IFB Showroom Complex, 27th Main, opp. KLM mall, 2nd Sector, Sector 2, HSR Layout",
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
              description:
                "Leo Dental Clinic offers the best dental implants in HSR Layout with expert care, advanced technology, and lasting solutions for strong, natural-looking teeth.",
              keywords: [
                "Dental implants in HSR layout",
                "Dental implant clinic",
                "Best dental implant dentist in HSR layout",
                "Tooth implant procedure in HSR layout",
                "Affordable dental implants in HSR layout",
              ],
              dateEstablished: "2023-01-01",
              email: "leodentalbanglore@gmail.com",
            }),
          }}
        />
      </Helmet>
      <div className="pt-20">
        <h2 style={{ display: "none" }}>Best Dental Implants in HSR layout</h2>
        <ServiceBanner img={banner} text="Dental Implant" />
        <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 px-3 lg:px-0">
          <div className="relative ">
            <div className="lg:w-[965px] lg:h-[164px] w-[282px] h-[90px]">
              <img src={text} alt="" className="" />
            </div>
            <h1 className="lg:text-[52px] text-[30px] lg:leading-none leading-9 absolute lg:top-12 top-3 text-reds  ">
              Best Dental Implants At Leo Dental
            </h1>
            <h1 className="lg:text-[22px]">
              Dental Implant clinic in hsr layout
            </h1>
            <p className="lg:text-[22px] lg:leading-8">
              A replica of a tooth and a root used to restore form & function of
              the missing tooth, is a dental implant. If a patient has a single
              or multiple missing tooth or teeth then a surgical grade titanium
              screw is drilled into the bone to provide anchorage to the
              supporting tooth. This dental implant has a sleeve where a
              connector is screwed over which a cap is either cemented or
              screwed. Dental implants in true sense have revolutionised
              Cosmetic Dentistry. If you are looking for expert care and
              precision, choosing a trusted
              <h2 className="inline">
                {" "}
                Dental Implant clinic in HSR Layout
              </h2>{" "}
              can ensure long-lasting results. Dental implant can improve
              aesthetics, restore function and facilitate good health. A dental
              implant is a surgical grade titanium called commercially available
              grade 4 titanium, which is drilled into the bone to provide
              anchorage to the supporting tooth. Dental implant is an extremely
              successful procedure and comes with a lifetime warranty.
            </p>
          </div>
        </section>{" "}
        <section className="max-w-[1400px] px-5 lg:px-0 mx-auto lg:mt-[80px] mt-10 flex lg:flex-row flex-col justify-between items-center gap-10">
          <div className="lg:w-[435px] lg:h-[375px]">
            <img src={img2} alt="" className="" />
          </div>
          <div className="lg:w-2/3 flex flex-col ">
            <h1 className="lg:text-[52px] text-[30px] leading-8  lg:leading-[60px] ">
              Benefits Of <span className="text-reds">Dental Implants</span>{" "}
            </h1>
            <div className="mt-5">
              {advantages.map((item, index) => (
                <ul
                  key={index}
                  className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
                >
                  <li className="text-black mt-4">{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </section>{" "}
        <section className="lg:mt-[80px] mt-10 bg-[#E2E2E2] lg:h-[307px] py-10 lg:px-0 px-4 lg:py-0">
          <div className="max-w-[1350px] mx-auto h-full  gap-5 flex lg:flex-row flex-col justify-between lg:items-center">
            <h1 className="lg:text-[52px] text-[28px] lg:leading-[60px] font-medium">
              Types Of{" "}
              <span className="lg:block inline text-reds">Dental Implants</span>
            </h1>
            <div className="grid lg:grid-rows-3 lg:grid-cols-2 gap-x-28 gap-y-5">
              {dentalImplantTypes.map((item, index) => (
                <div key={index} className="flex items-center gap-x-2">
                  <TbPointFilled className="text-reds text-xl" />
                  <div className=" text-[22px]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>{" "}
        <section className="max-w-[1400px] mx-auto mt-10 lg:mt-[80px] lg:px-0 px-2 gap-10  flex lg:flex-row flex-col justify-between items-center">
          <div className="">
            {" "}
            <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] font-medium ">
              Based On Type Of <span className="text-reds"> Surgery</span>{" "}
            </h1>
            <div className="grid mt-5 lg:mt-10 lg:grid-cols-2 gap-x-28 lg:gap-y-5 gap-y-4">
              {points.map((item, index) => (
                <div key={index} className="flex items-center lg:gap-x-2">
                  {" "}
                  <TbPointFilled className="text-reds text-xl" />
                  <div className=" lg:text-[22px] ">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-[481px] lg:h-[375px]">
            <img src={img3} alt="" className="" />
          </div>
        </section>
        <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 px-2 lg:px-0">
          <h1 className="lg:text-[52px] text-[30px] text-reds lg:leading-[62px]  ">
            Dental Implant FAQ’s
          </h1>
          <div className="lg:mt-10">
            <Accordian>
              {accordionData.map((item) => (
                <AccordianItem
                  key={item.value}
                  value={item.value}
                  trigger={item.trigger}
                >
                  {item.content}
                </AccordianItem>
              ))}
            </Accordian>
          </div>
        </section>
        <ContactSection image={contact} />
      </div>
    </>
  );
};

export default Dental;
