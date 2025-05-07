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
        <div id="features">
          {" "}
          {/* Section for Features */}
          <HowItWork />
        </div>
        <div id="unlimitedmodel">
          {" "}
          {/* Section for Ultimate Model */}
          <UltimateModel />
        </div>
        <div id="worksmarter">
          {" "}
          {/* Section for Work Smarter */}
          <WorkSmater />
        </div>
        <div id="pricing">
          {" "}
          {/* Section for Pricing */}
          <PricingTabs />
        </div>
        <div id="testimonials">
          {" "}
          {/* Section for Testimonials */}
          <Testimonials />
        </div>
        <div id="platform">
          {" "}
          {/* Section for Platform */}
          <Platform />
        </div>
        <div id="faq">
          {" "}
          {/* Section for FAQ */}
          <FAQSection />
        </div>
        <div id="blogs">
          {" "}
          {/* Section for Blog */}
          <BlogCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
