"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import AllBlogsGrid from "@/components/pages/allBlogs/allBlogsGrid/allBlogsGrid";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import ScrollToTop from "@/components/ui/ScrollToTop";


const BlogsPage = () => {

  return (
    <div>
      <ScrollToTop />
      <SmallBanner
        backgroundImage={bgImage}
        title="London Gutter Clean Blogs"
        description="Our blogs"
      />
      <AllBlogsGrid
        
       
      />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogsPage;
