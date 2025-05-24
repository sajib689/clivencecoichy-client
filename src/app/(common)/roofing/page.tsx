import TestimonialSection from "@/components/pages/home/TestimonialSection";
import BeforeAfterSection from "@/components/pages/roofing/BeforeAfterSection";
import CertificationAndAwardSection from "@/components/pages/roofing/CertificationAndAwardSection";
import DifferenceSection from "@/components/pages/roofing/DifferenceSection";
import OurBrandSection from "@/components/pages/roofing/OurBrandSection";
import ServiceBanner from "@/components/pages/roofing/RoofingBanner";
import RoofingServiceSection from "@/components/pages/roofing/RoofingServiceSection";
import React from "react";

const RoofingPage = () => {
  return (
    <div>
      <ServiceBanner />
      <CertificationAndAwardSection />
      <DifferenceSection />
      <BeforeAfterSection />
      <TestimonialSection />
      <RoofingServiceSection />
      <OurBrandSection />
    </div>
  );
};

export default RoofingPage;
