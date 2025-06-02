import Image from "next/image";
import banner from "@/assets/free-estimate/banner.png";

const AboutBanner = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden bg-[#1E2228]">
      {/* Background Video */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src={banner}
        width={2000}
        height={800}
        alt="window Imge"
      />

      {/* Optional: Overlay or content */}
      <div className="absolute bg-black/30 w-full z-10 flex items-center text-left h-full">
        <div className="container">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl ">
            About ARC
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
