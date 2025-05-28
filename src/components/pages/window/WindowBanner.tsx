import { Button } from "antd";
import Image from "next/image";
import bannerImage from "@/assets/windows/bannerImage.png";

const WindowBanner = () => {
  return (
    <div className="relative min-h-[60vh] h-fit overflow-hidden">
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
            Better Views and <br /> Lower Bills
          </h2>
          <p className="text-white mt-8 text-lg max-w-xl">
            Enjoy better views, lower energy bills, and a home that feels brand
            new—one window at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 items-center">
            {/* <Button
              size="large"
              className="bg-red-primary border-none text-white hover:!text-red-primary p-6 text-lg"
            >
              Free Estimate
            </Button> */}
            <Button
              size="large"
              className="bg-red-whtie border-none text-red-primary hover:!bg-red-primary  hover:!text-white p-6 text-lg"
            >
              Calculate Window Cost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowBanner;
