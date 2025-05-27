import { Button } from "antd";
import Image from "next/image";
import bannerImage from "@/assets/commercial/banner.png";

const CommercialBanner = () => {
  return (
    <div className="relative h-[calc(100vh-108px)] overflow-hidden">
      {/* Background Video */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src={bannerImage}
        width={2000}
        height={800}
        alt="window Imge"
      />

      {/* Optional: Overlay or content */}
      <div className="absolute bg-black/30 w-full z-10 flex items-center justify-center h-full">
        <div className="container">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Full-Service <br /> Commercial <br /> Restoration Experts
          </h2>
          <p className="text-white mt-8 text-lg max-w-xl">
            Protect your property, preserve your investment, and partner with a
            team that gets the job done right—on time and on budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 items-center">
            <Button
              size="large"
              className="bg-red-primary border-none text-white hover:!text-red-primary p-6 text-lg"
            >
              Free Estimate
            </Button>
            {/* <Button
              size="large"
              className="bg-red-whtie border-none text-red-primary hover:!bg-red-primary  hover:!text-white p-6 text-lg"
            >
              Calculate Siding Cost
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialBanner;
