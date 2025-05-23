import TestimonialCard from "@/components/cards/TestimonialCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Button } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  return (
    <div className="py-20 max-w-[100vw]">
      <div className="container flex items-center gap-8 justify-between flex-wrap mb-20">
        <SectionHeader
          subTitle={"Testimonial"}
          description={
            "You want a roofing company that takes pride in providing quality products and craftsmanship to our communities."
          }
        >
          We Are A Local Roofing Contractor <br /> You Can Trust
        </SectionHeader>
        <Button
          size="large"
          className="bg-red-primary text-white hover:!text-red-primary hover:!border-red-primary"
        >
          Read All Reviews
        </Button>
      </div>
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
