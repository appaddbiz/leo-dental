import text from "../../assets/ourservice/text3.png";
import banner from "../../assets/ourservice/banner4.jpg";
import img7 from "../../assets/ourservice/img7.png";
import group from "../../assets/ourservice/group.png";
import img8 from "../../assets/ourservice/img8.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import contact from "../../assets/ourservice/contact4.png";
import ContactSection from "../../components/ContactSection";
import ServiceBanner from "../../components/banner/ServiceBanner";

const RootCanal = () => {
  const rootCanalDetails = [
    "Advised only if required.",
    "Experienced Root Canal Specialists.",
    "Advanced technologies like Microscope, Apex Locator, Radiovisiograph, 3D scans.",
    "Strict hygiene and sterilisation protocols.",
    "Use of disposable files and cleaning agents.",
    "Use of effective irrigants and disinfectants.",
    "Promising results with warranty.",
  ];
  const rootCanalTypes = [
    "Single visit root canal.",
    "Painless root canal.",
    "Microscopic root canal.",
    "Re root canal.",
  ];
  const accordionData = [
    {
      value: "1",
      trigger: "Is root canal treatment permanent?",
      content:
        "Yes, a root canal treatment with a 3-dimensional seal till the apex of the root can never fail; hence, it is considered permanent.",
    },
    {
      value: "2",
      trigger: "Why should we crown a root canal treated tooth?",
      content:
        "After a root canal treatment, the affected tooth can be compromised either due to decay or due to access preparation. This, along with the non-vitality of the tooth, makes it brittle and prone to fracture. Hence, crowning a root canal treated tooth is advised, especially for posterior teeth.",
    },
    {
      value: "3",
      trigger: "Why root canal treatment?",
      content:
        "Root canal treatment is recommended if a patient has deep dental decay with severe tooth pain, especially when lying down or chewing. In some cases, a severely broken down tooth may not elicit any pain, especially if it’s a non-vital tooth; in such cases, a root canal treatment is still advised.",
    },
    {
      value: "4",
      trigger: "Can I get the tooth extracted instead of root canal treatment?",
      content:
        "No, one should avoid extracting teeth except for wisdom teeth. A root canal treatment can totally restore the form and function of a tooth without any side effects. Any extracted tooth needs to be replaced by a dental implant, which is considerably more expensive and time-consuming.",
    },
  ];

  return (
    <div className="pt-20">
      <ServiceBanner img={banner} text="Root Canal Treatment" />
      <section className="max-w-[1400px] lg:mx-auto lg:mt-[80px] mt-10 mx-5">
        <div className="relative ">
          <div className="lg:w-[656px] w-[193px] h-[100px] lg:h-[124px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="lg:text-[52px] text-[30px]  absolute top-4 lg:top-12 text-reds  leading-8 lg:leading-none">
            Root Canal Treatment At Leo Dental
          </h1>
          <h1 className="lg:text-[22px]">Root Canal Treatment in HSR Layout</h1>
          <p className="lg:text-[22px] lg:leading-8">
            Root canal treatment is one of the most commonly addressed dental
            treatments and also one of the most effective in saving a tooth. A
            good Root Canal Specialist will identify the cause, treat the
            ailment, and restore the tooth back to its form and function.{" "}
            <h2 className="inline">Root Canal Treatment in HSR Layout</h2> is
            now easily accessible for patients seeking reliable and pain-free
            solutions. Root canal treatment can either be completed in a single
            session or in multiple sessions depending on the condition of the
            tooth and peri-apical condition.
          </p>
        </div>
      </section>{" "}
      <section className="max-w-[1400px] mx-4 gap-7 lg:mx-auto lg:mt-[80px] mt-10 flex flex-col lg:flex-row justify-between items-start">
        <div>
          {" "}
          <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] leading-10 ">
            Why Root Canal Treatment at{" "}
            <span className="text-reds">Leo Dental?</span>{" "}
          </h1>
          {rootCanalDetails.map((item, index) => (
            <ul
              key={index}
              className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
            >
              <li className="text-black mt-4">{item}</li>
            </ul>
          ))}
        </div>
        <div className="lg:w-[555px] lg:h-[542px]">
          <img src={img7} alt="" className="" />
        </div>
      </section>
      <section className="max-w-[1400px] lg:mx-auto mx-4 mt-[80px] flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-[529px] lg:h-[426px]">
          <img src={group} alt="" className="" />
        </div>
        <div className="lg:w-1/2">
          {" "}
          <h1 className="lg:text-[52px] text-[30px] leading-[60px] ">
            Types of <span className="text-reds">Root Canal</span>
          </h1>
          <ul className="font-normal marker:text-reds lg:text-[22px] text-[18px]  leading-[28.64px] list-disc list-inside lg:mt-10">
            {rootCanalTypes.map((item, index) => (
              <li key={index} className="text-black lg:mt-6 mt-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 px-3 lg:px-0">
        <h1 className="lg:text-[52px] text-[30px] text-reds lg:leading-[62px]  ">
          Laser Dentistry FAQ&apos;s
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
      <section className=" bg-[#E2E2E2] mt-[80px] py-16">
        <div className="max-w-[1400px] lg:mx-auto mx-3 flex justify-between flex-col lg:flex-row items-center gap-x-14 ">
          <div className="lg:w-[445px] lg:h-[348px]">
            <img src={img8} alt="" className="" />
            <h1 className="text-reds text-[22px] mt-2 font-medium">
              Dr. Lahari ASR{" "}
              <span className="text-[12px] text-black">MDS Gold Medalist</span>
            </h1>
          </div>
          <div className="lg:w-2/3">
            <h1 className="lg:text-[52px] text-[30px] leading-[60px] ">
              Why <span className="text-reds ">Leo Dental?</span>
            </h1>
            <p className="lg:text-[22px] text-lg lg:leading-8 lg:mt-5 ">
              The Leo Dental team is comprised of friendly and highly skilled
              individuals all driven by the same mission: to give you the best
              dental experience possible. Everyone in our practice, from our
              front office team to our hygienists and dental assistants want to
              give you the highest level of quality dental care. You will feel
              this the moment you step into our office all the way until your
              scheduled appointment is over.
            </p>
          </div>
        </div>
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default RootCanal;
