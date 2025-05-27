import BlogCard from "@/components/cards/BlogCard";
import React from "react";

const BlogContents = () => {
  return (
    <div className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
        {Array.from({ length: 6 }, (_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogContents;
