import logo from "@/assets/logo/aboutLogo.png";
import Image from "next/image";

const SidingDifferenceSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* left */}
        <div className="flex flex-col items-center">
          <Image src={logo} alt="logo" />
          {/* <Button
            size="large"
            className="bg-red-whtie border-red-primary mt-10 text-red-primary hover:!bg-red-primary  hover:!text-white p-6 text-lg"
          >
            Calculate Window Cost
          </Button> */}
        </div>
        {/* right  */}
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            The ARC Difference
          </h3>
          <p className="text-md mt-5">
            At ARC, siding isn’t just about looks — it’s your home’s first line
            of defense. We install high-quality, weather-resistant siding that
            protects against harsh Midwest storms while dramatically improving
            curb appeal.
          </p>
          <p className="text-md mt-5">
            Our team ensures precise installation, clean lines, and long-lasting
            performance, so your home stays protected and beautiful year-round.
            With ARC, you get siding that shields your home and turns heads on
            the block.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidingDifferenceSection;
