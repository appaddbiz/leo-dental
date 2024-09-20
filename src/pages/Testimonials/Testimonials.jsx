import banner from "../../assets/testimonials/banner.png";
import text from "../../assets/testimonials/text.png";
import test1 from "../../assets/home/test1.png";
import test2 from "../../assets/home/test2.png";
import test3 from "../../assets/home/test3.png";
import test4 from "../../assets/testimonials/test4.png";
import test5 from "../../assets/testimonials/test5.png";
import test6 from "../../assets/testimonials/test6.png";
import ContactSection from "../../components/ContactSection";
import contact from "../../assets/testimonials/contact.png";
const Testimonials = () => {
  const records = [
    { total: "16000+", desc: "Patients Treated" },
    { total: "16000+", desc: "Successful Ortho cases" },
    { total: "1600+", desc: "Implants Placed" },
    { total: "5+", desc: "Clinics" },
  ];
  const reviews = [
    {
      name: "Sri Hari",
      image: test1, // Your image path here
      description:
        "I came for a tooth pain in Leo dental.. Dr lahari explained about single sitting root canal within hours.. I felt relieve from the pain... Dr. Lahari mds gold medalist she is a experienced doctor with friendly nature.I prefer Leo dental as a best dental care in nellore.",
    },
    {
      name: "Laxmi Kranth",
      image: test2,
      description:
        "My father had suffering with old metal caps with pain then I went to Leo dental meet dr Feroz sir thy explain about the cause of pain and also advise root cannal treatment dr Lahari mam did root canal now now my father is feeling complet painless and he is 😊 happy with treatment I thank both the doctor s and I advised Leo dental for good and painless treatment s thank you Leo dental",
    },
    {
      name: "Teja Geddam",
      image: test3,
      description:
        "I had braces done at leo dental Dr feroz sir orthodontist he is a good in experience and exlent in giving treatment I am very happy to say treatment was pain less through our my brace's treatment I now I am confident to smile thank you for giving confident smile thank you leo dental",
    },
    {
      name: "YV V Asanth",
      image: test4,
      description:
        "Suffering tooth pain feels like hell then I went to Leo dental my brother in-law suggest to Leo I meet dr feroz sir he suggested root canal with in half hour 90 per of pain relievedI felt very happy with treatment feroz sir become our family dentist thank you sir.",
    },
    {
      name: "K Sreenivas",
      image: test5,
      description:
        "I came for a tooth pain in Leo dental.. Dr lahari explained about single sitting root canal within hours.. I felt relieve from the pain... Dr. Lahari mds gold medalist she is a experienced doctor with friendly nature.I prefer Leo dental as a best dental care in nellore.",
    },
    {
      name: "Radhika Mehta",
      image: test6,
      description:
        "Due to an accident, I lost my front tooth. A friend suggested Leo dental. I visited and met Dr. Lahari. She explained the process for replacing my teeth and suggested the best treatment. I'm satisfied. Dr. Lahari is a gold medalist, an excellent and experienced doctor. Her skills and communication are great. After treatment, I'm smiling with confidence again. Thank you, Leo dental.",
    },
  ];
  return (
    <div className="pt-20">
      {" "}
      <div
        className="relative lg:h-[481px] h-[481px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center lg:mx-12 px-4 text-white flex-col">
          <div className="lg:text-[50px] text-[35px] max-w-[879px] mx-auto text-center">
            <p className=" text-white text-[24px] underline font-normal">
              Testimonials
            </p>
            Transforming Smiles, Building Trust:
            <span className="font-semibold"> Patient Stories</span>
          </div>
        </div>
      </div>
      <section className="max-w-[1400px] mx-auto mt-10 lg:mt-[80px]">
        <div className="relative items-center justify-center flex">
          <div className="lg:w-[766px] lg:h-[164px] w-[226px] h-[100px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="lg:text-[52px] text-[30px] text-center absolute top-3 lg:top-12 text-reds lg:leading-[62px]  leading-9">
            Maintenance of Life Time Dental Records
          </h1>
        </div>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-x-20 text-center ">
          {records.map((item, index) => (
            <div key={index} className="mt-3">
              <h1 className="text-[45px]">{item.total}</h1>
              <p className="text-[30px] text-reds">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-10 lg:mt-[80px] px-3 lg:px-0">
        {" "}
        <h1 className="lg:text-[52px] text-[30px] text-reds">
          Patient Testimonials
        </h1>{" "}
        <p className="lg:text-[22px] text-[18px] mt-5  leading-7">
          With more than 1000 unbiased reviews from just dial customers, Google
          reviews and a rating of more than 4 stars , maintained for more than
          10 yrs continuously, Leo Dental is proud over its commitment towards
          excellence..
        </p>
      </section>
      <section className="max-w-[1400px] mx-auto mt-10 lg:mt-[80px] px-3  h-full lg:px-0 ">
        <div className="grid lg:grid-cols-3  ">
          {reviews.map((item, index) => (
            <div key={index} className="relative h-[570px]  lg:h-[600px] ">
              <div className="px-5 rounded-3 flex items-center  flex-col  ">
                <div className="w-[241px] h-[202px] rounded-xl absolute  z-10">
                  <img src={item.image} alt={item.name} className="imgs" />
                </div>
                <div className="border-2 pt-[80px] bg-[#E2E2E2]  h-[400px] py-3 pb-10 absolute top-32  shadow-lg rounded-xl px-5 lg:w-[392px]">
                  <div className="text-left">
                    <h1 className="text-2xl text-reds">{item.name}</h1>
                    <p className="mt-2 lg:text-[18px] leading-5 lg:leading-[24px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default Testimonials;
