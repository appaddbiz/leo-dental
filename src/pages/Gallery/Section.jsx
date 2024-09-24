import { TbPointFilled } from "react-icons/tb";
import girl from "../../assets/align/girl.png";
import tooth from "../../assets/align/tooth.png";
import tooth2 from "../../assets/align/tooth2.png";
import tooth3 from "../../assets/align/tooth3.png";
import logo2 from "../../assets/align/logo2.png";
import { useEffect, useState } from "react";

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
  const images = [tooth, tooth2, tooth3]; // array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("fade-in");
      }, 300);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <div>
      <section className="max-w-[1300px] mx-auto mt-[40px] lg:mt-[89px] px-4 lg:px-0">
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
          <div className="w-full sm:w-[300px] lg:w-[548px] lg:h-[300px] h-[200px]  mt-8 lg:mt-10">
            <img
              src={images[currentImageIndex]}
              alt="Sliding images"
              className={`img w-full h-full object-cover ${fadeClass} transition-opacity duration-1000 ease-in-out`}
            />
          </div>
        </div>
      </section>

      <section className="bg-reds relative mt-[60px] lg:mt-[100px] px-4 lg:px-0 pt-10 lg:pt-0">
        <div className="max-w-[1300px] h-auto lg:h-[310px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-[386px] h-[400px] flex justify-center lg:justify-start">
            <img
              src={girl}
              alt="girl"
              className="absolute lg:w-[auto]  sm:w-[300px]  bottom-0"
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
