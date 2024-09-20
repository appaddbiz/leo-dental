import per1 from "../../assets/align/per1.png";
import per2 from "../../assets/align/per2.png";
import per3 from "../../assets/align/per3.png";
import per4 from "../../assets/align/per4.png";
import per5 from "../../assets/align/per5.png";
import per6 from "../../assets/align/per6.png";
import logo2 from "../../assets/align/logo2.png";

const Smiles = () => {
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
  return (
    <div>
      <section className="max-w-[1300px] mx-auto mt-[40px] lg:mt-[89px] px-4 lg:px-0">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="w-[150px] lg:w-[209px] h-[45px] lg:h-[65px]">
            <img
              src={logo2}
              alt=""
              className="img w-full h-full object-contain"
            />
          </div>
          <h1 className="text-[32px] lg:text-[52px] font-normal text-center lg:text-left">
            Smiles
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-10 gap-x-5 lg:gap-x-8 mt-10">
          {person.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-[365px] h-auto bg-[#FFF6CA] shadow-lg"
            >
              <div className="w-full h-[250px] sm:h-[280px] lg:h-[317px]">
                <img
                  src={item.img}
                  alt=""
                  className="imgs w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#FFF6CA] text-center p-4">
                <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] text-reds font-medium mt-2">
                  {item.name}
                </h1>
                <h1 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium -mt-1 lg:-mt-2">
                  {item.profession}
                </h1>
                <p className="text-[16px] sm:text-[18px] leading-6 font-medium mt-2 text-left">
                  {item.desc} <span className="text-reds">Leoaligned.</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Smiles;
