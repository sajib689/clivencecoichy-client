import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/aboutLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const CommercialContent = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left */}
        <div className="flex flex-col items-end">
          <Image src={logo} alt="logo" />
        </div>
        {/* right  */}
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            The ARC Difference: Commercial Restoration Done Right
          </h3>
          <p className="text-md mt-5">
            At ARC, we know that time, safety, and professionalism are
            everything when it comes to commercial projects. That’s why we bring
            more than just skilled crews—we bring a streamlined process, expert
            coordination, and clear communication every step of the way. Whether
            it&apos;s a multi-family complex, retail building, or industrial
            site, we treat your property like it&apos;s our own—minimizing
            disruption, maximizing efficiency, and delivering results that last.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Experienced in Large-Scale Projectse
                </h3>
              </div>
              <p className="ml-7 mt-2">
                From apartment buildings to shopping centers, we’re equipped to
                handle complex jobs with confidence.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Storm Damage & Insurance Experts
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We know how to work with insurance carriers and advocate for
                full, fair coverage.
              </p>
            </div>
            {/* 3  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Licensed, Insured & Safety-Focused
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We follow strict protocols to protect tenants, customers, and
                your property.
              </p>
            </div>
            {/* 4  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  On-Site Oversight & Clear Communication
                </h3>
              </div>
              <p className="ml-7 mt-2">
                One point of contact, consistent updates, and no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialContent;
