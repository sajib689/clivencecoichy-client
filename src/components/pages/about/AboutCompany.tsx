import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/redTextLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const AboutCompany = () => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left */}
        <div className="flex flex-col items-center justify-center">
          <Image
                src={logo}
                alt="logo"
                width={500}
                height={500}
                className="max-w-[490px] max-h-[370px]"

          />
          {/* <div className="bg-white  shadow-xl rounded-xl inline-block p-5 text-xl font-bold text-title">
            20+ years of <br /> experience
          </div> */}
        </div>
        {/* right  */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">About Us</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            About the Company
          </h3>
          <p className="text-md mt-5">
            At Allied Restoration Contractors (ARC), we specialize in exterior home restoration that protects what matters most. From roofing and siding to gutters and windows, we help homeowners recover from storm damage or everyday wear with expert craftsmanship and honest service. Our team is built on the values of Family, Fairness, Fortune, and Follow-through—guiding every inspection, conversation, and install we complete. When you choose ARC, you’re not just getting a contractor—you’re getting a trusted advisor who treats your home like their own.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Image src={checkCircle} alt="check icon" />
              <div>
                <h3 className="text-title font-semibold text-lg">
                  Full-Service Exterior Experts
                </h3>
                <p className="text-sm text-gray-600">
                  Roofing, siding, gutters, and windows done right, all under one roof.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={checkCircle} alt="check icon" />
              <div>
                <h3 className="text-title font-semibold text-lg">
                  Insurance Restoration Specialists
                </h3>
                <p className="text-sm text-gray-600">
                  We guide you through every step of the claim process with honesty and care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={checkCircle} alt="check icon" />
              <div>
                <h3 className="text-title font-semibold text-lg">
                  Built on Values
                </h3>
                <p className="text-sm text-gray-600">
                  Family, Fairness, Fortune, and Follow-through aren’t just words—they’re how we do business.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image src={checkCircle} alt="check icon" />
              <div>
                <h3 className="text-title font-semibold text-lg">
                  Trusted Craftsmanship
                </h3>
                <p className="text-sm text-gray-600">
                  High-quality materials, clean installations, and results that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
