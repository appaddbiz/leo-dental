import { TbPointFilled } from "react-icons/tb";
import girl from "../../assets/align/girl.png";
import tooth from "../../assets/align/tooth.png";
import logo2 from "../../assets/align/logo2.png";

const Section = () => {
  const features = [
    "Completely Professional",
    "Customised",
    "Invisible",
    "Removable",
    "Digital",
    "Painless",
    "Accurate Results",
  ];
  return (
    <div>
      <section className="max-w-[1450px] mx-auto mt-[40px] lg:mt-[89px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 justify-center text-center lg:text-left">
          <h1 className="text-[32px] lg:text-[52px] font-normal">
            Your Best Smile Crafted At
          </h1>
          <div className="w-[150px] lg:w-[209px] h-[45px] lg:h-[65px]">
            <img
              src={logo2}
              alt=""
              className="img w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="max-w-[791px] mx-auto gap-4 flex flex-wrap items-center justify-center mt-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center text-[20px] sm:text-[24px] lg:text-[29px]"
            >
              <TbPointFilled className="text-reds mr-2" />
              {item}
            </div>
          ))}
          <div className="w-full sm:w-[400px] lg:w-[548px] h-auto mt-8 lg:mt-10">
            <img
              src={tooth}
              alt=""
              className="img w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* 
      <section className=" bg-reds relative  mt-[100px]">
        <div className="max-w-[1450px] lg:h-[310px]  mx-auto flex  items-center  justify-between">
          <div className="lg:w-[386px] h-[400px] ">
            <img src={girl} alt="" className="absolute  bottom-0" />
          </div>
          <div className="lg:w-2/3 lg:px-20 text-[42px] text-white">
            Talk directly to your treatment planner
            <span className="text-yellows"> orthodontist</span> . Our
            professional expert doctors are here to guide you through your
            <span className="text-yellows"> aligner</span> journey.
          </div>
        </div>
      </section> */}
      <section className="bg-reds relative mt-[60px] lg:mt-[100px] px-4 lg:px-0 pt-10 lg:pt-0">
        <div className="max-w-[1450px] h-auto lg:h-[310px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[386px] h-auto lg:h-[400px] flex justify-center lg:justify-start mt-6 lg:mt-0">
            <img
              src={girl}
              alt=""
              className="w-[200px] sm:w-[300px]  h-auto object-cover lg:absolute lg:bottom-0"
            />
          </div>
          <div className="w-full lg:w-3/4 text-center lg:text-left lg:px-20 text-[24px] sm:text-[30px] lg:text-[42px] text-white">
            Talk directly to your treatment planner{" "}
            <span className="text-yellows">orthodontist</span>. Our professional
            expert doctors are here to guide you through your{" "}
            <span className="text-yellows">aligner</span> journey.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
