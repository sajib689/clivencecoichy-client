// import { TBlogPost } from "@/interface/globalType";

// const BlogLoadingPage = async () => {
//   const res = await fetch(`${process?.env?.BASE_URL}/api/blog`, );
//   const blogs = await res.json();
//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-4">
//         {blogs.map((blog: TBlogPost, i : number) => (
//         <div key={i}>Loading</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogLoadingPage;

"use client";
import MyLoading from "@/components/ui/MyLoading";
import ScrollToTop from "@/components/ui/ScrollToTop";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full">
      <ScrollToTop />
      <MyLoading />
    </div>
  );
};

export default loading;
