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
      <section className="max-w-[1450px] mx-auto mt-[89px]">
        <div className="flex items-end gap-x-4 justify-center">
          <h1 className="text-[52px] font-normal">
            Your Best Smile Crafted At
          </h1>
          <div className="w-[209px] h-[65px]">
            <img src={logo2} alt="" className="img" />
          </div>
        </div>
        <div className="max-w-[791px]  mx-auto gap-x-2 flex flex-wrap items-center justify-center ">
          {features.map((item, index) => (
            <div key={index} className="flex items-center justify- text-[29px]">
              {" "}
              <TbPointFilled className="text-reds" />
              {item}
            </div>
          ))}
          <div className="w-[548px] h-[273px] mt-10">
            <img src={tooth} alt="" className="imgs" />
          </div>
        </div>
      </section>{" "}
      <section className=" bg-reds relative  mt-[100px]">
        <div className="max-w-[1450px] h-[310px]  mx-auto flex  items-center  justify-between">
          <div className="w-[386px] h-[400px] ">
            <img src={girl} alt="" className="absolute  bottom-0" />
          </div>
          <div className="w-2/3 px-20 text-[42px] text-white">
            Talk directly to your treatment planner
            <span className="text-yellows"> orthodontist</span> . Our
            professional expert doctors are here to guide you through your
            <span className="text-yellows"> aligner</span> journey.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
