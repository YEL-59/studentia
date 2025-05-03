import Banner from "@/components/main/home/banner";
import FAQSection from "@/components/main/home/faq";
import HowItWork from "@/components/main/home/howitwork";
import Platform from "@/components/main/home/plateform";
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
        <Platform />
        <FAQSection />
      </div>
    </>
  );
};

export default Home;
