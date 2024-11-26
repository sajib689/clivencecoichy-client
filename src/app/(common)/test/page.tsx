import BlogCard from "@/components/cards/BlogCard/BlogCard";
import React from "react";

const TestPage = () => {
  return (
    <div>
      <BlogCard
        imageSrc={"/gutter.jpg"}
        author="James Charls"
        date="12 July, 2024"
        title="Common causes of block gutter"
        description="Why Won’t My Gutters Stop Clogging? (and How to Prevent It) Ever cleaned ..."
        readMoreLink="#"
      />
    </div>
  );
};

export default TestPage;
