import bannerimg from "../../assets/bannerimg.png";
import logo1 from "../../assets/align/logo1.png";

const Banner = () => {
  return (
    <section className="bg-yellows h-auto lg:h-[481px] py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center  lg:px-0">
        <div className="text-center lg:text-left">
          <div className="w-[200px] h-[60px] lg:w-[371px] lg:h-[100px] mx-auto lg:mx-0">
            <img src={logo1} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="text-[32px] lg:text-[48px] mt-5">
            Entrust Your Smile <br /> To The
            <span className="text-reds font-semibold"> Professionals!</span>
          </div>
          <form className="mt-[20px] lg:mt-[32px] ">
            <div className="mb-4 flex items-center justify-center lg:justify-start rounded-2xl">
              <div className="bg-white text-xl font-normal py-2 px-4">+91</div>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-[200px] lg:w-[250px] bg-yellow-200 px-1 py-2 text-xl focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="button mt-5 w-full lg:w-auto lg:mx-0 text-white bg-blue-600 py-2 px-6 rounded-lg"
            >
              Book an Appointment
            </button>
          </form>
        </div>
        <div className="w-full h-[300px] lg:w-[563px] lg:h-[481px] mt-6 lg:mt-0">
          <img src={bannerimg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
