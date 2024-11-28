import BlogDetails from "@/components/pages/allBlogs/blogDetails/blogDetails";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import React, { FC } from "react";

interface BookDetailsPageProps {
  params: {
    bookId: string;
  };
}

const BookDetailsPage: FC<BookDetailsPageProps> = async ({ params }) => {
  const bookId = await params?.bookId;
  console.log(bookId);
  return (
    <div>
        <BlogDetails/>
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

export default BookDetailsPage;
