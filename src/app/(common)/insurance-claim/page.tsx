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
    </div>
  );
};

export default InsuranceCliamPage;
