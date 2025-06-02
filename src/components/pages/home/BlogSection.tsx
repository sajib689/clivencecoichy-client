"use client";

import BlogCard from "@/components/cards/BlogCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { TBlog } from "@/interface/globalType";
import { useGetAllBlogsQuery } from "@/redux/service/blog/blogApi";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  const { data } = useGetAllBlogsQuery({});
  return (
    <div className="py-20">
      <div className="container">
        {/* header */}
        <div className="flex items-center gap-8 justify-between flex-wrap">
          <SectionHeader
            subTitle={"Blogs"}
            description={
              "Whether you're considering a new roof or need guidance on maintaining your current one, our blog is here to help you make informed decisions your home."
            }
          >
            Insights & Inspiration: The ARC <br /> Archives
          </SectionHeader>
          <Link href={"/blogs"}>
            <Button
              size="large"
              className="bg-red-primary text-white hover:!text-red-primary hover:!border-red-primary"
            >
              Read All Blogs
            </Button>
          </Link>
        </div>

        {/* content  */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.data?.slice(0, 3)?.map((item: TBlog, index: number) => (
            <BlogCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
