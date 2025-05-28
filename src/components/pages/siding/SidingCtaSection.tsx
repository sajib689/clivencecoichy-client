import Image from "next/image";
import React from "react";
import ctaImage from "@/assets/siding/sidingCta.png";
import { Button } from "antd";

const SidingCtaSection = () => {
  return (
    <div className="py-20">
      <div className="container relative ">
        <Image
          src={ctaImage}
          className="absolute top-0 left-0 h-full z-0 "
          alt="Roof image"
        />
        <div className="relative py-40 z-10 min-h-[300px] flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center leading-tight">
            How Much Does New <br /> Siding Cost?
          </h2>
          <Button
            size="large"
            className="mt-10 bg-red-primary border-none text-white hover:!text-red-primary text-lg"
          >
            Calculate Siding Cost
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SidingCtaSection;
