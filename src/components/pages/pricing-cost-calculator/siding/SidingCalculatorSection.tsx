/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import asphaltImage from "@/assets/Pricing-cost-calculator/roofing/asphaltSingles.png";
import composit from "@/assets/Pricing-cost-calculator/roofing/composit.png";
import designer from "@/assets/Pricing-cost-calculator/roofing/designer.png";
import RoofCard from "@/components/cards/calculator/RoofCard";

// icon check mark
import iIcon from "@/assets/Pricing-cost-calculator/roofing/alert-circle.png";
import checkIcon from "@/assets/Pricing-cost-calculator/roofing/checkMarkFilled.svg";
import CalculatorRightShowCard from "@/components/cards/calculator/CalculatorRightShowCard";
import { useGetRoofingsidinghomesizeQuery } from "@/redux/service/sidingCost/sidingHomeSizeApi";
import { useGetSelectedRoofingSidingPriceQuery } from "@/redux/service/sidingCost/sidingPriceApi";
import { useGetSidingRoofingRoofQuery } from "@/redux/service/sidingCost/sidingRoofApi";
import { useGetSidingWorkableQuery } from "@/redux/service/sidingCost/sidingWorkableApi";
import { Button } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const SidingCalculatorSection = () => {
  const [roofId, setRoofId] = useState<string | null>(null);
  const [workableId, setWorkableId] = useState<string | null>(null);
  const [homeSizeId, setHomeSizeId] = useState<string | null>(null);
  const [nRoofingData, setNRoofingData] = useState<any>([]);

  const { data } = useGetSidingRoofingRoofQuery({});
  const { data: workable } = useGetSidingWorkableQuery({});
  const { data: homeSize } = useGetRoofingsidinghomesizeQuery({});

  const { data: roofingPrice, refetch } = useGetSelectedRoofingSidingPriceQuery(
    {
      roof: roofId || "",
      stories: workableId || "",
      homeSize: homeSizeId || "",
    },
    { skip: !roofId || !workableId || !homeSizeId }
  );

  console.log(roofingPrice, "roofing price data");

  useEffect(() => {
    if (roofId && workableId && homeSizeId) {
      refetch();
      setNRoofingData(roofingPrice);
    }
  }, [roofId, workableId, homeSizeId, refetch, roofingPrice]);

  // const nRoofingData = {
  //   _id: "683b493982a2c925285f4a8c",
  //   roof: null,
  //   stories: null,
  //   homeSize: null,
  //   VinylLow: 100,
  //   VinylHigh: 200,
  //   LPSidingLow: 300,
  //   LPSidingHigh: 400,
  //   CedrSidingLow: 500,
  //   CedrSidingHigh: 600,
  //   createdAt: "2025-05-31T18:23:53.822Z",
  //   updatedAt: "2025-05-31T18:23:53.822Z",
  //   __v: 0,
  // };

  const sidedeData = [
    {
      title: "Vinyl Siding",
      price: nRoofingData?.VinylLow,
      highPrice: nRoofingData?.VinylHigh,
      image: asphaltImage,
    },
    {
      title: "LP Siding",
      price: nRoofingData?.LPSidingLow,
      highPrice: nRoofingData?.LPSidingHigh,
      image: designer,
    },
    {
      title: "Cedar",
      price: nRoofingData?.CedrSidingLow,
      highPrice: nRoofingData?.CedrSidingHigh,
      image: composit,
    },
  ];

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
              {data?.map((item: any, index: number) => (
                <div key={index} onClick={() => setRoofId(item?._id)}>
                  <RoofCard data={item} isSelect={item?._id === roofId} />
                </div>
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
              {workable?.map((item: any, index: number) => (
                <div key={index} onClick={() => setWorkableId(item?._id)}>
                  <RoofCard data={item} isSelect={item?._id === workableId} />
                </div>
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
              {homeSize?.map((item: any, index: number) => (
                <div key={index} onClick={() => setHomeSizeId(item?._id)}>
                  <RoofCard data={item} isSelect={item?._id === homeSizeId} />
                </div>
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
              <h3 className="text-2xl font-bold text-title my-8">
                You’ve Selected
              </h3>

              {sidedeData?.map((item, index) => (
                <CalculatorRightShowCard key={index} data={item} />
              ))}

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

// const roofingData = [
//   {
//     id: 1,
//     title: "Cross Hipped",
//     icon: <Image src={roofIcon1} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 2,
//     title: "Dormer",
//     icon: <Image src={roofIcon2} className="w-14" alt="roof icon" />,
//   },
//   {
//     id: 3,
//     title: "Hip",
//     icon: <Image src={roofIcon3} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 4,
//     title: "Hip & Valley",
//     icon: <Image src={roofIcon4} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 5,
//     title: "Intersecting/ Overlaid Hip",
//     icon: <Image src={roofIcon5} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 6,
//     title: "Open Gable",
//     icon: <Image src={roofIcon6} className="w-20" alt="roof icon" />,
//   },
// ];

// const sidingData = [
//   {
//     id: 1,
//     title: "Walkable",
//     icon: <Image src={workable1} className="w-24" alt="roof icon" />,
//   },
//   {
//     id: 2,
//     title: "Slightly Walkable",
//     icon: <Image src={workable2} className="w-24" alt="roof icon" />,
//   },
//   {
//     id: 3,
//     title: "Too Steep to Walk",
//     icon: <Image src={workable3} className="w-24" alt="roof icon" />,
//   },
// ];

// const homeSizeData = [
//   {
//     id: 1,
//     title: "0 - 1000 Sq. Ft.",
//     description: "7% of USA Houses",
//     icon: <Image src={homeSize1} className="w-16" alt="roof icon" />,
//   },
//   {
//     id: 2,
//     title: "1000 - 1750 Sq. Ft.",
//     description: "36% of USA Houses",
//     icon: <Image src={homeSize2} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 3,
//     title: "1750 - 2500 Sq. Ft.",
//     description: "33% of USA Houses",
//     icon: <Image src={homeSize3} className="w-20" alt="roof icon" />,
//   },
//   {
//     id: 4,
//     title: "2500+ Sq. Ft.",
//     description: "28% of USA Houses",
//     icon: <Image src={homeSize4} className="w-28" alt="roof icon" />,
//   },
// ];
