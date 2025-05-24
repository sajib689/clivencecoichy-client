import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/aboutLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const DifferenceSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* left */}
        <div className="flex items-center">
          <Image src={logo} alt="logo" />
        </div>
        {/* right  */}
        <div>
          {/* <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">About Us</h2>
          </div> */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-title mt-5">
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At ARC, roofing isn’t just another job—it’s the foundation of our
            commitment to protecting homes and earning homeowner trust. We
            approach every roof with the same care and precision we’d expect on
            our own homes. <br /> From the first inspection to the final nail,
            we deliver a roofing experience rooted in honesty, quality, and
            clear communication.
          </p>

          <div className="mt-8 space-y-3">
            {/* 1  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Insurance Expertise
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We use top-rated shingles and roofing systems built to last,
                installed by trained crews who take pride in their work.
              </p>
            </div>
            {/* 1  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Thorough Cleanup & Respect
                </h3>
              </div>
              <p className="ml-7 mt-2">
                We treat your property with care—from start to finish—using
                protective tarping, magnetic nail sweeps, and a spotless final
                walkthrough.
              </p>
            </div>
            {/* 1  */}
            <div>
              <div className="flex items-center gap-2">
                <Image src={checkCircle} alt="check icon" />
                <h3 className="text-xl text-title font-semibold">
                  Real People. Real Support
                </h3>
              </div>
              <p className="ml-7 mt-2">
                You’ll have one dedicated point of contact who updates you every
                step of the way. No runaround, no surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;
