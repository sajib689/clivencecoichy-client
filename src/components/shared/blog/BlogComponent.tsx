import BlogCard from "@/components/cards/BlogCard/BlogCard";
import MyButton from "@/components/ui/MyButton/MyButton";
import TitleWithBorder from "@/components/ui/TitleWithBorder/TitleWithBorder";
import { TBlogPost } from "@/interface/globalType";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import Link from "next/link";
import { FC } from "react";



interface BlogComponentProps {
  // blogData: TBlog[];
  smallTitle: string;
  mainTitle: string;
}

const BlogComponent: FC<BlogComponentProps> = async ({
  // blogData,
  smallTitle,
  mainTitle,
}) => {
  const res = await fetch(`https://gutterwizard.vercel.app/api/blog?page=${1}&limit=${4}`, {
    cache: "no-store", // Avoid caching to get fresh data on each request
  });
  const blogs = await res.json();
  return (
    <div className="container">
      <TitleWithBorder title={smallTitle} className="mb-2" />
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
        <p className="text-2xl md:text-4xl font-extrabold md:max-w-[500px] text-blue-primary mb-2">
          {mainTitle}
        </p>
        <Link href={"/blog"}>
          <MyButton title={"Read All"} />
        </Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isNonEmptyArray(blogs?.data?.blogs) &&
          blogs?.data?.blogs?.map((item: TBlogPost) => (
            <BlogCard
              key={item._id}
              imageSrc={item.banner}
              author={item?.authorId?.username}
              date={item.createdAt}
              title={item.title}
              description={item.content}
              readMoreLink={`/blog/${item._id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogComponent;
