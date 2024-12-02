import CommercialServiceBanner from "@/assets/CommercialServiceBanner.png";
import CommercialServiceTopBanner from "@/assets/CommercialServiceTopBanner.png";
import CommercialGuttering from "@/components/pages/commercialService/CommercialGuttering/CommercialGuttering";
import DontLetClogged from "@/components/pages/commercialService/DontLetClogged/DontLetClogged";
import WhyChooseLondonGutter from "@/components/pages/commercialService/WhyChooseLondonGutter/WhyChooseLondonGutter";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commercial Gutter Cleaning Services | London Gutter Cleaning",
  description:
    "London Gutter Cleaning offers professional commercial gutter services to protect your property from water damage. We provide efficient, reliable solutions tailored to your business needs.",
  keywords:
    "commercial gutter cleaning, business gutter services, gutter maintenance for businesses, London commercial cleaning",
};

const CommercialServicePage = () => {
  return (
    <div>
      <SmallBanner
        backgroundImage={CommercialServiceTopBanner}
        title="Commercial Service"
        description="Our Commercial Guttering Services"
      />
      <CommercialGuttering />
      <div className="h-full w-full container mb-10 md:mb-20">
        <Image
          src={CommercialServiceBanner}
          width={2200}
          height={1100}
          alt="image"
        />
      </div>
      <WhyChooseLondonGutter />
      <DontLetClogged />
      <TrustedTrader />
      <BlogComponent
        smallTitle="Blog"
        mainTitle="Insights & Inspiration: The LondonGutterClean Blog"
      />
      <ImproveProperty />
    </div>
  );
};

export default CommercialServicePage;
