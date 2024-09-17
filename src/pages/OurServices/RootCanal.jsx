import text from "../../assets/ourservice/text3.png";
import banner from "../../assets/ourservice/banner4.png";
import img7 from "../../assets/ourservice/img7.png";
import group from "../../assets/ourservice/group.png";
import img8 from "../../assets/ourservice/img8.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import contact from "../../assets/ourservice/contact4.png";
import ContactSection from "../../components/ContactSection";

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
      trigger: "Will there be bleeding during Laser Dentistry?",
      content:
        "Usually, there will be minimal bleeding or no bleeding at all during the laser dentistry procedure. Laser dentistry in Hyderabad at ADS Dental Hospital offers the optimum services at the most reasonable prices.",
    },
    {
      value: "2",
      trigger: "Will it be painful during Laser Dentistry?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "3",
      trigger: "What types of foods can we take after the procedure?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
  ];
  return (
    <div className="pt-20">
      <section className="relative w-full h-[481px]">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="absolute  lg:inset-y-44 lg:inset-1 max-w-[1400px]  mx-auto text-white text-[50px]">
          <p className=" text-white text-[24px] underline font-normal">
            Our Services
          </p>
          <h1 className="font-bold mt-">Root Canal Treatment</h1>
        </h1>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <div className="relative ">
          <div className="w-[656px] h-[164px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="text-[52px]  absolute top-12 text-reds  ">
            Root Canal Treatment At Leo Dental
          </h1>
          <p className="text-[22px] leading-8">
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
            this process is completely painless.
          </p>
        </div>
      </section>{" "}
      <section className="max-w-[1400px] mx-auto mt-[80px] flex justify-between items-start">
        <div>
          {" "}
          <h1 className="text-[52px] leading-[60px] ">
            Why Root Canal Treatment at{" "}
            <span className="text-reds">Leo Dental?</span>{" "}
          </h1>
          <ul className="font-normal marker:text-reds text-[22px]  leading-[28.64px] list-disc list-inside mt-10">
            {rootCanalDetails.map((item, index) => (
              <li key={index} className="text-black mt-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[555px] h-[542px]">
          <img src={img7} alt="" className="" />
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px] flex justify-between items-start">
        <div className="w-[529px] h-[426px]">
          <img src={group} alt="" className="" />
        </div>
        <div className="w-1/2">
          {" "}
          <h1 className="text-[52px] leading-[60px] ">
            Types of <span className="text-reds">Root Canal</span>
          </h1>
          <ul className="font-normal marker:text-reds text-[22px]  leading-[28.64px] list-disc list-inside mt-10">
            {rootCanalTypes.map((item, index) => (
              <li key={index} className="text-black mt-6">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-[52px] text-reds leading-[62px]  ">
          Laser Dentistry FAQ&apos;s
        </h1>
        <div className="mt-10">
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
      </section>{" "}
      <section className=" bg-[#E2E2E2] mt-[80px] py-16">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-x-14 ">
          <div className="w-[445px] h-[348px]">
            <img src={img8} alt="" className="" />
            <h1 className="text-reds text-[22px] mt-2 font-medium">
              Dr. Lahari ASR{" "}
              <span className="text-[12px] text-black">MDS Gold Medalist</span>
            </h1>
          </div>
          <div className="w-2/3">
            <h1 className="text-[52px] leading-[60px] ">
              Why <span className="text-reds ">Leo Dental?</span>
            </h1>
            <p className="text-[22px] leading-8 mt-5 ">
              Laser dentistry is fast gaining momentum in the dental field. This
              process involves focusing a laser beam through an optical fiber
              over the teeth and gums. Usually, this method is a far safer and
              more innovative way of dealing with dental problems. There are
              many scenarios like bleeding gums, stained gums, stained teeth,
              etc that people tend to suffer from. Hence a process like Laser
              dentistry is being used to restore good gums and teeth. Gum
              bleeding can also be stopped with the proper application of Laser
              Dentistry. Laser Dentistry is considered to be a marvel in the
              dental arena field. Laser dentistry will kill the bacteria
              cropping up inside your mouth. There are many benefits offered by
              laser dentistry. Laser dentistry in Hyderabad is the best at ADS
              Dental Hospital. Laser bad breath treatment is also offered here.
              The bacteria gets killed, this process is completely painless.
            </p>
          </div>
        </div>
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default RootCanal;
