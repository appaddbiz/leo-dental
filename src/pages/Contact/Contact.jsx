import ContactSection from "../../components/ContactSection";
import contact from "../../assets/testimonials/contact2.png";
import banner from "../../assets/testimonials/banner2.png";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        {/* Meta Title & Description */}
        <title>
          Metal Braces Specialist Near Me | Laser Teeth Whitening in Harlur
        </title>
        <meta
          name="description"
          content="Find a metal braces specialist near you and get laser teeth whitening in Harlur. Achieve a bright, aligned smile with expert dental care."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "leodental",
            url: "https://www.leodental.co.in/contact",
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
              "Affordable dental treatments in Harlur",
              "Affordable dental treatments in HSR Layout",
              "Best dental clinic in Harlur",
            ],
            description:
              "Find a metal braces specialist near you and get laser teeth whitening in Harlur. Achieve a bright, aligned smile with expert dental care.",
            dateEstablished: "2023-01-01",
            email: "leodentalbanglore@gmail.com",
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <h2 style={{ display: "none" }}>Laser Teeth Whitening in Harlur</h2>
      <div className="pt-20">
        <div
          className="relative lg:h-[481px] h-[481px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center lg:mx-12 px-4 text-white flex-col">
            <div className="lg:text-[50px] text-[35px] max-w-[650px] mx-auto text-center">
              <p className=" text-white text-[24px] underline font-normal">
                Contact Us
              </p>
              Ready to Smile Brighter?
              <span className="font-semibold"> Contact Us!</span>
            </div>
          </div>
        </div>

        <ContactSection image={contact} />
      </div>
    </>
  );
};

export default Contact;
