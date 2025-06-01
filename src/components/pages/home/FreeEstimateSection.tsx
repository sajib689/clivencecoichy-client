import logo from "@/assets/freeEstimate.png";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const FreeEstimateSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left */}
        <div className="flex flex-col items-end">
          <Image src={logo} alt="logo" className="rounded-xl" />
        </div>
        {/* right  */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-title mt-5">
            Ready to Restore Your <br /> Property To Full Strength?
          </h3>
          <p className="text-md mt-5">
            Contact us today for a free, no-obligation quote and/or a
            complimentary roof inspection.
          </p>

          <Link href={"/free-estimate"}>
            <Button
              size="large"
              className="bg-red-primary mt-8 w-fit text-white hover:!text-red-primary hover:!border-red-primary"
            >
              Free Estimate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeEstimateSection;
