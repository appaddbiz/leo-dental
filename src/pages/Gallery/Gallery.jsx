import { useState } from "react";

import bannerimg from "../../assets/bannerimg.png";
import logo1 from "../../assets/align/logo1.png";
import logo2 from "../../assets/align/logo2.png";
import person1 from "../../assets/align/person1.png";
import person2 from "../../assets/align/person2.png";
import person3 from "../../assets/align/person3.png";
import img from "../../assets/align/img1.png";
import per1 from "../../assets/align/per1.png";
import per2 from "../../assets/align/per2.png";
import per3 from "../../assets/align/per3.png";
import per4 from "../../assets/align/per4.png";
import per5 from "../../assets/align/per5.png";
import tooth from "../../assets/align/tooth.png";
import contact from "../../assets/align/contact.png";
import per6 from "../../assets/align/per6.png";
import girl from "../../assets/align/girl.png";
import video from "../../assets/align/leoalignVideo.mp4";
import CrookedTeeth from "../../assets/align/crook.mp4";
import CrossBite from "../../assets/align/cross.mp4";
import DeepBite from "../../assets/align/deep.mp4";
import ForwardlyPlaced from "../../assets/align/forward.mp4";
import TeethGap from "../../assets/align/gap.mp4";
import OpenBite from "../../assets/align/open.mp4";
import { TbPointFilled } from "react-icons/tb";
import { PiPhoneCallFill } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// dental-bf4

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleVideoLoaded = (index) => {
    setLoading((prev) => {
      const updatedLoading = [...prev];
      updatedLoading[index] = false;
      return updatedLoading;
    });
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
  const records = [
    { total: "16000+", desc: "Patients Treated" },
    { total: "250+", desc: "Team of Dentists" },
    { total: "700+", desc: "Our Providers" },
  ];
  const carsoul = [
    { video: CrookedTeeth, heading: "Crooked Teeth" },
    { video: CrossBite, heading: "Cross Bite" },
    { video: DeepBite, heading: "Deep Bite" },
    { video: ForwardlyPlaced, heading: "Forwardly Placed" },
    { video: TeethGap, heading: "TeethGap" },
    { video: OpenBite, heading: "OpenBite" },
  ];
  const [loading, setLoading] = useState(new Array(carsoul.length).fill(true));

  const person = [
    {
      img: per1,
      name: "Sakshi S",
      profession: "Influencer",
      desc: "Gap in my front teeth was closed with in three months of treatment with Leoalign. No pain…no trouble and now I am all smiles. I am  ",
    },
    {
      img: per2,
      name: "Prateek Huda",
      profession: "Software Engineer",
      desc: "My overlapped front teeth were corrected with perfect finishing with in six months of my treatment. My overall confidence levels are raised after I am",
    },
    {
      img: per3,
      name: "Samiksha Rao",
      profession: "Influencer",
      desc: " I corrected by forwardly placed teeth with Leoalign and I cant be more thankful. They corrected my smile without removing additional teeth and I am utterly happy to be ",
    },
    {
      img: per4,
      name: "Niharika Goyal",
      profession: "Fashion Technology Student",
      desc: "My teeth were irregular and I had speech issues coz of that. Leoalign not only corrected my teeth but improved my speech as well….elated to be",
    },
    {
      img: per5,
      name: "Deekshita Gowda",
      profession: "Classical Dancer",
      desc: " All my stage fears and inhibitions vanished once my smile got corrected through Leoalign. I evolved like a butterfly and just cant stop smiling….beaming with pride to be ",
    },
    {
      img: per6,
      name: "Swagat Sindiri",
      profession: "Entrepreneur",
      desc: " My upper and lower teeth were placed in a very wrong position and were giving me jaw pain. Leoalign corrected my cross bite and put my teeth in Ideal position. I am sure to say I got saved by getting",
    },
  ];
  const features = [
    "Completely Professional",
    "Customised",
    "Invisible",
    "Removable",
    "Digital",
    "Painless",
    "Accurate Results",
  ];
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
  };

  return (
    <div className="pt-16">
      <section className="bg-yellows h-[481px]">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="">
            <div className="w-[371px] h-[100px]">
              <img src={logo1} alt="" className="" />
            </div>
            <div className="text-[48px] mt-5">
              Entrust Your Smile <br /> To The
              <span className="text-reds font-semibold"> Professionals!</span>
            </div>
            <form className="mt-[32px] ">
              <div className="mb-4 flex items-center rounded-2xl ">
                <div className="bg-white text-xl font-normal py-2 px-4">
                  +91
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-[250px] bg-yellow-200 px-1 py-2 text-xl  focus:outline-none  "
                />
              </div>
              <button type="submit" className="button mt-5">
                Book an Appointment
              </button>
            </form>
          </div>
          <div className="w-[563px] h-[481px]">
            <img src={bannerimg} alt="" className="" />
          </div>
        </div>
      </section>
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
              <source src={video} type="video/mp4" />
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
      <section className="h-[350px] w-full">
        <div className="max-w-[1400px] mx-auto mt-[59px] ">
          <h1 className="heading text-reds text-center pt-[53px]">
            Maintenance of Life Time Dental Records
          </h1>{" "}
          <div className="flex items-center justify-center gap-x-20 text-center mt-14">
            {records.map((item, index) => (
              <div key={index}>
                <h1 className="text-[45px]">{item.total}</h1>
                <p className="text-[30px] text-reds">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="h-[344px] bg-reds flex flex-col items-center justify-center relative">
        <div className="w-[848px] h-[174px]">
          <img src={img} alt="img" className="imgs" />
        </div>
        <h1 className="text-[52px] text-white text-center pt-[53px] absolute font-medium">
          Your Smile Is Precious. <br /> Let Only{" "}
          <span className="text-yellows">Professionals</span> Take Care Of It!
        </h1>{" "}
      </section>
      <section className="max-w-[1400px] mx-auto mt-[89px]">
        <div className="flex items-end gap-x-4">
          <h1 className="text-[52px] font-normal">Craft Your Smile With</h1>
          <div className="w-[209px] h-[59px]">
            <img src={logo2} alt="" className="img" />
          </div>
        </div>{" "}
        <div className="mt-5 ">
          <Slider {...settings}>
            {carsoul.map((item, index) => (
              <div key={index} className="pr-5 text-center">
                <div className="shadow-xl border-2">
                  <div className="w-[328px] h-[316px] relative">
                    {/* Gray background while loading */}
                    {loading[index] && (
                      <div className="absolute inset-0 bg-gray-300"></div>
                    )}
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      preload="auto" // Preload video
                      loop
                      onCanPlay={() => handleVideoLoaded(index)}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-[32px] py-2">{item.heading}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto mt-[89px]">
        <div className="flex items-end gap-x-4">
          <div className="w-[209px] h-[65px]">
            <img src={logo2} alt="" className="img" />
          </div>
          <h1 className="text-[52px] font-normal">Smiles</h1>
        </div>
        <div className="grid grid-cols-3 gap-y-10 mt-10 ">
          {person.map((item, index) => (
            <div key={index} className="w-[365px] h-[567px] bg-[#FFF6CA]">
              <div className="w-[365px] h-[317px]">
                <img src={item.img} alt="" className="imgs" />
              </div>
              <div className="bg-[#FFF6CA] text-center">
                <h1 className="text-[32px] text-reds font-medium mt-2">
                  {item.name}
                </h1>
                <h1 className="text-[22px]  font-medium -mt-2">
                  {item.profession}
                </h1>
                <p className="text-[18px] leading-6 font-medium mt-2 px-4 text-left">
                  {item.desc} <span className="text-reds">Leoaligned.</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
      <section className="mt-[100px]  max-w-[1300px]  mx-auto">
        <div className="flex items-end justify-start w-[190px] h-[50px]">
          <img src={logo2} alt="" className="imgs" />
        </div>

        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-x-20 items-center justify-between">
            {/* Form Section */}
            <div className="w-2/3  space-y-2">
              <p className="mt-3 text-[20px] px-2 leading-[26px]">
                Enhance your smile and confidence with state of art treatment
                protocols and world-class aligners. Give yourself the best gift
                possible….your smile….. get LEOALIGNED.
              </p>

              <div className="grid pt-8 grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Location</label>
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">
                  What Are You Looking For?
                </label>
                <input
                  placeholder="Description"
                  className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="pt-7 flex items-center gap-x-6">
                <button className="button   hover:bg-red-600">Book Scan</button>
                <div className="flex items-center gap-x-2">
                  {" "}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <PiPhoneCallFill className="text-reds text-xl" />
                  </div>
                  <p className="">8951183999</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 mt-10 md:mt-0">
              <div className="h-[469px] w-[464px]">
                <img
                  src={contact}
                  alt="Dentist"
                  className="rounded-lg shadow-lg imgs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
