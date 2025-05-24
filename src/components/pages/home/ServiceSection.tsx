import ServiceSectionCard from "@/components/cards/ServiceSectionCard";
import React from "react";
import bgImage1 from "@/assets/service/service1.png";
import bgImage2 from "@/assets/service/service2.png";
import bgImage3 from "@/assets/service/service3.png";
import bgImage4 from "@/assets/service/service4.png";
import bgImage5 from "@/assets/service/service5.png";

const ServiceSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        {/* header */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">Our Service</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            Protecting Our Communities, <br /> One Roof At a Time
          </h3>
          <p className="text-md mt-5">
            From inspections to full roof replacements, we deliver quality
            workmanship backed by years of experience.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-8">
          {serviceData?.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "col-span-12 md:col-span-6 lg:col-span-5"
                  : index === 1
                  ? "col-span-12 md:col-span-6 lg:col-span-7"
                  : "col-span-12 md:col-span-6 lg:col-span-4"
              }`}
            >
              <ServiceSectionCard data={service}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

const serviceData = [
  {
    title: "Roofing",
    description:
      "Protect your home from the top down with high-quality roof replacements and repairs built to last. Whether from storm damage or aging shingles, we deliver expert craftsmanship and peace of mind.",
    image: bgImage1,
  },
  {
    title: "Storm Damage Restoration",
    description:
      "When hail or wind strikes, ARC is your trusted partner for full-service restoration. We guide you through the insurance claim process and restore your exterior with care and precision.",
    image: bgImage2,
  },
  {
    title: "Siding",
    description:
      "Boost curb appeal and improve energy efficiency with durable, weather-resistant siding solutions. We install high-performance materials that protect and beautify your home.",
    image: bgImage3,
  },
  {
    title: "Gutters",
    description:
      "Keep water flowing where it should with seamless, properly pitched gutters and downspouts. We prevent water damage before it starts with systems built to handle Midwest storms.",
    image: bgImage4,
  },
  {
    title: "Windows",
    description:
      "Upgrade your home with energy-efficient windows that look great and lower utility bills. We replace old, drafty windows with options that are both stylish and secure.",
    image: bgImage5,
  },
];
