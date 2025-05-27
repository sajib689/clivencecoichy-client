import BlogContents from "@/components/pages/blogs/BlogContents";
import BLogsBanner from "@/components/pages/blogs/BlogsBanner";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <BLogsBanner />
      <BlogContents />
    </div>
  );
};

export default BlogsPage;
