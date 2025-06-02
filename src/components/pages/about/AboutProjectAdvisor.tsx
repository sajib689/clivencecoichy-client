/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllAdvisorsQuery } from "@/redux/service/about/advisorApi";
import CommonCard from "./CommonCard";

const AboutProjectAdvisor = () => {
  const { data, isLoading } = useGetAllAdvisorsQuery({});
  console.log(data, "advisor data");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-title">Loading...</h2>
      </div>
    );
  }

  return (
    <div className=" font-sans container mx-auto space-y-10 my-20">
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title">
          Project Advisor
        </h3>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
        {data?.map((member: any, index: number) => (
          <CommonCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutProjectAdvisor;
