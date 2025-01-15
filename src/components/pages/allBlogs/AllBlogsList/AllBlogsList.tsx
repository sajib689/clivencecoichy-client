/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogCard from "@/components/cards/BlogCard/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import { Pagination, PaginationProps } from "antd";
import { useState } from "react";

const AllBlogsList = () => {
  const [page, setPage] = useState(1);
  const { data: getAllBlogs, isLoading } = useGetAllBlogsQuery({
    page,
    limit: 10,
  });
  const onChange: PaginationProps["onChange"] = (page) => {
    window.scrollTo(0, 0);
    setPage(page);
  };

  if (isLoading) {
    return <div className="loader mx-auto  text-xl md:text-5xl my-5"></div>;
  }
  return (
    <div>
      {isNonEmptyArray(getAllBlogs?.data?.blogs) ? (
        <>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container py-10">
            {getAllBlogs?.data?.blogs?.map((item: any) => (
              <BlogCard
                key={item._id}
                imageSrc={item.banner}
                author={item?.authorId?.username}
                date={item.createdAt}
                title={item.title}
                description={item.content}
                readMoreLink={`/blog/${item._id}`}
              />
            ))}
          </div>
          <div className="my-3 flex justify-center">
            <Pagination
              current={page}
              onChange={onChange}
              total={getAllBlogs?.data?.totalBlogs}
            />
          </div>
        </>
      ) : (
        <div className="">
          <h3 className="text-lg text-center">
            No blogs available at the moment.
          </h3>
        </div>
      )}
    </div>
  );
};

export default AllBlogsList;
