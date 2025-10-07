import banner from "../../assets/ourservice/banner1.jpg";
import text from "../../assets/ourservice/text2.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import img1 from "../../assets/ourservice/img1.png";
import contact from "../../assets/ourservice/contact2.png";
import ContactSection from "../../components/ContactSection";
import ServiceBanner from "../../components/banner/ServiceBanner";
import { Helmet } from "react-helmet";

const Invisalign = () => {
  const accordionData = [
    {
      value: "1",
      trigger: "How can I correct my forwardly placed teeth?",
      content:
        "Teeth which are anteriorly placed are called Proclined teeth, which can be either due to skeletal defect ( jaws are forwardly placed ) or due to dental defect ( habits like thumb sucking, mouth breathing ). This can be corrected with orthodontics. At LEO DENTAL, our Orthodontist in Bangalore and Orthodontist in Nellore clinics will suggest either braces or clear aligners for proclination.",
    },
    {
      value: "2",
      trigger: "Is Invisalign better than braces?",
      content:
        "Depending on what a patient desires and demands either braces or Invisalign can be better than the other. Both have their own advantages and disadvantages but Invisalign is the latest advancement in orthodontics. Our Orthodontist In Bangalore and Orthodontist in Nellore clinic prefer Invisalign especially for minor dental corrections.",
    },
  ];
  const advantages = [
    "Smile friendly, no brackets or wires",
    "Oral hygiene friendly",
    "Lesser visits to an orthodontist",
    "Patients with known allergy to nickel can opt Invisalign",
    "Virtual planning gives a fair idea of correction much before the procedure",
  ];
  return (
    <>
      <Helmet>
        {/* Meta Title & Description */}
        <title>
          Invisalign Treatment in HSR layout | Dental Clinic In HSR Layout
        </title>
        <meta
          name="description"
          content="Get the best Invisalign Treatment in HSR Layout with clear aligners Visit our dental clinic for advanced, painless, effective teeth straightening solutions
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
              name: "Invisalign Treatment in HSR Layout | Dental Clinic In HSR Layout",
              url: "https://www.leodental.co.in/service/invisalign",
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
                "Get the best Invisalign Treatment in HSR Layout with clear aligners. Visit our dental clinic for advanced, painless, effective teeth straightening solutions.",
              keywords: [
                "Invisalign Treatment in HSR layout",
                "Invisalign treatment in HSR layout",
                "Clear aligners in HSR layout",
                "Invisible braces in HSR layout",
                "Invisalign cost in HSR layout",
                "Invisalign dentist near me",
              ],
              dateEstablished: "2023-01-01",
              email: "leodentalbanglore@gmail.com",
            }),
          }}
        />
      </Helmet>
      <div className="pt-20">
        <h2 style={{ display: "none" }}>Invisalign Treatment in HSR layout</h2>
        <ServiceBanner img={banner} text="Invisalign" />
        <section className="max-w-[1400px] mx-auto mt-[80px] lg:px-0 px-5">
          <div className="relative ">
            <div className="lg:w-[567px] h-[52px] w-[168px] lg:h-[164px]">
              <img src={text} alt="" className="" />
            </div>
            <h1 className="lg:text-[52px]  text-[30px] font-medium absolute top-0 lg:top-12 text-reds leading-[62px]  ">
              Invisalign Treatment
            </h1>
            <h1 className="lg:text-[22px]">
              Invisalign Treatment in hsr layout
            </h1>
            <p className="lg:text-[22px] lg:leading-8 mt-5 lg:mt-0">
              Irregular, crooked, anteriorly placed, and retroclined teeth all
              need correction. The options are either braces or the advanced
              Invisalign (clear aligners). Both braces and Invisalign facilitate
              alignment by effectively moving teeth in the intended direction,
              correcting abnormalities. Braces are either metallic, ceramic, or
              advanced ceramic with metal slots (Damon Clear), which are
              cemented onto the tooth surfaces and then ligated with Titanium,
              Stainless Steel, or Copper NiTi wires and Elastics to facilitate
              correction of maligned teeth. This process of correction needs
              repeated visits to an orthodontist. People who are conscious of
              their smile, especially with braces, can opt for either Lingual
              Braces or Clear Aligners (Invisalign).{" "}
              <h2 className="inline">Invisalign Treatment in HSR Layout</h2> is
              a popular choice for those seeking a discreet and comfortable
              orthodontic solution.
            </p>
          </div>
        </section>{" "}
        <section className="max-w-[1400px] lg:px-0 px-5 mx-auto mt-[80px] flex lg:flex-row flex-col justify-between items-center gap-7 lg:gap-16">
          <div className="lg:w-[435px]  lg:h-[375px]">
            <img src={img1} alt="" className="" />
          </div>
          <div className="lg:w-2/3 flex flex-col ">
            <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] ">
              Advantages Of <span className="text-reds">Invisalign</span>{" "}
            </h1>
            <div className="lg:mt-4">
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
        </section>
        <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 px-2 lg:px-0">
          <h1 className="lg:text-[52px] text-[30px] text-reds lg:leading-[62px]  ">
            Invisalign FAQ’s
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

export default Invisalign;
