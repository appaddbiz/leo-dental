import Hero from "./Hero";
import Banner from "./Banner";
import WhySection from "./WhySection";
import Maintance from "./Maintance";
import Smiles from "./Smiles";
import Section from "./Section";
import Contact from "./Contact";
import { Helmet } from "react-helmet";

const Gallery = () => {
  return (
    <>
      <Helmet>
        {/* Meta Title & Description */}
        <title>
          Clear Aligners Clinic in HAR Layout | Invisible Teeth Aligners
        </title>
        <meta
          name="description"
          content="Get invisible teeth aligners at a clear aligners clinic in HAR Layout. Straighten your teeth discreetly. Schedule your visit today!"
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

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "leodental",
            url: "https://www.leodental.co.in/Leo-Align",
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
              "Laser dentistry in Harlur",
              "Basal implants in marathahalli",
              "Basal implants in Electronic city",
              "Basal implants In HSR layout",
              "Braces specialist In HSR layout",
              "Dental Self-ligating braces treatmentin Electronic city",
              "Preventive Dentistry in Harlur",
              "Laser dentistry in marathahalli",
              "Laser dentistry in Electronic city",
              "orthodontics restorative dentistry In HSR layout",
            ],
            description:
              "Get invisible teeth aligners at a clear aligners clinic in HAR Layout. Straighten your teeth discreetly. Schedule your visit today!",
            dateEstablished: "2023-01-01",
            email: "leodentalbanglore@gmail.com",
          })}
        </script>
      </Helmet>

      {/* H2 Heading */}
      <h2 style={{ display: "none" }}>Invisible Teeth Aligners</h2>

      <div className="pt-16">
        <Banner />
        <Hero />
        <WhySection />
        <Maintance />
        <Smiles />
        <Section />
        <Contact />
      </div>
    </>
  );
};

export default Gallery;
