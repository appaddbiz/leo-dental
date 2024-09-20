import img from "../../assets/align/img1.png";

const WhySection = () => {
  const records = [
    { total: "16000+", desc: "Patients Treated" },
    { total: "250+", desc: "Team of Dentists" },
    { total: "700+", desc: "Our Providers" },
  ];
  return (
    <div>
      <section className="h-auto lg:h-[350px] w-full pb-10">
        <div className="max-w-[1400px] mx-auto  px-4 lg:px-0">
          <h1 className="text-[32px] lg:text-[52px] text-reds text-center pt-[40px] lg:pt-[53px] font-medium">
            Maintenance of Life Time Dental Records
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-x-20 text-center mt-10 lg:mt-14">
            {records.map((item, index) => (
              <div key={index}>
                <h1 className="text-[36px] lg:text-[45px]">{item.total}</h1>
                <p className="text-[24px] lg:text-[30px] text-reds">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-auto lg:h-[344px] py-20  bg-reds flex flex-col items-center justify-center relative lg:py-0">
        <div className="w-full max-w-[400px] lg:max-w-[848px] h-auto lg:h-[174px]">
          <img
            src={img}
            alt="img"
            className="imgs w-full h-full object-contain"
          />
        </div>
        <h1 className="text-[28px] lg:text-[52px] text-white text-center pt-6 lg:pt-[53px] absolute font-medium">
          Your Smile Is Precious. <br /> Let Only{" "}
          <span className="text-yellows">Professionals</span> Take Care Of It!
        </h1>
      </section>
    </div>
  );
};

export default WhySection;
