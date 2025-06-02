"use client";

import { useGetRoofingPriceQuery } from "@/redux/service/roofCost/roofPriceApi";
import { Input } from "antd";
import React from "react";

export type RoofEstimate = {
  _id: string;
  roof: string | null;
  walkability: string | null;
  homeSize: string | null;
  asphaltLow: number;
  asphaltHigh: number;
  designerLow: number;
  designerHigh: number;
  compositeLow: number;
  compositeHigh: number;
  cedarLow: number;
  cedarHigh: number;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  __v: number;
};

const ShowPricingSection = () => {
  const { data: pricing } = useGetRoofingPriceQuery({});

  console.log(pricing, "pricing data");
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold ">Created pricing</h2>

      {/* show pricing */}
      {pricing?.map((item: RoofEstimate, indx: number) => (
        <div
          key={indx}
          className="mt-5 flex items-center gap-5 bg-white p-5 rounded-xl"
        >
          <div className="">
            <h2 className="text-lg font-medium mb-3">Asphalt Shingles</h2>
            <div className="">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input
                  id="asphaltLow"
                  defaultValue={item?.asphaltLow}
                  type="number"
                  onChange={() => {}}
                />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input
                  id="asphaltHigh"
                  defaultValue={item?.asphaltHigh}
                  type="number"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">
              Designer Asphalt Shingles
            </h2>
            <div className="">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input
                  id="asphaltLow"
                  defaultValue={item?.designerLow}
                  type="number"
                  onChange={() => {}}
                />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input
                  id="asphaltHigh"
                  defaultValue={item?.designerHigh}
                  type="number"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">Composite Shake</h2>
            <div className="">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input
                  id="asphaltLow"
                  defaultValue={item?.compositeLow}
                  type="number"
                  onChange={() => {}}
                />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input
                  id="asphaltHigh"
                  defaultValue={item?.compositeHigh}
                  type="number"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">Cedar / Wood Shake</h2>
            <div className="">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input
                  id="asphaltLow"
                  defaultValue={item?.cedarLow}
                  type="number"
                  onChange={() => {}}
                />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input
                  id="asphaltHigh"
                  defaultValue={item?.cedarHigh}
                  type="number"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPricingSection;
