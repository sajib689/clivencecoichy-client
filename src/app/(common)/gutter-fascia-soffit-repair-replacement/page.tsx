import React from 'react';
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from '@/components/shared/SmallBanner/SmallBanner';
import GutterFasciaAndSoffitRepair from '@/components/pages/GutterFasciaSoffitRepairReplacement/GutterFasciaAndSoffitRepair/GutterFasciaAndSoffitRepair';
import Image from 'next/image';
import ReplacementServiceBanner from "@/assets/ReplacementServiceBanner.png";
import ProtectItAll from '@/components/pages/GutterFasciaSoffitRepairReplacement/ProtectItAll/ProtectItAll';
import TrustedTrader from '@/components/shared/TrustedTrader/TrustedTrader';
import BlogComponent from '@/components/shared/blog/BlogComponent';
import ImproveProperty from '@/components/shared/ImproveProperty/ImproveProperty';

const GutterFasciaSoffitRepairReplacementPage = () => {
  return (
    <div> <SmallBanner
    backgroundImage={bgImage}
    title="Gutter, Fascia & Soffit Repair/Replacement Service"
    titleClassName=' max-w-5xl'
    description="Our Commercial Guttering Services"
  />
      <GutterFasciaAndSoffitRepair/>
      <div className="h-full w-full container mb-10 md:mb-20">
        <Image
          src={ReplacementServiceBanner}
          width={2200}
          height={1100}
          alt="image"
        />
      </div>
      <ProtectItAll/>
      <TrustedTrader/>
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
      <ImproveProperty/>
    </div>
  );
};

export default GutterFasciaSoffitRepairReplacementPage;