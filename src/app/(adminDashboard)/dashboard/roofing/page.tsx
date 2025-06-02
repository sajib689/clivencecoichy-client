/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import RoofCard from "@/components/cards/calculator/RoofCard";
import PricingCalculationSection from "@/components/dashboard/roofing/PricingCalculationSection";
import ShowPricingSection from "@/components/dashboard/roofing/ShowPricingSection";
import { useGetRoofingRoofQuery } from "@/redux/service/roofCost/roofcostApi";
import { useGetRoofingHomeSizeQuery } from "@/redux/service/roofCost/roofHomeSizeApi";
import { useGetRoofingWorkableQuery } from "@/redux/service/roofCost/roofWorkableApi";

const DashboardRoofingPage = () => {
  const { data } = useGetRoofingRoofQuery({});
  const { data: workable } = useGetRoofingWorkableQuery({});
  const { data: homeSize } = useGetRoofingHomeSizeQuery({});

  return (
    <div>
      <div className="bg-white p-5 rounded-xl">
        {/* roof  */}
        <div>
          <h2 className="text-xl font-bold mb-8">Roofing Roof</h2>
          <div className="flex items-center justify-start gap-5 flex-wrap">
            {data?.map((item: any) => (
              <RoofCard key={item?._id} data={item} />
            ))}
          </div>
        </div>
        {/* workable  */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-8">Roofing Workable</h2>
          <div className="flex items-center justify-start gap-5 flex-wrap">
            {workable?.map((item: any) => (
              <RoofCard key={item?._id} data={item} />
            ))}
          </div>
        </div>
        {/* home size  */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-8">Roofing Home Size</h2>
          <div className="flex items-center justify-start gap-5 flex-wrap">
            {homeSize?.map((item: any) => (
              <RoofCard key={item?._id} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* pricing  */}
      <PricingCalculationSection />

      {/* show pricing  */}
      <ShowPricingSection />
    </div>
  );
};

export default DashboardRoofingPage;
