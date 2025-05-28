import bannerImage from "@/assets/gutters/gutterBanner.png";
import Image from "next/image";

const ServicesBanner = () => {
  return (
    <div className="relative h-fit min-h-[60vh] overflow-hidden">
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
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-loose ">
            Proudly Serving Homes <br /> Across Illinois, Indiana, <br />
            Ohio, and Kentucky
          </h2>
          <p className="text-white mt-8 text-lg max-w-xl">
            The experts in exterior restoration at your service in Illinois,
            Indiana, Ohio, and Kentucky.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
