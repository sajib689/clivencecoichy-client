import account_circle from "@/assets/icons/account_circle.svg";
import calendar_month from "@/assets/icons/calendar_month.svg";
import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";
import Link from "next/link";
import { FC } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface BlogCardProps {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
  readMoreLink: string;
}

const BlogCard: FC<BlogCardProps> = ({
  imageSrc,
  author,
  date,
  title,
  description,
  readMoreLink,
}) => {
  return (
    <div className="max-w-sm   overflow-hidden ">
      <div className="relative w-full h-40 rounded-md overflow-hidden">
        <ImageWithFallBackSystem imageSrc={imageSrc} alt="Blog Card Image" />
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-gray-light space-x-2">
          <span className="flex items-center space-x-1">
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <ImageWithFallBackSystem imageSrc={account_circle} />
            </div>
            <span className="font-medium">{author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <div className="w-5 h-5  overflow-hidden">
              <ImageWithFallBackSystem imageSrc={calendar_month} />
            </div>
            <span className="font-medium">{date}</span>
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mt-2">{title}</h2>
        <p className="text-sm font-medium text-gray-light mt-1">
          {description}
        </p>
        <Link href={readMoreLink}>
          <p className="text-base font-bold mt-4 text-[#84AA12] flex items-center gap-1 cursor-pointer">
            Read More{" "}
            <span className="ml-1">
              <FaArrowRight />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
