

import FreeEstimateSection from "@/components/pages/home/FreeEstimateSection";
import CalculatorRoofingBanner from "@/components/pages/pricing-cost-calculator/roofing/CalculatorRoofingBanner";
import RoofingCalculatorSection from "@/components/pages/pricing-cost-calculator/roofing/RoofingCalculatorSection";
import React from "react";

const CalculatorRoodingPage = () => {
  return (
    <div>
      <CalculatorRoofingBanner />
      <RoofingCalculatorSection />
      <FreeEstimateSection />
    </div>
  );
};

export default CalculatorRoodingPage;
