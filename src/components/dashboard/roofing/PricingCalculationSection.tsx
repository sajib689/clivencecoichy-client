/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetRoofingRoofQuery } from "@/redux/service/roofCost/roofcostApi";
import { useGetRoofingHomeSizeQuery } from "@/redux/service/roofCost/roofHomeSizeApi";
import { useGetRoofingWorkableQuery } from "@/redux/service/roofCost/roofWorkableApi";

import { Button, Input, Select } from "antd";
import React from "react";

const PricingCalculationSection = () => {
  const [roofId, setRoofId] = React.useState<string | null>(null);
  const [workableId, setWorkableId] = React.useState<string | null>(null);
  const [homeSizeId, setHomeSizeId] = React.useState<string | null>(null);

  console.log(roofId, workableId, homeSizeId);

  const { data } = useGetRoofingRoofQuery({});
  const { data: workable } = useGetRoofingWorkableQuery({});
  const { data: homeSize } = useGetRoofingHomeSizeQuery({});

  const formatRoof: any = data?.map((item: any) => ({
    label: item?.name,
    value: item?._id,
  }));

  const formatWorkable: any = workable?.map((item: any) => ({
    label: item?.name,
    value: item?._id,
  }));
  const formatHomeSize: any = homeSize?.map((item: any) => ({
    label: item?.name,
    value: item?._id,
  }));
  return (
    <div className="mt-20 bg-white p-5 rounded-xl">
      <h2 className="text-2xl font-bold ">Pricing Calculation</h2>
      <div className="grid gird-cols-1gap-5 mt-5">
        <div className="flex items-center gap-10 flex-wrap md:col-span-2">
          <div>
            <h2 className="text-lg font-medium mb-3">Slect Roof</h2>
            <Select
              placeholder="Select Roof"
              style={{ width: 120 }}
              onChange={(e: any) => setRoofId(e)}
              options={formatRoof}
            />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-3">Slect workable</h2>
            <Select
              placeholder="Select Roof"
              style={{ width: 120 }}
              onChange={(e: any) => setWorkableId(e)}
              options={formatWorkable}
            />
          </div>
          <div>
            <h2 className="text-lg font-medium mb-3">Slect Home Size</h2>
            <Select
              placeholder="Select Roof"
              style={{ width: 120 }}
              onChange={(e: any) => setHomeSizeId(e)}
              options={formatHomeSize}
            />
          </div>
        </div>
        <div className="mt-10">
          {/* Asphalt Shingles  */}
          <div>
            <h2 className="text-lg font-medium mb-3">Asphalt Shingles</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input id="asphaltLow" type="number" onChange={() => {}} />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input id="asphaltHigh" type="number" onChange={() => {}} />
              </div>
            </div>
          </div>
          {/* Designer Asphalt Shingles  */}
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">
              Designer Asphalt Shingles
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input id="asphaltLow" type="number" onChange={() => {}} />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input id="asphaltHigh" type="number" onChange={() => {}} />
              </div>
            </div>
          </div>
          {/* Composite Shake  */}
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">Composite Shake</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input id="asphaltLow" type="number" onChange={() => {}} />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input id="asphaltHigh" type="number" onChange={() => {}} />
              </div>
            </div>
          </div>
          {/* Cedar / Wood Shake  */}
          <div className="mt-5">
            <h2 className="text-lg font-medium mb-3">Cedar / Wood Shake</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <span>Low Price ($)</span>
                <Input id="asphaltLow" type="number" onChange={() => {}} />
              </div>
              <div className="space-y-2">
                <span>High Price ($)</span>
                <Input id="asphaltHigh" type="number" onChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Button size="large" className="bg-red-primary text-white">
          Create Pricing
        </Button>
      </div>
    </div>
  );
};

export default PricingCalculationSection;
