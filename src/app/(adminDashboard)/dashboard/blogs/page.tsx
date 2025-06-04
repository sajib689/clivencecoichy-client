"use client";

import DashboardBlogCard from "@/components/cards/DashbaordBlogCard";
import { TBlog } from "@/interface/globalType";
import { useGetAllBlogsQuery } from "@/redux/service/blog/blogApi";
import { Button } from "antd";
import Link from "next/link";

const DashbaordBlogPage = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});
  console.log(data);

  if (isLoading) {
    <div className="py-12 flex items-center justify-center">
      <h2>Loading...</h2>
    </div>;
  }

  return (
    <div>
      <div className="flex items-center justify-end">
        <Link href={"/dashboard/blogs/create-blog"}>
          <Button className="bg-red-primary text-white">Create Blog</Button>
        </Link>
      </div>
      {/* contents */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.map((item: TBlog, index: number) => {
          return (
            <div key={index} className="bg-white rounded-md">
              <DashboardBlogCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashbaordBlogPage;
