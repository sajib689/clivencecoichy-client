"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import AllBlogsGrid from "@/components/pages/allBlogs/allBlogsGrid/allBlogsGrid";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import ScrollToTop from "@/components/ui/ScrollToTop";
const baseUrl = process.env.BASE_URL

const BlogsPage = async ({ searchParams }: any) => {
  const searchItems = await searchParams;
  const page = (parseInt(searchItems?.page) || 1);
  const limit = 10;

  // Fetch blog data server-side
  const res = await fetch(
    `${baseUrl}/blog?page=${page}&limit=${limit}`,
    {
      cache: "no-store", // Avoid caching to get fresh data on each request
    }
  );
  const blogs = await res.json();
  const totalBlogs = blogs?.data?.totalBlogs || 0;
  return (
    <div>
      <ScrollToTop />
      <SmallBanner
        backgroundImage={bgImage}
        title="London Gutter Clean Blogs"
        description="Our blogs"
      />
      <AllBlogsGrid
        blogs={blogs?.data?.blogs || []}
        currentPage={page}
        totalBlogs={totalBlogs}
        defaultPageSize={limit}
      />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogsPage;
