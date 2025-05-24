import Image from "next/image";
import React from "react";
import logo from "@/assets/logo/aboutLogo.png";
import checkCircle from "@/assets/icon/check_circle.svg";

const GutterDifferenceSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left */}
        <div className="flex flex-col items-end">
          <Image src={logo} alt="logo" />
          {/* <div className="bg-white  shadow-xl rounded-xl inline-block p-5 text-xl font-bold text-title">
            20+ years of <br /> experience
          </div> */}
        </div>
        {/* right  */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">Gutters</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At ARC, we don’t just install gutters — we protect your entire home
            from the top down. Our seamless gutter systems are custom-fit for
            performance and durability, ensuring proper drainage that prevents
            water damage to your roof, siding, and foundation. We combine expert
            craftsmanship with clean, professional installation so your gutters
            not only work flawlessly but also enhance your home’s curb appeal.
            With ARC, it’s done right the first time — no leaks, no shortcuts,
            no worries..
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3 className="text-title font-semibold text-xl">
                High-grade rust-proof aluminum
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3 className="text-title font-semibold text-xl">
                Seamless construction
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3 className="text-title font-semibold text-xl">
                Dent resistant
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={checkCircle} alt="check icon" />
              <h3 className="text-title font-semibold text-xl">
                Will not rust or corrode
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GutterDifferenceSection;
