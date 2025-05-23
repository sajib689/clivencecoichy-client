/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const SectionHeader = ({ subTitle, description, children }: any) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[2px] bg-title"></div>
        <h2 className="text-title">{subTitle}</h2>
      </div>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-title mt-5">
        {children}
      </h3>
      <p className="text-md mt-5 max-w-3xl">{description}</p>
    </div>
  );
};

export default SectionHeader;
