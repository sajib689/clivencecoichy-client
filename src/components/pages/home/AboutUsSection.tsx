import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/aboutLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const AboutUsSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left */}
        <div className="flex flex-col items-end">
          <Image src={logo} alt="logo" />
          <div className="bg-white  shadow-xl rounded-xl inline-block p-5 text-xl font-bold text-title">
            20+ years of <br /> experience
          </div>
        </div>
        {/* right  */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">About Us</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At Allied Restoration Contractors (ARC), we pride ourselves on
            helping homeowners recover from storms or the wear and tear of time
            with expert roofing, siding, gutter, and window solutions. Guided by
            our values—Family, Fairness, Fortune, and Follow-through—we deliver
            honest inspections, clear communication, stress free consultations,
            and high-quality craftsmanship that protect what matters most.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3>Up to 50-Year Workmanship Warranties on Installations</h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3>Limited Lifetime Manufacturer Warranties</h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3>Licensed, Bonded, and Insured</h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3>Certified and Trusted</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
