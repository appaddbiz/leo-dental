import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import person1 from "../../assets/home/person1.png";

const DRLahari = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      {/* Container for Image and Details */}
      <div className=" bg-[#FFF6CA] flex flex-col lg:flex-row items-center rounded-lg lg:mt-32 mt-10 m-2">
        {/* Image Section */}
        <div className=" lg:h-full lg:w-[385px] flex items-center justify-center">
          <img
            src={person1}
            alt="Dr. Lahari ASR"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="px-6 lg:px-16 py-4 lg:py-0 flex flex-col items-start">
          <p className="text-[24px] lg:text-[32px] text-reds h-10">
            Dr. Lahari ASR
          </p>
          <p className="text-[16px] lg:text-[18px] font-[600] pb-[10px] lg:pb-[14px]">
            MDS Gold medalist
          </p>

          {/* Experience Details */}
          {[
            "Public health dentist with 15 years of experience.",
            "Ex-Alumni Sardar Patel Dental College, Lucknow",
            "Reader, Narayana Dental College.",
            "Colgate IDA Award Scholarship Awardee.",
            "Implantologist & Root Canal Specialist.",
            "Expert in Pediatric & Preventive Dental Practice.",
            "Leo Dental Proprietor.",
          ].map((item, index) => (
            <ul
              key={index}
              className="flex justify-start items-start text-[16px] lg:text-[18px]"
            >
              <li className="flex items-center justify-center gap-1 font-sans">
                <TbPointFilled className="text-reds" />
                {item}
              </li>
            </ul>
          ))}

          {/* Contact Info */}
          <div className="mt-4 flex flex-col gap-2 text-[16px] lg:text-[18px]">
            <div className="flex items-center gap-x-2">
              <IoMailOutline className="text-reds text-xl lg:text-2xl" />
              +91 93471 08123
            </div>
            <div className="flex items-center gap-x-2">
              <FiPhone className="text-reds text-xl lg:text-2xl" />
              leodentalbanglore@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRLahari;
