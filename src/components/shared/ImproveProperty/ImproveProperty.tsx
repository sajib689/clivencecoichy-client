import React from "react";
import ImageTitleAndDescription from "../ImageTitleAndDescription/ImageTitleAndDescription";
import propertyHuman from "@/assets/propertyHuman.png";

const ImproveProperty = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="bg-[#0F42620F]  lg:h-[340px] container relative">
        <div className="lg:absolute bottom-0">
          <ImageTitleAndDescription
            mainImage={propertyHuman}
            mainImageClassName="md:p-[34px object-top lg:-mb-8"
            TitleAndDescriptionClassName="mb-7 "
            position="bottom"
            mainTitle="Ready to Improve Your Property?"
            description="Don’t let overflowing gutters or a grimy exterior damage your London property. Contact us today for a free, no-obligation quote on any of our gutter cleaning, repair, replacement, or pressure washing services. "
          />
        </div>
      </div>
    </div>
  );
};

export default ImproveProperty;
