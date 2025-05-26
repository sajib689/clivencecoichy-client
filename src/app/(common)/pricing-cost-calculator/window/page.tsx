import FreeEstimateSection from "@/components/pages/home/FreeEstimateSection";
import WindowCalculatorBanner from "@/components/pages/pricing-cost-calculator/window/WindowCalculatorBanner";
import WindowCalculatorSection from "@/components/pages/pricing-cost-calculator/window/WindowCalcutorSection";
import React from "react";

const WindowCalculatorPage = () => {
  return (
    <div>
      <WindowCalculatorBanner />
      <WindowCalculatorSection />
      <FreeEstimateSection />
    </div>
  );
};

export default WindowCalculatorPage;
