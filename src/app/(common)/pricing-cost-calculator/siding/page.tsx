import FreeEstimateSection from "@/components/pages/home/FreeEstimateSection";
import SidingCalculatorBanner from "@/components/pages/pricing-cost-calculator/siding/SidingCalculatorBanner";
import SidingCalculatorSection from "@/components/pages/pricing-cost-calculator/siding/SidingCalculatorSection";
import React from "react";

const PricingCalculatorSidingPage = () => {
  return (
    <div>
      <SidingCalculatorBanner />
      <SidingCalculatorSection />
      <FreeEstimateSection />
    </div>
  );
};

export default PricingCalculatorSidingPage;
