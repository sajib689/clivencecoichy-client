"use client";

import BlogCard from "@/components/cards/BlogCard";
import { TBlog } from "@/interface/globalType";
import { useGetAllBlogsQuery } from "@/redux/service/blog/blogApi";
import React from "react";

const BlogContents = () => {
  const { data } = useGetAllBlogsQuery({});
  // console.log(data, "blog data");
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        {data?.data?.map((item: TBlog, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogContents;
