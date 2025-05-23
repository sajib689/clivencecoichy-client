import TestimonialCard from "@/components/cards/TestimonialCard";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <div className="py-20 max-w-[100vw]">
      <div className="space-y-12">
        <Marquee className="">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Marquee>
        <Marquee direction={"right"}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialSection;
