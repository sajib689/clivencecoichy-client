import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const WhyUsList = [
  {
    title: "Guaranteed Satisfaction",
    description:
      "All our gutter cleaning services come with a 3-6 month guarantee, ensuring long-lasting results. Our repairs boast industry-leading warranties, ranging from 2-8 years, depending on the specific work performed.",
  },
  {
    title: "Award-Winning Expertise",
    description:
      "We are a Which? Trusted Trader award-winning company, recognized for our exceptional customer service and quality workmanship.",
  },
  {
    title: "Safety First",
    description:
      "Safety is paramount. Our team is fully qualified and insured, and we utilize the latest equipment to minimize risks and maximize efficiency.",
  },
  {
    title: "Thorough Commercial Gutter Cleaning",
    description:
      "We remove all debris, leaves, and blockages, ensuring proper water flow.",
  },
  {
    title: "Expert Gutter Repairs",
    description:
      "Our technicians can address any gutter issues, from minor leaks to complete replacements.",
  },
  {
    title: "Detailed Reports",
    description:
      "Receive digital photos of all work completed, along with a detailed report for your records.",
  },
  {
    title: "Flexible Service Options",
    description:
      "Choose from one-off cleans or schedule regular maintenance plans for year-round protection.",
  },
  {
    title: "Risk Assessments",
    description:
      "We conduct thorough risk assessments before commencing any work, ensuring the safety of both our team and your property.",
  },
  {
    title: "Competitive Quotes",
    description:
      "We prioritize providing excellent service at affordable prices. Request a free, no-obligation quote today!",
  },
];

const WhyChooseLondonGutter = () => {
  return (
    <div className="bg-[#F1F4F6] py-10 md:py-20 mb-10 md:mb-20">
      <div className="container">
        <TitleAndDescription
          smallTitle="Why Us"
          smallTitleClassName="mb-1"
          mainTitle="Why Choose London Gutter Cleaning for Your Commercial Needs?"
          mainTitleClassName="md:max-w-[1220px]"
        />

        <div className="pt-5 pb-8 flex flex-col gap-7">
          {WhyUsList?.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
             <div>
             <IoIosCheckmarkCircleOutline
                size={25}
                className="text-green-primary"
              />
             </div>
             <div>
             <p className="text-blue-primary font-bold text-xl mb-2">{item?.title}</p>
             <p className="text-gray-light font-medium text-base">{item?.description}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseLondonGutter;
