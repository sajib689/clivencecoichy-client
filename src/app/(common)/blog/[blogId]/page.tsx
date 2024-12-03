/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetails from "@/components/pages/allBlogs/blogDetails/blogDetails";
import LeaveAComment from "@/components/pages/allBlogs/blogDetails/LeaveAComment";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import { Metadata } from "next";

export async function generateMetadata({ params }: any ): Promise<Metadata> {
  const { blogId } = params;
  
  const res = await fetch(`${process.env.BASE_URL}/blog/${blogId}`, {
    cache: 'no-store', 
  });
  const blogData: { data: any } = await res.json();

  return {
    title: `${blogData?.data?.title} | London Gutter Cleaning`,
    description: `Read our detailed post on ${blogData?.data?.topic}. Learn more about gutter cleaning, maintenance, and how to protect your home or business from water damage.`,
    keywords: `${blogData?.data?.topic}, gutter cleaning, home maintenance, property care, London`,
  };
}


const BlogDetailsPage = async ({ params }: any) => {
  const { blogId } = await params;
    const res = await fetch(`${process.env.BASE_URL}/blog/${blogId}`, {
      cache: 'no-store', 
    });
    const blogData = await res.json();

  return (
    <div>
      <BlogDetails blog={blogData?.data} blogId={blogId} />
      <LeaveAComment blogId={blogId}/>
      <BlogComponent
        smallTitle="Blog"
        mainTitle="Insights & Inspiration: The LondonGutterClean Blog"
   
      />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogDetailsPage;
