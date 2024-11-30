/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetails from "@/components/pages/allBlogs/blogDetails/blogDetails";
import LeaveAComment from "@/components/pages/allBlogs/blogDetails/LeaveAComment";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";



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
        topButtonText="Read All"
        topButtonTextLink={"blog"}
      />
      <TrustedTrader />
      <ImproveProperty />
    </div>
  );
};

export default BlogDetailsPage;
