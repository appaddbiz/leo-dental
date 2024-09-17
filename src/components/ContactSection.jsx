import logo from "../assets/home/logo.png";
const ContactSection = ({ image }) => {
  return (
    <section className="mt-[100px] max-w-[1300px]  lg:mx-auto">
      <div className="lg:ml-0  ml-5 lg:w-[313px] w-[222px] h-[69px] lg:h-[98px]">
        <img src={logo} alt="" className="imgs" />
      </div>
      <div className="mx-auto px-5">
        <div className="flex flex-col md:flex-row lg:gap-x-20 items-center justify-between">
          {/* Form Section */}
          <div className="lg:w-2/3 w-full  space-y-4">
            <h2 className="text-4xl font-bold text-red-500">Get In Touch</h2>
            <div className="grid pt-4 lg:pt-8 grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Description Input */}
            <div>
              <label className="block text-gray-700">
                What Are You Looking For?
              </label>
              <input
                placeholder="Description"
                className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-7">
              <button className="button   hover:bg-red-600">Submit</button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 mt-10 md:mt-0">
            <div className="lg:h-[469px] lg:w-[464px]">
              <img
                src={image}
                alt="Dentist"
                className="rounded-lg shadow-lg imgs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
