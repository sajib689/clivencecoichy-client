import BlogSection from "@/components/pages/home/BlogSection";
import SidingBanner from "@/components/pages/siding/SidingBanner";
import SidingCtaSection from "@/components/pages/siding/SidingCtaSection";
import SidingDifferenceSection from "@/components/pages/siding/SidingDifferenceSection";
import React from "react";

const SidingPage = () => {
  return (
    <div>
      <SidingBanner />
      <SidingDifferenceSection />
      <SidingCtaSection />
      <BlogSection />
    </div>
  );
};

export default SidingPage;
