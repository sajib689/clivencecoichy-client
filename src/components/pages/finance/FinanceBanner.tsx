import bannerImage from "@/assets/financing/banner.png";
import Image from "next/image";

const FinanceBanner = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      {/* Background Video */}
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        src={bannerImage}
        width={2000}
        height={800}
        alt="window Imge"
      />

      {/* Optional: Overlay or content */}
      <div className="absolute bg-black/30 w-full z-10 flex items-center text-left h-full">
        <div className="container">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl ">
            Easy Payment Plans for <br /> Every Budget
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FinanceBanner;
