import TestimonialSection from "@/components/pages/home/TestimonialSection";
import BeforeAfterSection from "@/components/pages/roofing/BeforeAfterSection";
import CertificationAndAwardSection from "@/components/pages/roofing/CertificationAndAwardSection";
import DifferenceSection from "@/components/pages/roofing/DifferenceSection";
import ServiceBanner from "@/components/pages/roofing/RoofingBanner";
import React from "react";

const RoofingPage = () => {
  return (
    <div>
      <ServiceBanner />
      <CertificationAndAwardSection />
      <DifferenceSection />
      <BeforeAfterSection />
      <TestimonialSection />
    </div>
  );
};

export default RoofingPage;
