import { useEffect, useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import person1 from "../../assets/align/person1.png";
import person2 from "../../assets/align/person2.png";
import logo2 from "../../assets/align/logo2.png";

import person3 from "../../assets/align/person3.png";
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the currently highlighted index
  const points = [
    "No downpayment",
    "With no EMI’s",
    "No hidden cost",
    "It's on us!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [points.length]);
  const handleCanPlay = () => {
    setIsLoading(false);
  };
  const whyUs = [
    {
      name: "Dr. Gowri Shankar",
      img: person1,
      points: [
        "Orthodontics & Dento Facial Orthopaedics.",
        "Aligner Expert, Treatment plan provider.",
        "Professor, Department of Orthodontics.",
        "Author, Dentest, Dental bytes.",
        "Author, Dentest, Dental bytes.",
      ],
      exp: "25+ Years of experience",
    },
    {
      name: "Dr. Feroz ",
      img: person2,
      points: [
        "Orthodontics & Dento Facial Orthopaedics.",
        "Aligner Expert.",
        "Smile Designer.",
        "Cosmetic & Aesthetic dentist.",
        "Director, LeoAlign.",
      ],
      exp: "15+ Years of experience",
    },
    {
      name: "Dr. Lahari",
      img: person3,
      points: [
        "Public Health Dentist.",
        "Gold Medalist.",
        "Smile Designing Expert.",
        "Director, LeoAlign.",
      ],
      exp: "15+ Years of experience",
    },
  ];
  return (
    <div>
      {" "}
      <section className="max-w-[1300px] mx-auto mt-[40px] lg:mt-[89px] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-x-5">
          <div className="w-full lg:w-auto h-[240px] lg:h-[427px] relative mb-6 lg:mb-0">
            {isLoading && (
              <div className="flex justify-center items-center bg-gray-300 absolute inset-0"></div>
            )}
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={handleCanPlay}
            >
              <source src="/leoalignVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-[30px] lg:text-[52px] font-medium leading-9 md:leading-none">
              First Time In India Get <br /> Your <b>First Aligner</b> For{" "}
              <span className="text-reds">Free</span>
            </h1>
            <div className="mt-5">
              {points.map((text, index) => (
                <p
                  key={index}
                  className={`text-[20px] lg:text-[36px] font-normal transition duration-500 ${
                    activeIndex === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
            <h1 className="text-[32px] lg:text-[52px] mt-2 font-medium">
              Try It Before You Use It!
            </h1>
          </div>
        </div>
      </section>
      <section className="mt-[40px] lg:mt-[89px] bg-[#FFF6CA] py-10 lg:py-14">
        <div className="max-w-[1350px] mx-auto px-4 lg:px-0">
          <div className="flex flex-row items-center lg:items-end gap-2 lg:gap-x-4">
            <h1 className="text-[32px] lg:text-[52px] font-normal">Why</h1>
            <div className="w-[150px] lg:w-[209px] h-[40px]  mt-3 lg:mt-0 lg:h-[57px]">
              <img
                src={logo2}
                alt=""
                className="imgs w-full h-full object-contain"
              />
            </div>
            <h1 className="text-[32px] lg:text-[52px] font-normal">?</h1>
          </div>
          <p className="text-[24px] lg:text-[46.87px] font-normal text-center lg:text-left mt-4">
            Meet our <b>Aligner</b> Experts - Finest <b>Orthodontists</b> in
            India!
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-20 mt-8 lg:mt-12">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full lg:w-[407px]"
              >
                <div className="w-full h-[240px] lg:h-[351px] z-10">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-auto lg:h-[352px] w-full bg-white/60 -mt-1 p-4">
                  <div className="text-center mt-5 lg:h-[208px]">
                    <h1 className="text-[24px] lg:text-[36px] font-medium text-reds">
                      {item.name}{" "}
                      <span className="text-xl lg:text-2xl text-black">
                        MDS
                      </span>
                    </h1>
                    <ul className="flex flex-col text-left text-base lg:text-lg mt-5">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <TbPointFilled className="text-reds text-base lg:text-lg mr-2 mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className="text-lg lg:text-2xl text-reds text-center lg:mt-16 mt-5 font-medium">
                    {item.exp}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
