import img from "../../assets/align/img1.png";

const WhySection = () => {
  const records = [
    { total: "16000+", desc: "Patients Treated" },
    { total: "250+", desc: "Team of Dentists" },
    { total: "700+", desc: "Our Providers" },
  ];
  return (
    <div>
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
    </div>
  );
};

export default WhySection;
