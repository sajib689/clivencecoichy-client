/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import bgImage from "@/assets/service/service1.png";

const ServiceSectionCard = ({ data }: any) => {
  return (
    <div className="relative max-w-[90vw] sm:max-w-3xl bg-black w-full h-full min-h-[300px] hover:shadow-xl duration-300 rounded-xl overflow-hidden">
      <Image
        className="absolute z-0 w-full h-full object-cover"
        src={data?.image || bgImage}
        alt="service Image"
      />
      <div className="absolute w-full h-full flex flex-col justify-end z-10 bg-black/20 p-5">
        <h2 className="text-2xl font-semibold text-white">{data?.title}</h2>
        <p className="mt-3 text-white text-sm">{data?.description}</p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
