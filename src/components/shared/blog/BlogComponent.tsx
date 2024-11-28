import BlogCard from "@/components/cards/BlogCard/BlogCard";
import MyButton from "@/components/ui/MyButton/MyButton";
import TitleWithBorder from "@/components/ui/TitleWithBorder/TitleWithBorder";
import { TBlog } from "@/interface/globalType";
import Link from "next/link";
import { FC } from "react";



const blogData = [
  {
    _id: "1",
    imageSrc: "/gutter.jpg",
    author: "James Charls",
    date: "12 July, 2024",
    title: "Common causes of block gutter",
    description:
      "Why Won’t My Gutters Stop Clogging? (and How to Prevent It) Ever cleaned up the block gutter is a great place to live and make sure you don’t accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally.",
    readMoreLink: "#",
  },
  {
    _id: "2",
    imageSrc: "/gutter.jpg",
    author: "Sarah Morgan",
    date: "20 July, 2024",
    title: "The Importance of Gutter Maintenance",
    description:
      "Gutter maintenance is critical to prevent damage to your home. Regular cleaning and inspection can help keep your gutters in top shape, preventing costly repairs down the line. Learn how to properly maintain your gutters to avoid common problems.",
    readMoreLink: "#",
  },
  {
    _id: "3",
    imageSrc: "/gutter.jpg",
    author: "Michael Roberts",
    date: "5 August, 2024",
    title: "How to Spot Gutter Issues Before They Get Worse",
    description:
      "Gutters are an essential part of your home's drainage system, and spotting issues early can save you a lot of trouble. Here are a few signs that your gutters may need repair or cleaning.",
    readMoreLink: "#",
  },
  {
    _id: "4",
    imageSrc:
      "https://www.techtarget.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png",
    author: "Linda Johnson",
    date: "15 August, 2024",
    title: "Gutter Guards: Do They Really Work?",
    description: "Gutter guards are becoming increasingly ",
    readMoreLink: "#",
  },
];


interface BlogComponentProps {
  // blogData: TBlog[];
  smallTitle: string;
  mainTitle: string;
  topButtonText: string;
  topButtonTextLink: string;
}

const BlogComponent: FC<BlogComponentProps> = ({
  // blogData,
  smallTitle,
  mainTitle,
  topButtonText,
  topButtonTextLink
}) => {
  return (
    <div className="container">
      <TitleWithBorder title={smallTitle} className="mb-2" />
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
        <p className="text-2xl md:text-4xl font-extrabold md:max-w-[500px] text-blue-primary mb-2">
          {mainTitle}
        </p>
        <Link href={topButtonTextLink}>
        <MyButton title={topButtonText} />
        </Link>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogData?.map((item, index) => (
          <BlogCard
            key={index}
            imageSrc={item?.imageSrc}
            author={item?.author}
            date={item?.date}
            title={item?.title}
            description={item?.description}
            readMoreLink={`/blog/${item?._id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
