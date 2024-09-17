import text from "../../assets/ourservice/text4.png";
import banner from "../../assets/ourservice/banner5.png";
import braces1 from "../../assets/ourservice/braces1.png";
import braces2 from "../../assets/ourservice/braces2.png";
import Accordian, { AccordianItem } from "../../components/Accordion";
import ContactSection from "../../components/ContactSection";
import contact from "../../assets/ourservice/contact5.png";

const Braces = () => {
  const braces = [
    {
      img: braces1,
      heading: "Metal Braces",
      desc: "Metal Braces can be silver or golden. The golden braces look a bit more “jewelry-like” and are often a popular choice with young women. Metal braces are very strong and can withstand most types of treatment.These braces are metallic. They fit perfectly on teeth.These wired braces are the most traditional types of braces",
    },
    {
      img: braces2,
      heading: "Ceramic Braces",
      desc: "Metal Braces can be silver or golden. The golden braces look a bit more “jewelry-like” and are often a popular choice with young women. Metal braces are very strong and can withstand most types of treatment.These braces are metallic. They fit perfectly on teeth.These wired braces are the most traditional types of braces",
    },
  ];
  const accordionData = [
    {
      value: "1",
      trigger: "If I get braces, how long do I have to wear them?",
      content:
        "The amount of time spent in braces will vary, depending on the individual patient, because every smile responds differently to treatment. Treatment times can take anywhere from six to 30 months, but most standard treatments last about 18 months.",
    },
    {
      value: "2",
      trigger: "Do braces hurt?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "3",
      trigger: "Do I need to brush my teeth more often if I have braces?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "4",
      trigger:
        "Will my braces interfere with my school activities like sports, playing an instrument, or singing?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id unde non explicabo necessitatibus, placeat quo ducimus labore quas pariatur possimus perspiciatis eaque laboriosam vero, voluptates cumque vel? Tempora, dignissimos?",
    },
    {
      value: "5",
      trigger:
        "If I have braces, do I still need dental checkups every six months?",
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
          <h1 className="font-bold mt-">Dental Braces</h1>
        </h1>
      </section>
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <div className="relative ">
          <div className="w-[850px] h-[164px]">
            <img src={text} alt="" className="" />
          </div>
          <h1 className="text-[52px]  absolute top-12 text-reds  ">
            Braces For Teeth Alignment
          </h1>
          <p className="text-[22px] leading-8">
            Orthodontics is the specialization of dentistry, which deals with
            correcting the bite and arrangement of teeth, thus improving the
            smile and function of the teeth. The irregularities of teeth are
            called Malocclusions and are an important factor in robbing one of a
            good smile. A good smile adds up to the personality of an
            individual. A fabulous smile makes you attractive and also improves
            one’s confidence levels. Braces improve your smile and therefore
            improve your appearance. Braces are now considered a very important
            fashion accessory. Usually people today suffer from teeth alignment
            issues like protruding teeth, tooth severely misaligned. All these
            issues will robe your smile and hence medical rectifying procedures
            have to be implemented such that a person can flaunt a sweet smile.
            Braces cost is by far the most reasonable here.
          </p>
        </div>
      </section>{" "}
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-[52px] text-reds text-center ">Types of Braces</h1>
        <div className="flex justify-center items-center gap-x-20 rounded-xl mt-14">
          {braces.map((item, index) => (
            <div
              key={index}
              className="w-[544px] h-[616px] bg-[#E2E2E2] flex flex-col items-center justify-center"
            >
              <div className="w-[454px] h-[]">
                <img src={item.img} alt="" className="imgs" />
              </div>
              <div className="mt-3 px-10 text-left">
                <h1 className="text-[24px] text-reds font-medium">
                  {item.heading}
                </h1>
                <p className="text-[20px] leading-7  mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>{" "}
      <section className="max-w-[1400px] mx-auto mt-[80px]">
        <h1 className="text-[52px] text-reds leading-[62px]  ">
          Braces FAQ&apos;s
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
      <ContactSection image={contact} />
    </div>
  );
};

export default Braces;
