
import BlogComponent from "@/components/shared/blog/BlogComponent";
import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import React from "react";


const blogData = [
  {
    _id: "1",
    imageSrc: "/gutter.jpg",
    author: "James Charls",
    date: "12 July, 2024",
    title: "Common causes of block gutter",
    description:
      "Why Won’t My Gutters Stop Clogging? (and How to Prevent It) Ever cleaned up the block gutter is a great place to live and make sure you don’t accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally.",
    readMoreLink: "#"
  },
  {
    _id: "2",
    imageSrc: "/gutter.jpg",
    author: "Sarah Morgan",
    date: "20 July, 2024",
    title: "The Importance of Gutter Maintenance",
    description:
      "Gutter maintenance is critical to prevent damage to your home. Regular cleaning and inspection can help keep your gutters in top shape, preventing costly repairs down the line. Learn how to properly maintain your gutters to avoid common problems.",
    readMoreLink: "#"
  },
  {  _id: "3",
    imageSrc: "/gutter.jpg",
    author: "Michael Roberts",
    date: "5 August, 2024",
    title: "How to Spot Gutter Issues Before They Get Worse",
    description:
      "Gutters are an essential part of your home's drainage system, and spotting issues early can save you a lot of trouble. Here are a few signs that your gutters may need repair or cleaning.",
    readMoreLink: "#"
  },
  {  _id: "4",
    imageSrc: "https://www.techtarget.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png",
    author: "Linda Johnson",
    date: "15 August, 2024",
    title: "Gutter Guards: Do They Really Work?",
    description:
      "Gutter guards are becoming increasingly ",
    readMoreLink: "#"
  }
];


const TestPage = () => {
  return (
    <div>
      <TrustedTrader/>
      <BlogComponent blogData={blogData} smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
      <TitleAndDescription smallTitle="Gutter Cleaning" mainTitle="Professional Gutter Cleaning for Your Home" description="Our Gutter service has been offering a professional gutter cleaning solution for well over the 13 year mark now. All our gutter cleaner engineers are fully insured and qualified to work up to 6 Storeys, our high level gutter cleaning specialists can clean guttering up to 4 storey without scaffolding. Anything taller will require scaffolding or cherry picker hire. All gutters and downpipes will be thoroughly flushed out and tested for leaks. If we find any minor leaks we will fix them as a special promotion with all gutter cleans."/>
    </div>
  );
};

export default TestPage;
