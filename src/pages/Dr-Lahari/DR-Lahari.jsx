import Banner from "../../components/banner/Banner";
import DRLahari from "../../components/dr-lahari/DR-LAHARI";
import banner from "../../assets/about/banner.jpeg";

const DRLahariPage = () => {
  return (
    <div className="lg:pt-[74px]">
      <Banner img={banner}>
      Crafting Confident Smiles with Expertise and 
        <span className="font-semibold"> Compassion.</span>
      </Banner>
      <DRLahari />
    </div>
  );
};

export default DRLahariPage;
