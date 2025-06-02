/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllTeamsQuery } from "@/redux/service/about/teamApi";
import { useEffect, useState } from "react";
import CommonCard from "./CommonCard";

const AboutTeam = () => {
  const [aboutOwner, setAboutOwner] = useState<any[]>([]);

  const { data, isLoading } = useGetAllTeamsQuery({});

  useEffect(() => {
    if (data && data.length > 0) {
      setAboutOwner(data);
    }
  }, [data]);

  console.log(aboutOwner, "team data");

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
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[2px] bg-title"></div>
          <h2 className="text-title font-semibold">About Us</h2>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title">
          About the Company
        </h3>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
        {aboutOwner?.map((member, index) => (
          <CommonCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
