import BlogCard from "@/components/cards/BlogCard";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Button } from "antd";
import React from "react";

const BlogSection = () => {
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
          <Button
            size="large"
            className="bg-red-primary text-white hover:!text-red-primary hover:!border-red-primary"
          >
            Read All Blogs
          </Button>
        </div>

        {/* content  */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
