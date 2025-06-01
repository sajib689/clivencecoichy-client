import RoofCard from "@/components/cards/calculator/RoofCard";
import roofIcon1 from "@/assets/Pricing-cost-calculator/roofing/roofIcon1.svg";
import roofIcon2 from "@/assets/Pricing-cost-calculator/roofing/roofIcon2.svg";
import roofIcon3 from "@/assets/Pricing-cost-calculator/roofing/roofIcon3.svg";
import roofIcon4 from "@/assets/Pricing-cost-calculator/roofing/roofIcon4.svg";
import roofIcon5 from "@/assets/Pricing-cost-calculator/roofing/roofIcon5.svg";
import roofIcon6 from "@/assets/Pricing-cost-calculator/roofing/roofIcon6.svg";
import workable1 from "@/assets/Pricing-cost-calculator/siding/workableIcon1.svg";
import workable2 from "@/assets/Pricing-cost-calculator/siding/workableIcon2.svg";
import workable3 from "@/assets/Pricing-cost-calculator/siding/workableIcon3.svg";
import homeSize1 from "@/assets/Pricing-cost-calculator/roofing/homeSizeIcon1.svg";
import homeSize2 from "@/assets/Pricing-cost-calculator/roofing/homeSizeIcon2.svg";
import homeSize3 from "@/assets/Pricing-cost-calculator/roofing/homeSizeIcon3.svg";
import homeSize4 from "@/assets/Pricing-cost-calculator/roofing/homeSizeIcon4.svg";

// icon check mark
import checkIcon from "@/assets/Pricing-cost-calculator/roofing/checkMarkFilled.svg";
import iIcon from "@/assets/Pricing-cost-calculator/roofing/alert-circle.png";
import Image from "next/image";
import CalculatorRightShowCard from "@/components/cards/calculator/CalculatorRightShowCard";
import { Button } from "antd";

const SidingCalculatorSection = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        {/* left  */}
        <div>
          {/* roof ====================================  */}
          <div>
            {/* title 1  */}
            <h3 className="text-2xl font-bold text-title">
              1. Select a Roof Yours Most Resembles:
            </h3>
            {/* select 1  */}
            <div className="mt-10 flex items-center flex-wrap gap-5">
              {/* roof card  */}
              {roofingData?.map((item) => (
                <RoofCard key={item?.id} data={item} />
              ))}
            </div>
          </div>

          {/* Workable =============================== */}
          <div className="mt-20">
            {/* title 1  */}
            <h3 className="text-2xl font-bold text-title">
              2. How Walkable is Your Roof?
            </h3>
            {/* select 1  */}
            <div className="mt-10 flex items-center flex-wrap gap-5">
              {/* roof card  */}
              {sidingData?.map((item) => (
                <RoofCard key={item?.id} data={item} />
              ))}
            </div>
          </div>

          {/* Home Size =============================== */}
          <div className="mt-20">
            {/* title 1  */}
            <h3 className="text-2xl font-bold text-title">
              3. Choose approximate home size:
            </h3>
            {/* select 1  */}
            <div className="mt-10 flex items-center flex-wrap gap-5">
              {/* roof card  */}
              {homeSizeData?.map((item) => (
                <RoofCard key={item?.id} data={item} />
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
              <CalculatorRightShowCard />
              <CalculatorRightShowCard />

              <Button
                size="large"
                className="bg-red-primary w-full mt-8 border-none text-white hover:!text-red-primary p-6 text-lg"
              >
                Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidingCalculatorSection;

const roofingData = [
  {
    id: 1,
    title: "Cross Hipped",
    icon: <Image src={roofIcon1} className="w-20" alt="roof icon" />,
  },
  {
    id: 2,
    title: "Dormer",
    icon: <Image src={roofIcon2} className="w-14" alt="roof icon" />,
  },
  {
    id: 3,
    title: "Hip",
    icon: <Image src={roofIcon3} className="w-20" alt="roof icon" />,
  },
  {
    id: 4,
    title: "Hip & Valley",
    icon: <Image src={roofIcon4} className="w-20" alt="roof icon" />,
  },
  {
    id: 5,
    title: "Intersecting/ Overlaid Hip",
    icon: <Image src={roofIcon5} className="w-20" alt="roof icon" />,
  },
  {
    id: 6,
    title: "Open Gable",
    icon: <Image src={roofIcon6} className="w-20" alt="roof icon" />,
  },
];

const sidingData = [
  {
    id: 1,
    title: "Walkable",
    icon: <Image src={workable1} className="w-24" alt="roof icon" />,
  },
  {
    id: 2,
    title: "Slightly Walkable",
    icon: <Image src={workable2} className="w-24" alt="roof icon" />,
  },
  {
    id: 3,
    title: "Too Steep to Walk",
    icon: <Image src={workable3} className="w-24" alt="roof icon" />,
  },
];

const homeSizeData = [
  {
    id: 1,
    title: "0 - 1000 Sq. Ft.",
    description: "7% of USA Houses",
    icon: <Image src={homeSize1} className="w-16" alt="roof icon" />,
  },
  {
    id: 2,
    title: "1000 - 1750 Sq. Ft.",
    description: "36% of USA Houses",
    icon: <Image src={homeSize2} className="w-20" alt="roof icon" />,
  },
  {
    id: 3,
    title: "1750 - 2500 Sq. Ft.",
    description: "33% of USA Houses",
    icon: <Image src={homeSize3} className="w-20" alt="roof icon" />,
  },
  {
    id: 4,
    title: "2500+ Sq. Ft.",
    description: "28% of USA Houses",
    icon: <Image src={homeSize4} className="w-28" alt="roof icon" />,
  },
];
