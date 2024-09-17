import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <section className="lg:mt-[100px] mt-10 mx-4  lg:flex-row flex-col flex gap-x-14 justify-between  max-w-[1400px]  lg:mx-auto pb-20">
      <div className="lg:w-2/3 order-1 mt-5 lg:mt-0 lg:order flex lg:flex-row flex-col items-center justify-center gap-12  place-content-center mx-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9189.022828720466!2d79.9810358158118!3d14.455483961054194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cc9ff03fe0f%3A0xd00f44d96bc88945!2sLeo%20Dental!5e0!3m2!1sen!2sin!4v1726130423476!5m2!1sen!2sin"
          width="350"
          height="310"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9960114899773!2d77.64916882507534!3d12.907977637401595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159bf29658e7%3A0xfc06942ee2e0c621!2sLeo%20dental%20aligners%20clinic%20in%20HSR%20Layout!5e0!3m2!1sen!2sin!4v1726130779709!5m2!1sen!2sin"
          width="350"
          height="310"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="lg:w-1/3 lg:order-2 ">
        <h1 className="lg:text-[52px] text-[30px] text-reds">Contact Us</h1>
        <div className="flex items-center gap-x-1 lg:mt-10 ">
          <FiPhone className="text-reds  text-[24px]" />
          <span className=" lg:text-[24px] text-[18px]">+91 93471 08123</span>
        </div>
        <div className="flex items-center gap-x-1 mt-4">
          <IoLocationOutline className="text-reds  text-[24px]" />
          <span className=" lg:text-[24px] text-[18px]">
            Bengaluru, Karnataka.
          </span>
        </div>
        <div className="flex items-center gap-x-1 mt-4">
          <IoLocationOutline className="text-reds text-[24px]" />
          <span className="lg:text-[24px] text-[18px]">
            Nellore, Andra Pradesh.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
