import TestimonialSection from "@/components/pages/home/TestimonialSection";
import CardSection from "@/components/pages/Services/CardSection";
import Services from "@/components/pages/Services/Services";
import ServicesBanner from "@/components/pages/Services/ServicesBanner";
import React from "react";

const page = () => {
  return (
    <section>
      <ServicesBanner />
      <CardSection />
      <Services />
      <TestimonialSection />
    </section>
  );
};

export default page;
