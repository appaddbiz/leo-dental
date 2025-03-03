import { useState } from "react";
import logo from "../assets/home/logo.png";

const ContactSection = ({ image }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, phone, email, location, description } = formData;
    const message = `Hello, I would like to get in touch.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Location:* ${location}%0A*Looking For:* ${description}`;

    // Replace with your WhatsApp number (with country code, but without +)
    const whatsappNumber = "919347108123"; // Change this to your number

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="lg:mt-[100px] mt-10 max-w-[1300px] lg:mx-auto">
      <div className="lg:ml-0 ml-5 lg:w-[313px] w-[222px] h-[69px] lg:h-[98px]">
        <img src={logo} alt="Logo" className="imgs" />
      </div>
      <div className="mx-auto px-5">
        <div className="flex flex-col md:flex-row lg:gap-x-20 items-center justify-between">
          {/* Form Section */}
          <div className="lg:w-2/3 w-full space-y-4">
            <h2 className="lg:text-[52px] text-[30px] text-red-500">
              Get In Touch
            </h2>
            <div className="grid pt-4 lg:pt-8 grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleChange}
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
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-red-400 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-7">
              <button
                onClick={handleSubmit}
                className="button bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Submit
              </button>
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
