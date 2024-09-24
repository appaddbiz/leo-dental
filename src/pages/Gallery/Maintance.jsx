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

  return (
    <section className="max-w-[1300px] mx-auto py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-x-4">
        <h1 className="text-[32px] lg:text-[52px] font-normal text-center lg:text-left">
          Craft Your Smile With
        </h1>
        <div className="w-[150px] lg:w-[209px] h-[40px] lg:h-[59px]">
          <img
            src={logo2}
            alt=""
            className="img w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-5 lg:mt-8">
        <div className="grid lg:grid-cols-3 place-items-center gap-y-10 max-w-6xl mx-auto">
          {carsoul.map((item, index) => (
            <div key={index} className="pr- text-center">
              <div className="shadow-xl border-2">
                <div className="w-auto h-[316px] relative">
                  <video
                    className="w-full h-full object-cover"
                    src={item.video}
                    type="video/mp4"
                    loop
                    muted
                    autoPlay
                    playsInline 
                  ></video>
                </div>
                <p className="text-[32px] py-2">{item.heading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Maintance;
