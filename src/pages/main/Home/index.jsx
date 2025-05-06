import Banner from "@/components/main/home/banner";
import BlogCarousel from "@/components/main/home/blog";

import FAQSection from "@/components/main/home/faq";
import HowItWork from "@/components/main/home/howitwork";
import Platform from "@/components/main/home/plateform";
import PricingTabs from "@/components/main/home/price";
import Testimonials from "@/components/main/home/Testimonial";
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
        <Testimonials />
        <Platform />
        <FAQSection />
        <BlogCarousel />
      </div>
    </>
  );
};

export default Home;
