import CommercialServiceBanner from "@/assets/CommercialServiceBanner.png";
import bgImage from "@/assets/trustedHuman.png";
import CommercialGuttering from "@/components/pages/commercialService/CommercialGuttering/CommercialGuttering";
import DontLetClogged from "@/components/pages/commercialService/DontLetClogged/DontLetClogged";
import WhyChooseLondonGutter from "@/components/pages/commercialService/WhyChooseLondonGutter/WhyChooseLondonGutter";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import Image from "next/image";

const CommercialServicePage = () => {
  return (
    <div>
      <SmallBanner
        backgroundImage={bgImage}
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
      <WhyChooseLondonGutter/>
  <DontLetClogged />
      <TrustedTrader />
      <BlogComponent
        smallTitle="Blog"
        mainTitle="Insights & Inspiration: The LondonGutterClean Blog"
        topButtonText="Read All"
        topButtonTextLink={"blog"}
      />
      <ImproveProperty />
    </div>
  );
};

export default CommercialServicePage;
