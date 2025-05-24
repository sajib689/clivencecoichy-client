import TestimonialSection from "@/components/pages/home/TestimonialSection";
import WindowBanner from "@/components/pages/window/WindowBanner";
import WindowCtaSection from "@/components/pages/window/WindowCtaSection";
import WindowsDifferenceSection from "@/components/pages/window/WindowDifferenceSection";
import React from "react";

const WindowsPage = () => {
  return (
    <div>
      <WindowBanner />
      <WindowsDifferenceSection />
      <TestimonialSection />
      <WindowCtaSection />
    </div>
  );
};

export default WindowsPage;
