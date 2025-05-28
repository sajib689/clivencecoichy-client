import { Button } from "antd";
import Link from "next/link";

const ServiceBanner = () => {
  return (
    <div className="relative h-[calc(100vh-108px)] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src="/roofingVideo.mov" // Replace with actual filename
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional: Overlay or content */}
      <div className="absolute bg-black/30 w-full z-10 flex items-center justify-center h-full">
        <div className="container">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Protect Your Home <br /> with a New Roof
          </h2>
          <p className="text-white mt-8 text-lg max-w-xl">
            Whether your roof has taken a hit from a recent storm or simply
            shows the signs of aging, we&apos;re here to help restore it—and
            your peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-8 items-center">
            <Link href={"/free-estimate"}>
              <Button
                size="large"
                className="bg-red-primary border-none text-white hover:!text-red-primary text-lg"
              >
                Free Estimate
              </Button>
            </Link>
            <Button
              size="large"
              className="bg-red-whtie border-none text-red-primary hover:!bg-red-primary  hover:!text-white p-6 text-lg"
            >
              Calculate Roofing Cost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
