import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo2 from "../../assets/align/logo2.png";

const Maintance = () => {
  const carsoul = [
    { video: "/crook.mp4", heading: "Crooked Teeth" },
    { video: "/cross.mp4", heading: "Cross Bite" },
    { video: "/deep.mp4", heading: "Deep Bite" },
    { video: "/forward.mp4", heading: "Forwardly Placed" },
    { video: "/gap.mp4", heading: "TeethGap" },
    { video: "/open.mp4", heading: "OpenBite" },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,
  };
  return (
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
                  <video
                    autoPlay
                    className="w-full h-full object-cover"
                    src={item.video}
                    type="video/mp4"
                    loop
                    muted
                    preload="auto"
                  ></video>
                </div>
                <p className="text-[32px] py-2">{item.heading}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Maintance;
