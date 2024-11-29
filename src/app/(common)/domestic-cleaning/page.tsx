import domesticCleaningBanner from "@/assets/domesticCleaningBanner.png";
import bgImage from "@/assets/trustedHuman.png";
import Features from "@/components/pages/DomesticCleaning/Features/Features";
import FlipCardForCleaning from "@/components/pages/DomesticCleaning/FlipCardForCleaning/FlipCardForCleaning";
import GutterCleaningComponent from "@/components/pages/DomesticCleaning/GutterCleaningComponent/GutterCleaningComponent";
import WhyChooseUs from "@/components/pages/DomesticCleaning/WhyChooseUs/WhyChooseUs";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import Image from "next/image";

const DomesticCleaningPage = () => {
  return (
    <div>
      <SmallBanner
        backgroundImage={bgImage}
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
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
      <ImproveProperty/>
    </div>
  );
};

export default DomesticCleaningPage;
