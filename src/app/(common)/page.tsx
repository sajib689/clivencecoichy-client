import AboutUsSection from "@/components/pages/home/AboutUsSection";
import HeroSection from "@/components/pages/home/HeroSection";
import ServiceSection from "@/components/pages/home/ServiceSection";
import React from "react";

const HompPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection/>
    </div>
  );
};

export default HompPage;
