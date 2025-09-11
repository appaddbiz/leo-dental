import girl from "../../assets/home/girl.png";
import logo2 from "../../assets/home/logo.png";
import person1 from "../../assets/home/person1.png";
import person2 from "../../assets/home/person2.png";
import smile from "../../assets/home/toothsmile.png";
import img1 from "../../assets/home/img1.png";
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
import ContactSection from "../../components/ContactSection";
import { Helmet } from "react-helmet";
const TopDentistsHSR = () => {
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
    { total: "50000+", desc: "Patients Treated" },
    { total: "30000+", desc: "Successful Ortho cases" },
    { total: "1600+", desc: "Implants Placed" },
    { total: "2+", desc: "Clinics" },
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
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>Top dentists in HSR Layout</title>
        <meta
          name="description"
          content="Top dentists in HSR Layout at Leo Dental – expert care by Dr. Lahari ASR, MDS Gold Medalist. Specialized in implants, root canals, cosmetic & pediatric care.
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
              url: "https://www.leodental.co.in/sitemap/top-dentists-in-hsr-layout",
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
              email: "leodentalbanglore@gmail.com",
              dateEstablished: "2023-01-01",
              description:
                "Top dentists in HSR Layout at Leo Dental – expert care by Dr. Lahari ASR, MDS Gold Medalist. Specialized in implants, root canals, cosmetic & pediatric care.",
              alternateName: "Top Dentists in HSR Layout",
              slogan: "Top Dentists in HSR Layout",
              keywords: [
                "Top Dentists in HSR Layout",
                "Best Dentists in HSR Layout",
                "Dentists in HSR Layout",
                "Dental Clinic in HSR Layout",
                "Root canal specialist in HSR Layout",
                "Implantologist in HSR Layout",
                "Cosmetic dentistry in HSR Layout",
                "Pediatric dentist in HSR Layout",
              ],
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
        <section className="bg- max-w-[1350px] mx-auto mt-10 md:mt-[89px]">
          <div className="text-center max-w-screen-lg mx-auto ">
            <h1 className="heading text-reds">Meet Our Doctors</h1>
            <p className="text  md:px-0 px-5">
              <span className="font-semibold">Leo Dental</span> Doctors has
              internationally trained and experienced specialists for every
              branch that exists within dentistry and adopts only a specialized
              approach to dentistry.
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
                    +91 93471 08123
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FiPhone className="text-reds text-xl lg:text-2xl" />
                    leodentalbanglore@gmail.com
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
                    +91 93937 76143
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FiPhone className="text-reds text-xl lg:text-2xl" />
                    leodentalbanglore@gmail.com
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
        <section className="mt-10 md:mt-[89px] max-w-[1350px] mx-auto   h-auto">
          <div className="lg:mx-2 mx-5">
            <h1 className="heading md:text-left text-center">
              We <span className="text-reds">Promised</span> to take care… and
              we <span className="text-reds">Delivered</span>
              <p className="text lg:leading-[38px] text-left">
                A smile is the first thing a person notices in you, so why not
                make it your best! Visiting a best dental clinic in HSR layout
                for your oral care is the ideal way to ensure your oral hygiene
                is maintained at its best. Being the best dental clinic in
                Nellore & in Bangalore, we are dedicated to providing you with
                the all dental treatments. You can place your complete trust in
                the quality of our dentists to provide the right care for your
                teeth.
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
        <section className="bg-[#E2E2E2] py-10 mt-10 md:mt-[89px] px-6 lg:px-2">
          <div className="md:max-w-[1300px] md:mx-auto text-center lg:text-left">
            <h1 className="text-[24px] lg:text-[32px] text-reds font-bold mb-4">
              Top Dentists in HSR Layout – Leo Dental
            </h1>
            <p className="text-[16px] lg:text-[20px] lg:leading-7 text-justify">
              Your smile is more than just a feature—it’s a reflection of your
              confidence and oral health. That’s why when looking for the top
              dentists in HSR Layout, you deserve professionals who combine
              advanced expertise with compassionate care. Leo Dental, under the
              leadership of Dr. Lahari ASR, stands out for delivering
              world-class dental services—right in the heart of HSR Layout.
            </p>
          </div>
        </section>

        <section className="bg-[#E2E2E2] py-10 flex flex-col gap-y-5 lg:gap-x-20 items-center px-6 lg:px-2">
          {/* About Dr. Lahari */}
          <div className="flex lg:justify-between lg:flex-row flex-col md:max-w-[1300px] md:mx-auto w-full lg:gap-y-10">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-[22px] lg:text-[28px] text-reds font-semibold">
                Meet Dr. Lahari ASR – One of the Top Dentists in HSR Layout
              </h2>
              <p className="text-[16px] lg:text-[20px] lg:leading-7 text-justify">
                Dr. Lahari ASR is a renowned dentist whose credentials speak
                volumes. An MDS Gold Medalist, she is also a distinguished
                Public Health Dentist, a Reader at Narayana Dental College, and
                an alumna of Sardar Patel Dental College, Lucknow. Her
                excellence in academic and clinical practice was recognized with
                the Colgate IDA Award Scholarship.
              </p>
              <p className="text-[16px] lg:text-[20px] lg:leading-7 text-justify">
                For over 15 years, Dr. Lahari has specialized in implantology,
                root canal treatments, pediatric and preventive dentistry, and
                cosmetic procedures. Her gentle demeanor and precision make her
                not only highly skilled but truly patient-focused—earning her a
                place among the top dentists in HSR Layout.
              </p>
            </div>

            <div className="w-full lg:w-[45%] h-[250px] lg:h-[60%] rounded-2xl mt-10">
              <img
                src={img1}
                alt="Top Dentists in HSR Layout - Leo Dental"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Services Offered */}
          <div className="md:max-w-[1300px] md:mx-auto w-full mt-10 space-y-6">
            <h2 className="text-[22px] lg:text-[28px] text-reds font-semibold">
              Comprehensive Dental Services at Leo Dental
            </h2>
            <ul className="list-disc pl-5 text-[16px] lg:text-[20px] lg:leading-7 space-y-3">
              <li>
                Dental Implants – Durable, natural-appearing replacements for
                missing or compromised teeth.
              </li>
              <li>
                Root Canal Treatments – Painless, modern procedures designed to
                preserve natural teeth.
              </li>
              <li>
                Pediatric Dentistry – Child-focused care that ensures a positive
                first dental experience.
              </li>
              <li>
                Preventive Dentistry – Cleanings, check-ups, and early detection
                to maintain lifelong oral health.
              </li>
              <li>
                Cosmetic Dentistry – Smile transformations using veneers,
                whitening, zirconia crowns, and more.
              </li>
              <li>
                Laser-Assisted Treatments – Cutting-edge techniques for faster
                healing and improved comfort.
              </li>
            </ul>
          </div>

          {/* What Patients Love */}
          <div className="md:max-w-[1300px] md:mx-auto w-full mt-10 space-y-6">
            <h2 className="text-[22px] lg:text-[28px] text-reds font-semibold">
              What Patients Love About Leo Dental
            </h2>
            <ul className="list-disc pl-5 text-[16px] lg:text-[20px] lg:leading-7 space-y-3">
              <li>
                Personalized and Pain-Free Care – Every treatment begins with a
                clear explanation of options and costs, ensuring transparency
                and comfort.
              </li>
              <li>
                Advanced Technology – The clinic’s modern diagnostic tools and
                treatment methods deliver efficient, precise results.
              </li>
              <li>
                Warm and Welcoming Environment – From kids to seniors, every
                patient feels welcomed and supported—even those with dental
                anxiety.
              </li>
              <li>
                Holistic Focus on Preventive Health – The goal isn’t just to
                treat issues—it’s to help you avoid them altogether through
                education and regular maintenance.
              </li>
              <li>
                Strong Community Reputation – Positive reviews and referrals
                make Leo Dental a trusted name for dental excellence in HSR
                Layout.
              </li>
            </ul>
          </div>

          {/* Why Leo Dental */}
          <div className="md:max-w-[1300px] md:mx-auto w-full mt-10 space-y-6">
            <h2 className="text-[22px] lg:text-[28px] text-reds font-semibold">
              Why Leo Dental Is Synonymous with the Top Dentists in HSR Layout
            </h2>
            <ul className="list-disc pl-5 text-[16px] lg:text-[20px] lg:leading-7 space-y-3">
              <li>
                Proven Expertise – Dr. Lahari’s awards, qualifications, and calm
                clinical approach reflect a commitment to excellence.
              </li>
              <li>
                Longevity and Trust – A decade and a half of successful
                practice—a testament to patient satisfaction and skill.
              </li>
              <li>
                Full-Service Care – With everything from preventive care to
                cosmetic dentistry offered under one roof, Leo Dental simplifies
                your dental journey.
              </li>
              <li>
                Real Results with Comfort – Modern facilities and patient-first
                service make dental visits stress-free and transformative.
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:max-w-[1300px] md:mx-auto w-full mt-10 space-y-6">
            <h2 className="text-[22px] lg:text-[28px] text-reds font-semibold">
              Book Your Appointment with the Top Dentists in HSR Layout
            </h2>
            <p className="text-[16px] lg:text-[20px] lg:leading-7">
              📍 Leo Dental – HSR Layout, Bengaluru
              <br />
              📞 +91 93471 08123
              <br />
              ✉️ leodentalbanglore@gmail.com
            </p>
          </div>
        </section>

        {/*OUR SERVICE*/}
        <section className="max-w-[1350px] mx-auto mt-10 md:mt-[89px]">
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
                  <Link
                    to={item.path}
                    className="text-reds underline text-lg b "
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/*WHY LEO DENTAL*/}
        <section className="max-w-[1350px] lg:mx-auto mt-10 md:mt-[100px] mx-[25px]">
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
          <Link to="/about">
            <button className="mt-6 button ">Know More</button>
          </Link>
        </section>
        {/*NUMBERS*/}
        <section className="bg-[#FFF6CA]  mt-10 md:mt-[50px]  py-12 w-full">
          <div className="max-w-[1400px] mx-auto  ">
            <h1 className="heading text-reds text-center px-2 lg:px-0">
              Maintenance of Life Time Dental Records
            </h1>{" "}
            <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-x-20 text-center lg:mt-1">
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
        <section className="mt-10 md:mt-[100px] max-w-[1350px]  mx-auto">
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
          <div className="text-center text-xl underline text-reds mt-2 font-light">
            <Link to="/testimonials">View more</Link>
          </div>
        </section>
        {/*get in touch*/}
        <ContactSection image={contact} />
      </div>
    </>
  );
};

export default TopDentistsHSR;
