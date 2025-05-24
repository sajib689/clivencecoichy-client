import ServiceSectionCard from "@/components/cards/ServiceSectionCard";
import React from "react";
import bgImage1 from "@/assets/roofing/roofingService1.png";
import bgImage2 from "@/assets/roofing/roofingSErvice2.png";
import bgImage3 from "@/assets/roofing/roofingService3.png";

const RoofingServiceSection = () => {
  return (
    <div className="py-20 max-w-[100vw]">
      <div className="container">
        {/* header */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">Roofing Service</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-wrap max-w-[90vw] text-title mt-5">
            Quality Roofing for Protection <br /> and Peace of Mind
          </h3>
          <p className="text-md mt-5 max-w-[90vw] sm:max-w-lg">
            From inspections to full roof replacements, we deliver quality
            workmanship backed by years of experience.
          </p>
        </div>
        <div className="mt-10 lg:mt-20 grid lg:grid-rows-2 grid-cols-12 gap-8">
          {serviceData?.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "col-span-12 md:col-span-6 lg:col-span-6 lg:row-span-2"
                  : index === 1
                  ? "col-span-12 md:col-span-6 lg:col-span-6"
                  : "col-span-12 md:col-span-6 lg:col-span-6"
              } h-full`}
            >
              <ServiceSectionCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoofingServiceSection;

const serviceData = [
  {
    title: "Roof Replacement",
    description:
      "Our crew will replace your damaged or aging roof with a high-quality system that’s built to protect your home for years to come. We manage the entire process—and when we leave, it’ll be like we were never there (except for the brand-new roof!).",
    image: bgImage1,
  },
  {
    title: "Roof Repair",
    description:
      "You may not need to replace your entire roof if only a section is damaged. We specialize in localized repairs on all roofing materials to fix issues like roof leaks quickly and affordably.",
    image: bgImage2,
  },
  {
    title: "Commercial Roofing ",
    description:
      "For business owners, a properly installed commercial roof is crucial. Our commercial roofing services utilize durable materials installed by highly trained roofers to withstand the elements. We stand behind our commercial work with strong warranties so your building stays protected.",
    image: bgImage3,
  },
];
