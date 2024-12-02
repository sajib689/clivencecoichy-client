import React from "react";
import CommercialServiceTopBanner from "@/assets/CommercialServiceTopBanner.png";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import PressureWashingDriveways from "@/components/pages/pressureWashingRoof/PressureWashingDriveways/PressureWashingDriveways";
import CommercialServiceBanner from "@/assets/CommercialServiceBanner.png";
import Image from "next/image";
import FlipCardForPressureRoof from "@/components/pages/pressureWashingRoof/FlipCardForPressureRoof/FlipCardForPressureRoof";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pressure Washing Services | London Gutter Cleaning",
  description:
    "Get professional pressure washing services from London Gutter Cleaning. Clean your exterior surfaces, driveways, and more with our high-pressure cleaning solutions.",
  keywords:
    "pressure washing, exterior cleaning, driveway cleaning, London pressure washing, power washing services",
};

const PressureWashingRoofPage = () => {
  return (
    <div>
      <SmallBanner
        backgroundImage={CommercialServiceTopBanner}
        title="Pressure washing service"
        description="Our Commercial Pressure washing service"
      />
      <PressureWashingDriveways />
      <div className="h-full w-full container mb-10 md:mb-20">
        <Image
          src={CommercialServiceBanner}
          width={2200}
          height={1100}
          alt="image"
        />
      </div>
      <FlipCardForPressureRoof />
      <TrustedTrader />
      <BlogComponent
        smallTitle="Blog"
        mainTitle="Insights & Inspiration: The LondonGutterClean Blog"

      />
      <ImproveProperty />
    </div>
  );
};

export default PressureWashingRoofPage;
