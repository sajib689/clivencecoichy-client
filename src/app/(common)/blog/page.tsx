/* eslint-disable @typescript-eslint/no-explicit-any */
// app/blog/page.tsx (Server Component)
import React from "react";
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import AllBlogsGrid from "@/components/pages/allBlogs/allBlogsGrid/allBlogsGrid";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import ScrollToTop from "@/components/ui/ScrollToTop";

const BlogsPage = async ({ searchParams }: any) => {
  const searchItems = await searchParams;
  const page = await (parseInt(searchItems?.page) || 1);
  const limit = 10;

  // Fetch blog data server-side
  const res = await fetch(
    `${process.env.BASE_URL}/blog?page=${page}&limit=${limit}`,
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
