import Image from "next/image";
import React from "react";
import logo1 from "@/assets/roofing/logo1.png";
import logo2 from "@/assets/roofing/logo2.png";
import logo3 from "@/assets/roofing/logo3.png";
import logo4 from "@/assets/roofing/logo4.png";
import logo5 from "@/assets/roofing/logo5.png";
import logo6 from "@/assets/roofing/logo6.png";

const CertificationAndAwardSection = () => {
  return (
    <div className="py-20 !bg-[#FAFAFB]">
      <div className="container">
        <h3 className="text-xl md:text-2xl xl:text-3xl text-title font-semibold text-center">
          Our Certification & Awards
        </h3>
        <div className="mt-20 flex items-center justify-between gap-8 flex-wrap">
          <Image
            src={logo1}
            width={172}
            height={76}
            className="object-cover h-full w-[172px]"
            alt="logo"
          />
          <Image
            src={logo2}
            width={107}
            height={75}
            className="object-cover h-full w-[107px]"
            alt="logo"
          />
          <Image
            src={logo3}
            width={172}
            height={76}
            className="object-cover h-full w-[126px]"
            alt="logo"
          />
          <Image
            src={logo4}
            width={172}
            height={76}
            className="object-cover h-full w-[190px]"
            alt="logo"
          />
          <Image
            src={logo5}
            width={172}
            height={76}
            className="object-cover h-full w-[86px]"
            alt="logo"
          />
          <Image
            src={logo6}
            width={172}
            height={76}
            className="object-cover h-full w-[81px]"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationAndAwardSection;
