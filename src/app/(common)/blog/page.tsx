/* eslint-disable @typescript-eslint/no-explicit-any */
import bgImage from "@/assets/trustedHuman.png";
import AllBlogsList from "@/components/pages/allBlogs/AllBlogsList/AllBlogsList";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import SmallBanner from "@/components/shared/SmallBanner/SmallBanner";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | London Gutter Cleaning",
  description:
    "Stay updated with the latest gutter cleaning tips, news, and trends from London Gutter Cleaning. Read our expert blog posts to keep your gutters in top shape.",
  keywords:
    "gutter cleaning tips, gutter maintenance, home improvement, gutter care, London",
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
        <AllBlogsList />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogsPage;
