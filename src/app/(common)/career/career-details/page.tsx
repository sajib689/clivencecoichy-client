import CareerBanner from "@/components/shared/commonBanner/CareerBanner";
import CareerDetails from "@/components/pages/career/CareerDetails";
import React from "react";

const page = () => {
  return (
    <div>
      <CareerBanner title="Ready to Elevate Your Career?" />
      <CareerDetails />
    </div>
  );
};

export default page;
