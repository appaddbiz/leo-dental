import ContactSection from "../../components/ContactSection";
import contact from "../../assets/testimonials/contact2.png";
import banner from "../../assets/testimonials/banner2.png";
const Contact = () => {
  return (
    <div className="pt-20">
      <section className="relative w-full h-[481px]">
        <img
          src={banner}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h1 className="absolute  text-center lg:inset-44   max-w-[900px] mx-auto text-white text-[50px]">
          <p className=" text-white text-[24px] underline font-normal">
            Contact Us
          </p>
          Ready to Smile Brighter?
          <span className="font-semibold"> Contact Us!</span>
        </h1>
      </section>
      <ContactSection image={contact} />
    </div>
  );
};

export default Contact;
