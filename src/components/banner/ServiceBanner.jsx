const ServiceBanner = ({ img, text }) => {
  return (
    <div
      className="relative lg:h-[481px] h-[481px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Copper Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex items-start justify-center lg:mx-12 mx-4 text-white flex-col">
        <p className=" text-white lg:text-[24px] text-[18px] underline font-normal">
          Our Services
        </p>
        <div className="lg:text-[50px] text-[35px] font-semibold">{text}</div>
      </div>
    </div>
  );
};

export default ServiceBanner;
