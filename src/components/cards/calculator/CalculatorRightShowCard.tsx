import Image from "next/image";
import React from "react";
import asphaltImage from "@/assets/Pricing-cost-calculator/roofing/asphaltSingles.png";

const CalculatorRightShowCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5 hover:bg-white duration-300 rounded-xl cursor-pointer">
      <div className="col-span-4 p-3">
        <Image src={asphaltImage} className="w-full h-full" alt="image" />
      </div>
      <div className="col-span-8">
        <h2 className="text-xl font-bold mb-2 text-title">Asphalt Shingles</h2>
        <p className="text-lg font-bold text-red-primary mb-2">
          $15,500 - $31,000
        </p>
        <p>
          America&apos;s favorite, bang for buck, aesthetically pleasing roofing
          system.
        </p>
      </div>
    </div>
  );
};

export default CalculatorRightShowCard;
