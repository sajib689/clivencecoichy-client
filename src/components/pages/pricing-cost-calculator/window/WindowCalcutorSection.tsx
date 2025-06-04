/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// icon check mark
import iIcon from "@/assets/Pricing-cost-calculator/roofing/alert-circle.png";
import checkIcon from "@/assets/Pricing-cost-calculator/roofing/checkMarkFilled.svg";
import asphaltImage1 from "@/assets/Pricing-cost-calculator/window/vinly1.png";
import asphaltImage2 from "@/assets/Pricing-cost-calculator/window/vinly2.png";
import CalculatorRightShowCard from "@/components/cards/calculator/CalculatorRightShowCard";
import WindowCard from "@/components/cards/calculator/WindowCard";
import { useGetWindowCalculationQuery } from "@/redux/service/windowCost/windowCostCalculatorApi";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type WindowSize = {
  vinyl: {
    low: number;
    high: number;
  };
  premiumVinyl: {
    low: number;
    high: number;
  };
  sizeLabel: string;
  _id: string;
};

export type WindowProduct = {
  _id: string;
  name: string;
  image: string;
  sizes: WindowSize[];
  createdAt: string; // or `Date` if you parse it
  updatedAt: string; // or `Date` if you parse it
  __v: number;
};

const WindowCalculatorSection = () => {
  const [windowIds, setWindowIds] = useState<string>("");
  const [showingData, setShowingData] = useState<any>({});
  console.log(showingData, "showingData");

  const { data, isLoading } = useGetWindowCalculationQuery({});
  console.log(data, "window cost data ");

  const handleSelectWindow = (id: string) => {
    console.log(id);
    if (!windowIds?.includes(id)) {
      setWindowIds(id);
    } else {
      setWindowIds("");
      setShowingData({});
    }
  };

  const sidedData = [
    {
      title: "Vinyl Windows",
      price: showingData?.vinyl?.min,
      highPrice: showingData?.vinyl?.max,
      image: asphaltImage1,
    },
    {
      title: "Premium Vinyl",
      price: showingData?.premiumVinyl?.min,
      highPrice: showingData?.premiumVinyl?.max,
      image: asphaltImage2,
    },
  ];
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
              {isLoading ? (
                <div className="py-2 flex items-center justify-center">
                  <h3>Loading..</h3>.
                </div>
              ) : (
                data?.map((item: WindowProduct) => (
                  <div
                    key={item?._id}
                    onClick={() => handleSelectWindow(item?._id)}
                  >
                    <WindowCard
                      isSelected={windowIds === item?._id ? true : false}
                      id={windowIds}
                      setShowingData={setShowingData}
                      data={item}
                    />
                  </div>
                ))
              )}
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
              {/* <CalculatorRightShowCard /> */}

              <h3 className="text-2xl font-bold text-title my-8">
                You’ve Selected
              </h3>

              {sidedData?.map((item, index) => (
                <CalculatorRightShowCard key={index} data={item} />
              ))}

              <Link href={"/free-estimate"}>
                <Button
                  size="large"
                  className="bg-red-primary w-full mt-8 border-none text-white hover:!text-red-primary p-6 text-lg"
                >
                  Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowCalculatorSection;
