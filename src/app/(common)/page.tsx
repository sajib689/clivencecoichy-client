import AboutUsSection from "@/components/pages/home/AboutUsSection";
import BlogSection from "@/components/pages/home/BlogSection";
import HeroSection from "@/components/pages/home/HeroSection";
import ServiceSection from "@/components/pages/home/ServiceSection";
import TestimonialSection from "@/components/pages/home/TestimonialSection";

const HompPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default HompPage;
