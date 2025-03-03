import { useState } from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import logo2 from "../../assets/align/logo2.png";
import contact from "../../assets/align/contact.png";

const Contact = () => {
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

    // Replace with your WhatsApp number (without +)
    const whatsappNumber = "919347108123"; // Change this to your number

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <section className="mt-[100px] max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="flex items-end justify-start w-[190px] h-[50px]">
          <img src={logo2} alt="Logo" className="imgs" />
        </div>

        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-x-10 md:gap-x-20 items-center justify-between">
            <div className="w-full md:w-2/3 space-y-4">
              <p className="mt-3 text-[18px] md:text-[20px] px-2 leading-[26px]">
                Enhance your smile and confidence with state-of-the-art
                treatment protocols and world-class aligners. Give yourself the
                best gift possible… your smile… get LEOALIGNED.
              </p>

              <div className="grid pt-6 grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="pt-6 flex items-center gap-x-6">
                <button
                  onClick={handleSubmit}
                  className="button bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
                >
                  Submit via WhatsApp
                </button>
                <div className="flex items-center gap-x-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <PiPhoneCallFill className="text-reds text-xl" />
                  </div>
                  <p>8951183999</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mt-10 md:mt-0">
              <div className="h-[350px] md:h-[469px] w-full md:w-[464px]">
                <img
                  src={contact}
                  alt="Dentist"
                  className="rounded-lg shadow-lg imgs object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
