
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import AllBlogsGrid from "@/components/pages/allBlogs/allBlogsGrid/allBlogsGrid";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | London Gutter Cleaning",
  description: "Stay updated with the latest gutter cleaning tips, news, and trends from London Gutter Cleaning. Read our expert blog posts to keep your gutters in top shape.",
  keywords: "gutter cleaning tips, gutter maintenance, home improvement, gutter care, London",
};


const BlogsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <SmallBanner
        backgroundImage={bgImage}
        title="London Gutter Clean Blogs"
        description="Our blogs"
      />
      <AllBlogsGrid />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogsPage;
