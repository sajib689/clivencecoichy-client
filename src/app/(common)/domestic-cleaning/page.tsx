import domesticCleaningBanner from "@/assets/domesticCleaningBanner.png";
import DomesticCleaningTopBanner from "@/assets/DomesticCleaningTopBanner.png";
import Features from "@/components/pages/DomesticCleaning/Features/Features";
import FlipCardForCleaning from "@/components/pages/DomesticCleaning/FlipCardForCleaning/FlipCardForCleaning";
import GutterCleaningComponent from "@/components/pages/DomesticCleaning/GutterCleaningComponent/GutterCleaningComponent";
import WhyChooseUs from "@/components/pages/DomesticCleaning/WhyChooseUs/WhyChooseUs";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import { Metadata } from "next";
import Image from "next/image";



export const metadata: Metadata = {
  title: "Domestic Gutter Cleaning Services | London Gutter Cleaning",
  description: "Keep your home safe from water damage with our expert domestic gutter cleaning services. Affordable and professional gutter solutions for homeowners in London.",
  keywords: "domestic gutter cleaning, residential gutter services, London home maintenance, gutter cleaning for homes",
};

const DomesticCleaningPage = () => {
  return (
    <div>
      <SmallBanner
        backgroundImage={DomesticCleaningTopBanner}
        title="Domestic Cleaning"
        description="Our Residential gutter cleaning services"
      />
      <GutterCleaningComponent />
      <div className="h-full w-full container mb-10 md:mb-20">
        <Image
          src={domesticCleaningBanner}
          width={2200}
          height={1100}
          alt="image"
        />
      </div>
      <Features/>
      <WhyChooseUs/>
      <FlipCardForCleaning/>
      <TrustedTrader/>
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" />
      <ImproveProperty/>
    </div>
  );
};

export default DomesticCleaningPage;
