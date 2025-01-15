/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetails from "@/components/pages/allBlogs/blogDetails/blogDetails";
import LeaveAComment from "@/components/pages/allBlogs/blogDetails/LeaveAComment";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import { Metadata } from "next";

export async function generateMetadata({ params }: any ): Promise<Metadata> {
  const { blogId } = params;
  
  const res = await fetch(`https://gutterwizard.vercel.app/api/blog/${blogId}`, {
    cache: 'no-store', 
  });
  const blogData: { data: any } = await res.json();

  return {
    title: `${blogData?.data?.title} | London Gutter Cleaning`,
    description: `${blogData?.data?.metaDescription}`,
    keywords: `${blogData?.data?.tags}`,
  };
}


const BlogDetailsPage = async ({ params }: any) => {
  const { blogId } = await params;
    const res = await fetch(`https://gutterwizard.vercel.app/api/blog/${blogId}`, {
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
