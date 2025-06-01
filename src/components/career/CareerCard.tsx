import Link from "next/link";
import React from "react";

const CareerCard = () => {
  return (
    <section className="container mx-auto my-20 text-black">
      <div className=" md:w-1/2 lg:w-1/3 xl:w-1/4 border px-5 py-3 rounded-md bg-[#FAFAFB] space-y-5">
        <h1>Advisor</h1>
        <div className=" text-[#011936] ">
          <h1 className="font-semibold text-xl">Project Advisor</h1>
          <p className="text-[14px mt-2">Type: Full-Time, Part-Time</p>
        </div>
        <Link href={"/career/career-details"}>
          <button className="bg-red-700 text-white px-4 py-2  mt-5 rounded-md">
            Job Details
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CareerCard;
