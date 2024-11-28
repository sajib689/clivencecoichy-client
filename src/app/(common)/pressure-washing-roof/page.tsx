import React from 'react';
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from '@/components/shared/SmallBanner/SmallBanner';
import PressureWashingDriveways from '@/components/pages/pressureWashingRoof/PressureWashingDriveways/PressureWashingDriveways';
import CommercialServiceBanner from "@/assets/CommercialServiceBanner.png";
import Image from 'next/image';
import FlipCardForPressureRoof from '@/components/pages/pressureWashingRoof/FlipCardForPressureRoof/FlipCardForPressureRoof';
import TrustedTrader from '@/components/shared/TrustedTrader/TrustedTrader';
import BlogComponent from '@/components/shared/blog/BlogComponent';
import ImproveProperty from '@/components/shared/ImproveProperty/ImproveProperty';

const PressureWashingRoofPage = () => {
  return (
    <div>
 <SmallBanner
        backgroundImage={bgImage}
        title="Pressure washing service"
        description="Our Commercial Pressure washing service"
      />
      <PressureWashingDriveways/>
      <div className="h-full w-full container mb-10 md:mb-20">
        <Image
          src={CommercialServiceBanner}
          width={2200}
          height={1100}
          alt="image"
        />
      </div>
      <FlipCardForPressureRoof/>
      <TrustedTrader/>
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
      <ImproveProperty/>
    </div>
  );
};

export default PressureWashingRoofPage;