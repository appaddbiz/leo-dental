import text from "../../assets/ourservice/text5.png";
import banner from "../../assets/ourservice/banner6.jpg";
import img9 from "../../assets/ourservice/img9.png";
import ContactSection from "../../components/ContactSection";
import contact from "../../assets/ourservice/contact6.png";
import group from "../../assets/ourservice/group2.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import ServiceBanner from "../../components/banner/ServiceBanner";
const Crowns = () => {
  const rootCanalDetails = [
    "Restores and maintains the natural bite.",
    "Prevents unnatural stress on other teeth.",
    "Keeps opposing teeth in their proper place.",
    "Prevents shifting and tilting of adjacent teeth.",
    "Discourages further dental decay and periodontal disease.",
    "Enhances your smile, speech and chewing function.",
  ];
  const accordionData = [
    {
      value: "1",
      trigger: "How long will crown last?",
      content:
        "The amount of time spent in braces will vary, depending on the individual patient, because every smile responds differently to treatment. Treatment times can take anywhere from six to 30 months, but most standard treatments last about 18 months.",
    },
    {
      value: "2",
      trigger: "Do crowns hurt?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "3",
      trigger: "How long does it take to recover after crown placement??",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "4",
      trigger: "Are crowns used for cosmetic dentistry?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "5",
      trigger: "Why would I need a dental crown?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
  ];

  const toothIssues = [
    "A cracked tooth without symptoms.",
    "The patient experiences sensitivity to bite pressure and temperature, particularly the cold.",
    "Deep Decay: Once the dentist removes the decay, there will not be enough tooth structure left to support a filling.",
    "The patient has had or needs root canal treatment.",
    "The tooth has a large silver (amalgam) filling that is breaking down.",
  ];
  const dentalNeeds = [
    "The patient is missing one or more teeth.",
    "The patient has a removable partial denture but wants a more permanent solution.",
  ];

  return (
    <div className="pt-20">
      <ServiceBanner img={banner} text="Dental Crowns" />
      <section className="max-w-[1400px] px-4 lg:px-0 mx-auto mt-[80px]">
        <div className="relative ">
          <div className="lg:w-[890px] w-[264px] h-[60px] lg:h-[164px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="lg:text-[52px] text-[30px]  absolute top-2 lg:top-12 text-reds  ">
            Dental Crowns & Bridges
          </h1>
          <p className="lg:text-[22px] text-[18px] lg:leading-8">
            A crown-sometimes called a “cap”-is a tooth-like covering placed
            over a carefully prepared existing tooth. Used to strengthen,
            restore or improve the appearance of your natural tooth. A crown is
            placed on an individual tooth much like a thimble over your finger.
            In addition to being used to strengthen a tooth to accommodate the
            attachment of a fixed bridge, crowns serve many functions. One of
            the most common indications is to support the tooth when there is no
            longer sufficient tooth structure left to place a filling. Crowns
            may also be used to protect the structure of a tooth that is
            fractured or broken.
          </p>
        </div>
      </section>{" "}
      <section className="max-w-[1400px] px-2 lg:px-0 mx-auto mt-10 lg:mt-[80px]">
        <div className=" flex flex-col lg:flex-row justify-between items-start gap-5">
          <div>
            {" "}
            <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] leading-9  ">
              Benefits Of Crown <br />
              <span className="text-reds"> Crown & Bridge Treatment</span>{" "}
            </h1>
            <p className="font-semibold lg:text-[22px] lg:mt-8 mt-5">
              Crown and bridge treatment reverses the negative impact of missing
              teeth in a variety of ways:
            </p>
            {rootCanalDetails.map((item, index) => (
              <ul
                key={index}
                className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
              >
                <li className="text-black mt-4">{item}</li>
              </ul>
            ))}
          </div>
          <div className="lg:w-[555px] lg:h-[490px]">
            <img src={img9} alt="" className="imgs" />
          </div>
        </div>
        <p className="lg:text-[22px] lg:leading-8 mt-5">
          Usage of ceramic in making dental crowns is a break through in
          dentistry. Dental Porcelain is a kind of ceramic and is used in
          fabricating dental crown and bridges. Main advantage is, its white
          colour which makes it similar to natural tooth.
        </p>
        <p className="lg:text-[22px] lg:leading-8 mt-4 font-medium">
          There are two types of ceramic crowns namely Porcelain Fused to Metal
          crowns and All Ceramic crowns.
        </p>
        <p className="lg:text-[22px] lg:leading-8 mt-5">
          <span className="text-reds font-medium">
            Porcelain fused metal crowns
          </span>{" "}
          in common terminology called as metal ceramic crowns have a metal
          shell/core on which, is fused a veneer of porcelain. They were
          considered as gold standard for repair of damaged teeth and they have
          ruled dentistry for several decades.
        </p>{" "}
        <p className="lg:text-[22px] lg:leading-8 mt-5">
          <span className="text-reds font-medium">In All Ceramic Crowns,</span>{" "}
          the entire thickness of the crown is made out of porcelain. These type
          of crowns are also mentioned as Metal free crowns and are most
          bio-compatible type of crowns.
        </p>
      </section>
      <section className="bg-[#D9D9D9] mt-10 lg:mt-[80px] lg:py-12 py-10">
        <section className="max-w-[1400px] mx-auto px-4 lg:px-0 gap-5  flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-[512px] lg:h-[702px] h-[521px] ">
            <img src={group} alt="" className="imgs" />
          </div>
          <div className="lg:w-1/2">
            {" "}
            <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] ">
              Signs You Need
              <span className="text-reds">
                {" "}
                Crown <br /> & Bridge Treatment
              </span>
            </h1>
            <p className="text-[22px] leading-8 mt-3 lg:mt-8 font-medium">
              Signs a Crown Is Needed:
            </p>
            {toothIssues.map((item, index) => (
              <ul
                key={index}
                className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
              >
                <li className="text-black mt-4">{item}</li>
              </ul>
            ))}
            <p className="text-[22px] leading-8 mt-8 font-medium">
              Signs Patients Need a Bridge:
            </p>
            {dentalNeeds.map((item, index) => (
              <ul
                key={index}
                className="font-normal marker:text-reds text-[18px] leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
              >
                <li className="text-black mt-4">{item}</li>
              </ul>
            ))}
          </div>
        </section>
      </section>
      <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 px-3 lg:px-0">
        <h1 className="lg:text-[52px] text-[30px] text-reds lg:leading-[62px]  ">
          Dental Crowns FAQ&apos;s
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
  );
};

export default Crowns;
