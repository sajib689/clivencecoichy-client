"use client";

import TestimonialCard, {
  Testimonial,
} from "@/components/cards/TestimonialCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { useGetAllReviewsQuery } from "@/redux/service/reviewsApi";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  const { data } = useGetAllReviewsQuery({});
  console.log(data);
  return (
    <div className="py-20 max-w-[100vw] bg-[#01193605]">
      <div className="container flex items-center gap-8 justify-between flex-wrap mb-20">
        <SectionHeader
          subTitle={"Testimonial"}
          description={
            "You want a roofing company that takes pride in providing quality products and craftsmanship to our communities."
          }
        >
          We Are A Local Roofing Contractor <br /> You Can Trust
        </SectionHeader>
        <Link href={"/reviews"}>
          <Button
            size="large"
            className="bg-red-primary text-white hover:!text-red-primary hover:!border-red-primary"
          >
            Read All Reviews
          </Button>
        </Link>
      </div>
      <div className="space-y-12">
        <Marquee className="">
          {data?.map((item: Testimonial, index: number) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </Marquee>
        <Marquee direction={"right"}>
          {data?.map((item: Testimonial, index: number) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialSection;
