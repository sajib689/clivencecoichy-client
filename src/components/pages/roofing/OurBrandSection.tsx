import Image from "next/image";
import React from "react";
import logo1 from "@/assets/roofing/brand1.svg";
import logo2 from "@/assets/roofing/barnd2.png";
import logo3 from "@/assets/roofing/brand3.svg";
import logo4 from "@/assets/roofing/brand4.svg";
import logo5 from "@/assets/roofing/brand5.svg";
import logo6 from "@/assets/roofing/brand6.png";
import Marquee from "react-fast-marquee";

const OurBrandSection = () => {
  return (
    <div className="py-20 !bg-[#FAFAFB]">
      <div className="">
        <h3 className="text-xl md:text-2xl xl:text-3xl text-title font-semibold text-center">
          Our Brands
        </h3>
        <Marquee className="mt-20 ">
          <Image
            src={logo1}
            width={172}
            height={76}
            className="object-cover h-full w-[172px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo2}
            width={172}
            height={75}
            className="object-cover h-full w-[107px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo3}
            width={172}
            height={76}
            className="object-cover h-full w-[96px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo4}
            width={172}
            height={76}
            className="object-cover h-full w-[140px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo5}
            width={172}
            height={76}
            className="object-cover h-full w-[150px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo6}
            width={172}
            height={76}
            className="object-cover h-full w-[120px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo1}
            width={172}
            height={76}
            className="object-cover h-full w-[172px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo2}
            width={172}
            height={75}
            className="object-cover h-full w-[107px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo3}
            width={172}
            height={76}
            className="object-cover h-full w-[96px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo4}
            width={172}
            height={76}
            className="object-cover h-full w-[140px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo5}
            width={172}
            height={76}
            className="object-cover h-full w-[150px] mr-20 block"
            alt="logo"
          />
          <Image
            src={logo6}
            width={172}
            height={76}
            className="object-cover h-full w-[120px] mr-20 block"
            alt="logo"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default OurBrandSection;
