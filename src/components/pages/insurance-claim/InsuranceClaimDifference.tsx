import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/aboutLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const InsuranceClaimDifference = () => {
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
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At ARC, we understand that navigating an insurance claim after a
            storm can be overwhelming. That’s why we don’t just inspect your
            roof—we walk you through the entire process with clarity and
            confidence. Our trained Project Advisors know exactly what insurance
            adjusters look for and how to document damage properly, giving your
            claim the best chance of approval. With years of experience as
            licensed public adjusters, we bring a deeper understanding of policy
            language, damage assessment, and claim negotiation—helping
            homeowners achieve better outcomes. From the first inspection to the
            final shingle, ARC is your trusted advocate every step of the way.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Public Adjuster Expertise
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We speak the language of insurance to help maximize your claim
                outcome.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Full-Service Guidance
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
                  Professional Adjuster Support
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We meet with your adjuster to ensure all storm damage is
                properly documented.
              </p>
            </div>
            {/* 4  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Built on Trust
                </h3>
              </div>
              <p className="ml-7 mt-2">
                Honest inspections, clear communication, and a process that puts
                homeowners first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceClaimDifference;
