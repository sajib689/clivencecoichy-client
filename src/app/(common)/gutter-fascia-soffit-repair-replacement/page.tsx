import CommercialServiceTopBanner from "@/assets/CommercialServiceTopBanner.png";
import ReplacementServiceBanner from "@/assets/ReplacementServiceBanner.png";
import GutterFasciaAndSoffitRepair from '@/components/pages/GutterFasciaSoffitRepairReplacement/GutterFasciaAndSoffitRepair/GutterFasciaAndSoffitRepair';
import ProtectItAll from '@/components/pages/GutterFasciaSoffitRepairReplacement/ProtectItAll/ProtectItAll';
import BlogComponent from '@/components/shared/blog/BlogComponent';
import ImproveProperty from '@/components/shared/ImproveProperty/ImproveProperty';
import SmallBanner from '@/components/shared/SmallBanner/SmallBanner';
import TrustedTrader from '@/components/shared/TrustedTrader/TrustedTrader';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Gutter, Fascia & Soffit Repair and Replacement | London Gutter Cleaning",
  description: "Need gutter, fascia, or soffit repairs? London Gutter Cleaning specializes in professional repair and replacement services to keep your property protected.",
  keywords: "fascia and soffit repairs, gutter replacement, gutter repair services, London gutter repairs, soffit installation",
};


const GutterFasciaSoffitRepairReplacementPage = () => {
  return (
    <div> <SmallBanner
    backgroundImage={CommercialServiceTopBanner}
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
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" />
      <ImproveProperty/>
    </div>
  );
};

export default GutterFasciaSoffitRepairReplacementPage;