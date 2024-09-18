import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import person1 from "../../assets/align/person1.png";
import person2 from "../../assets/align/person2.png";
import logo2 from "../../assets/align/logo2.png";

import person3 from "../../assets/align/person3.png";
const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      <section className="max-w-[1450px] mx-auto mt-[89px]">
        <div className="flex justify-between items-start gap-x-5">
          <div className="w-auto h-[427px] relative">
            {isLoading && (
              <div className="flex justify-center items-center bg-gray-300 absolute inset-0"></div>
            )}
            <video
              className="imgs"
              autoPlay
              muted
              loop
              onCanPlay={handleCanPlay}
            >
              <source src="/leoalignVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-1/2">
            <h1 className="text-[52px]">
              First Time In India Get <br /> You <b>First Aligner</b> For{" "}
              <span className="text-reds"> Free</span>
            </h1>
            <div className="mt-5">
              <p className="text-[#9B9B9B] text-[36px] font-normal">
                No downpayment
              </p>
              <p className="text-[36px] font-normal">With no EMI’s</p>
              <p className="text-[#9B9B9B] text-[36px] font-normal">
                No hidden cost
              </p>
              <p className="text-[#9B9B9B] text-[36px] font-normal">
                Its on us!
              </p>
            </div>
            <h1 className="text-[52px] mt-2 font-medium">
              Try It Before You Use It!
            </h1>
          </div>
        </div>
      </section>
      <section className=" mt-[89px] bg-[#FFF6CA] py-14">
        <div className="max-w-[1450px] mx-auto">
          <div className="flex items-end gap-x-4">
            <h1 className="text-[52px] font-normal">Why</h1>
            <div className="w-[209px] h-[57px]">
              <img src={logo2} alt="" className="imgs" />
            </div>
            <h1 className="text-[52px] font-normal">?</h1>
          </div>{" "}
          <p className="text-[46.87px] font-normal">
            Meet our <b>Aligner</b> Experts - Finest <b>Orthodontists</b> in
            India!
          </p>
          <div className="flex items-center justify-center gap-x-20 mt-12 ">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center  w-[407px]"
              >
                <div className="w-full h-[351px] z-10 ">
                  <img src={item.img} alt="" className="" />
                </div>
                <div className="h-[312px] w-full bg-white/60 -mt-1">
                  <div className=" h-[208px]  text-center mt-5 ">
                    <h1 className="text-[36px] font-medium text-reds">
                      {item.name}{" "}
                      <span className="text-2xl text-black">MDS</span>{" "}
                    </h1>
                    <ul className="flex flex-col text-left pl-3 text-lg mt-5 ">
                      {item.points.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <TbPointFilled className="text-reds text-lg mr-2 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h1 className=" text-2xl text-reds text-center mt-7 font-medium">
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
