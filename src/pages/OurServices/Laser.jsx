import text from "../../assets/ourservice/text.png";
import banner from "../../assets/ourservice/banner3.jpg";
import img4 from "../../assets/ourservice/img4.png";
import img5 from "../../assets/ourservice/img5.png";
import img6 from "../../assets/ourservice/img6.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import ContactSection from "../../components/ContactSection";
import contact from "../../assets/ourservice/contact3.png";
import ServiceBanner from "../../components/banner/ServiceBanner";

const Laser = () => {
  const listItems = [
    "One design for your desktop, tab and mobile.",
    "Beautiful and modern design that makes difference.",
    "Boost your sales with strategically built user experience.",
  ];
  const dentalImplantTypes = [
    "Minimum Pain",
    "Minimum Bleeding",
    "Fast recovery, No side effects",
    "Unrivalled laser drilling speeds",
    "Higher precision and selectiveness",
    "Quicker and simpler procedures",
    "Greater patient comfort and satisfaction",
    "Unlimited dental and aesthetic treatment options",
    "Unmatched treatment management options",
    "Automatic Sterilization",
  ];
  const accordionData = [
    {
      value: "1",
      trigger: "Will there be bleeding during Laser Dentistry?",
      content:
        "Usually, there will be minimal bleeding or no bleeding at all during the laser dentistry procedure. Laser dentistry in Hyderabad at ADS Dental Hospital offers the optimum services at the most reasonable prices.",
    },
    {
      value: "2",
      trigger: "Will it be painful during Laser Dentistry?",
      content:
        "Usually, it won’t be painful at all. Local anesthesia will be administered so that the patient can be completely carefree about the medical procedure. This process has absolutely no side effects. Also, there is not an ounce of pain encountered.",
    },
    {
      value: "3",
      trigger: "What types of foods can we take after the procedure?",
      content:
        "Usually, it is better to have soft foods. Soft foods that are easy on chewing can be used. It is advisable to avoid hard foods and excessive intake of beverages like tea and coffee must be avoided.Laser Dentistry in Hyderabad offered at ADS Dental Hospital is the most reasonable without any side effects over here. Laser dental treatment in Hyderabad is the best offered here. Laser dentistry in Hyderabad is the most sound treatment offered here. Laser dental treatment in Hyderabad is the most reasonable and advanced here. The Hitech labs with sound imaging equipment are proof of that.",
    },
  ];
  return (
    <div className="pt-20">
      <ServiceBanner img={banner} text="Laser Dentistry" />
      <section className="max-w-[1400px] mx-auto px-4 lg:px-0 mt-[80px]">
        <div className="relative ">
          <div className="lg:w-[935px] w-[273px] h-[52px] lg:h-[164px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="lg:text-[52px] text-[30px]  absolute top-2 lg:top-12 text-reds  ">
            Laser Dentistry
          </h1>
          <p className="lg:text-[22px] lg:leading-8 mt-5 lg:mt-0">
            Laser dentistry is fast gaining momentum in the dental field. This
            process involves focusing a laser beam through an optical fiber over
            the teeth and gums. Usually, this method is a far safer and more
            innovative way of dealing with dental problems. There are many
            scenarios like bleeding gums, stained gums, stained teeth, etc that
            people tend to suffer from. Hence a process like Laser dentistry is
            being used to restore good gums and teeth. Gum bleeding can also be
            stopped with the proper application of Laser Dentistry. Laser
            Dentistry is considered to be a marvel in the dental arena field.
            Laser dentistry will kill the bacteria cropping up inside your
            mouth. There are many benefits offered by laser dentistry. Laser
            dentistry in Hyderabad is the best at ADS Dental Hospital. Laser bad
            breath treatment is also offered here. The bacteria gets killed,
            this process is completely painless
          </p>
          {listItems.map((item, index) => (
            <ul
              key={index}
              className="font-normal marker:text-reds text-[18px]  leading-[24px] lg:text-[22px] lg:leading-[28.64px] list-disc list-outside pl-5 mt-4"
            >
              <li className="text-black mt-4">{item}</li>
            </ul>
          ))}
        </div>
      </section>{" "}
      <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10 flex gap-10 lg:flex-row px-2 lg:px-0 flex-col gap-x-10 justify-between items-center">
        <div className="lg:w-[435px] lg:h-[375px]">
          <img src={img4} alt="" className="" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] leading-9">
            Benefits Of <span className="text-reds">Laser Treatments</span>{" "}
          </h1>
          <p className="lg:text-[22px] lg:leading-8 lg:mt-10">
            Laser treatment has several benefits. In most instances, it can be
            carried out without the need for anaesthesia. There is also markedly
            less bleeding and swelling. Decreased bleeding is due to the ability
            of the laser to assist in forming a fibrin clot. This eliminates the
            need for placing sutures (stitches) and wounds heal faster. And
            there’s more. Lasers kill the harmful bacteria and sterilize the
            working area thereby reducing the need for antibiotics.
          </p>
          <p className="lg:text-[22px] lg:leading-8 mt-4">
            The laser energy from dental lasers is delivered through an optical
            fibre. The fibre is continuously moved along the infected area to
            burn the infected tissues.
          </p>
        </div>
      </section>{" "}
      <section className="bg-[#E2E2E2] lg:mt-[80px] mt-10  py-10 px-4 lg:px-0">
        <div className="max-w-[1400px] mx-auto ">
          <h1 className="lg:text-[52px] text-[30px] lg:leading-[60px] ">
            Unique <span className="text-reds">Advantages</span>{" "}
          </h1>
          <ul className="font-normal  grid lg:grid-cols-2  max-w-[1180px] lg:gap-y-5 marker:text-reds lg:text-[22px] leading-[28.64px] list-disc list-inside lg:mt-10">
            {dentalImplantTypes.map((item, index) => (
              <li key={index} className="text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-w-[1400px]  bg-[#FFF6CA] mx-auto lg:mt-[80px] mt-10  p-10 flex lg:flex-row px-2 lg:px-10 flex-col  gap-x-10 justify-between items-center">
        <div className="lg:w-2/3">
          <h1 className="lg:text-[52px] text-[30px]  text-reds">
            How does it work?
          </h1>
          <p className="lg:text-[22px] lg:leading-8 mt-5">
            How this works is that a laser with a rather small amount of energy
            is directed with great precision at the disease portions of the gum.
            The laser then removes the tissue which is diseased, thus
            eliminating infection. This whole process is done without any type
            of incision. This is so because the laser immediately cauterizes
            (use of heat to close an area to prevent or stop bleeding) the
            wound, resulting in little to no bleeding. The use of the laser is
            so effective that the patient only experiences minor discomfort
            making anesthesia unnecessary
          </p>
        </div>
        <div className="lg:w-[403px] lg:sh-[321px] mt-5 lg:mt-0">
          <img src={img6} alt="" className="" />
        </div>
      </section>
      <section className="max-w-[1400px] px-3 lg:px-0 mx-autolg:mt-[80px] mt-10 mx-auto flex flex-col lg:flex-row gap-7 justify-between items-center">
        <div className="lg:w-[457px] lg:h-[363px]">
          <img src={img5} alt="" className="" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="lg:text-[52px] text-[30px] ] text-reds">Recovery</h1>
          <p className="lg:text-[22px] lg:leading-8 lg:mt-10">
            Since laser gum surgery is so effective the recovery time is less
            than 24 hours where traditional gum surgery requires 2-4 weeks of
            recovery time. In fact the lasers for this surgical use where
            created by dentists and receive extensive clinical trials before
            receiving Federal Drug Administration approval.
          </p>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto lg:mt-[80px] mt-10  px-2 lg:px-0">
        <h1 className="g:text-[52px] text-[30px] text-reds leading-[62px]  ">
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
      <ContactSection image={contact} />
    </div>
  );
};

export default Laser;
