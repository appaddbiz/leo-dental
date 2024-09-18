import bannerimg from "../../assets/bannerimg.png";
import logo1 from "../../assets/align/logo1.png";

const Banner = () => {
  return (
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
              <div className="bg-white text-xl font-normal py-2 px-4">+91</div>
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
  );
};

export default Banner;
