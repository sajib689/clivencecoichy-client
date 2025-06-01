import roofIcon1 from "@/assets/Pricing-cost-calculator/window/windowIcon1.svg";
import roofIcon2 from "@/assets/Pricing-cost-calculator/window/windowIcon2.svg";
import roofIcon3 from "@/assets/Pricing-cost-calculator/window/windowIcon3.svg";
import roofIcon4 from "@/assets/Pricing-cost-calculator/window/windowIcon4.svg";
import roofIcon5 from "@/assets/Pricing-cost-calculator/window/windowIcon5.svg";
import roofIcon6 from "@/assets/Pricing-cost-calculator/window/windowIcon6.svg";
import roofIcon7 from "@/assets/Pricing-cost-calculator/window/windowIcon7.svg";
import roofIcon8 from "@/assets/Pricing-cost-calculator/window/windowIcon8.svg";

// icon check mark
import iIcon from "@/assets/Pricing-cost-calculator/roofing/alert-circle.png";
import checkIcon from "@/assets/Pricing-cost-calculator/roofing/checkMarkFilled.svg";
import CalculatorRightShowCard from "@/components/cards/calculator/CalculatorRightShowCard";
import WindowCard from "@/components/cards/calculator/WindowCard";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const WindowCalculatorSection = () => {
  return (
    <div className="py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* left  */}
        <div>
          {/* roof ====================================  */}
          <div>
            {/* title 1  */}
            <h3 className="text-2xl font-bold text-title">
              1. Select number & size of replacement windows
            </h3>
            {/* select 1  */}
            <div className="mt-10 space-y-5">
              {/* roof card  */}
              {roofingData?.map((item) => (
                <WindowCard key={item?.id} data={item} />
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <div className="bg-gray-light rounded-xl p-5">
            <h3 className="text-2xl font-bold text-title mb-5">
              You’ve Selected
            </h3>
            {/* tabs  */}
            <div className="flex items-center gap-5 flex-wrap">
              {/* 1  */}
              <div className="flex items-center gap-2">
                <Image src={checkIcon} alt="icon" />
                <h2>Hip & Valley</h2>
              </div>
              {/* 1  */}
              <div className="flex items-center gap-2">
                <Image src={iIcon} alt="icon" />
                <h2>None selected</h2>
              </div>
              {/* 1  */}
              <div className="flex items-center gap-2">
                <Image src={iIcon} alt="icon" />
                <h2>None selected</h2>
              </div>
            </div>

            {/* cards  */}
            <div className="mt-10">
              <CalculatorRightShowCard />

              <h3 className="text-2xl font-bold text-title my-8">
                You’ve Selected
              </h3>

              <CalculatorRightShowCard />

<Link href={"/free-estimate"}>
              <Button
                size="large"
                className="bg-red-primary w-full mt-8 border-none text-white hover:!text-red-primary p-6 text-lg"
              >
                Free Estimate
              </Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowCalculatorSection;

const roofingData = [
  {
    id: 1,
    title: "Double Hung",
    icon: <Image src={roofIcon1} className="w-28" alt="roof icon" />,
  },
  {
    id: 2,
    title: "Slider",
    icon: <Image src={roofIcon2} className="w-14" alt="roof icon" />,
  },
  {
    id: 3,
    title: "Casement",
    icon: <Image src={roofIcon3} className="w-28" alt="roof icon" />,
  },
  {
    id: 4,
    title: "Awning",
    icon: <Image src={roofIcon4} className="w-28" alt="roof icon" />,
  },
  {
    id: 5,
    title: "Twin Casemant",
    icon: <Image src={roofIcon5} className="w-28" alt="roof icon" />,
  },
  {
    id: 6,
    title: "Picture",
    icon: <Image src={roofIcon6} className="w-28" alt="roof icon" />,
  },
  {
    id: 7,
    title: "3 Lite Bay/Bow",
    icon: <Image src={roofIcon7} className="w-28" alt="roof icon" />,
  },
  {
    id: 8,
    title: "4 Lite Bay/Bow",
    icon: <Image src={roofIcon8} className="w-28" alt="roof icon" />,
  },
];
