import FreeEstimateSection from "@/components/pages/home/FreeEstimateSection";
import FourStepSection from "@/components/pages/insurance-claim/FourStepSection";
import InsuranceClaimBanner from "@/components/pages/insurance-claim/InsuranceClaimBanner";
import InsuranceClaimDifference from "@/components/pages/insurance-claim/InsuranceClaimDifference";
import InsuranceVideoSection from "@/components/pages/insurance-claim/InsuranceVideoSection";
import React from "react";

const InsuranceCliamPage = () => {
  return (
    <div>
      <InsuranceClaimBanner />
      <InsuranceClaimDifference />
      <InsuranceVideoSection />
      <FourStepSection />
      <FreeEstimateSection />
    </div>
  );
};

export default InsuranceCliamPage;
