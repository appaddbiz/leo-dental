import ContactSection from "../../components/ContactSection";
import contact from "../../assets/testimonials/contact2.png";
import banner from "../../assets/testimonials/banner2.png";
const Contact = () => {
  return (
    <div className="pt-20">
      <div
        className="relative lg:h-[481px] h-[481px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center lg:mx-12 px-4 text-white flex-col">
          <div className="lg:text-[50px] text-[35px] max-w-[650px] mx-auto text-center">
            <p className=" text-white text-[24px] underline font-normal">
              Contact Us
            </p>
            Ready to Smile Brighter?
            <span className="font-semibold"> Contact Us!</span>
          </div>
        </div>
      </div>

      <ContactSection image={contact} />
    </div>
  );
};

export default Contact;
