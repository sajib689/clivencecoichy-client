import CareerBanner from "@/components/career/CareerBanner";
import CareerCard from "@/components/career/CareerCard";
import TestimonialSection from "@/components/pages/home/TestimonialSection";
import React from "react";

const page = () => {
  return (
    <section>
      <CareerBanner title="<span className=` leading-tight`>Join Our Family of <br/>  Exterior Experts</span>" />
      <CareerCard />
      <TestimonialSection />
    </section>
  );
};

export default page;
