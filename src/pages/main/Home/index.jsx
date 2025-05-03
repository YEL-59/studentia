import Banner from "@/components/main/home/banner";
import HowItWork from "@/components/main/home/howitwork";
import PricingTabs from "@/components/main/home/price";
import UltimateModel from "@/components/main/home/unlimitedmodel";
import WorkSmater from "@/components/main/home/worksmater";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <HowItWork />
        <UltimateModel />
        <WorkSmater />
        <PricingTabs />
      </div>
    </>
  );
};

export default Home;
