// import BlogComponent from "@/components/shared/blog/BlogComponent";
// import ImageTitleAndDescription from "@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription";
// import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";
// import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
// import React from "react";
// import workingHuman from "@/assets/workingHuman.jpg";
// import trustedHuman from "@/assets/trustedHuman.png";
// import establishedIn from "@/assets/establishedIn.png";
// import GutterReplacementImage1 from "@/assets/GutterReplacementImage1.png";
// import GutterReplacementImage2 from "@/assets/GutterReplacementImage2.png";
// import repair1 from "@/assets/repair1.png";
// import repair2 from "@/assets/repair2.png";
// import RoofCleaning1 from "@/assets/RoofCleaning1.png";
// import RoofCleaning2 from "@/assets/RoofCleaning2.png";
// import TrustedProfessionals from "@/assets/icons/TrustedProfessionals.png";
// import QuickAndEfficientService from "@/assets/icons/QuickAndEfficientService.png";
// import ExceptionalCustomerSatisfaction from "@/assets/icons/ExceptionalCustomerSatisfaction.png";
// import ComprehensiveServices from "@/assets/icons/ComprehensiveServices.png";
// import ThoroughGutterCleaning from "@/assets/icons/ThoroughGutterCleaning.png";
// import ExpertGutterRepairs from "@/assets/icons/ExpertGutterRepairs.png";
// import FreeMinorRepairsWithEveryClean from "@/assets/icons/FreeMinorRepairsWithEveryClean.png";
// import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import CardWithTitle from "@/components/cards/CardWithTitle/CardWithTitle";
// import OurService from "@/components/pages/home/OurService/OurService";

// const blogData = [
//   {
//     _id: "1",
//     imageSrc: "/gutter.jpg",
//     author: "James Charls",
//     date: "12 July, 2024",
//     title: "Common causes of block gutter",
//     description:
//       "Why Won’t My Gutters Stop Clogging? (and How to Prevent It) Ever cleaned up the block gutter is a great place to live and make sure you don’t accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally accidentally.",
//     readMoreLink: "#",
//   },
//   {
//     _id: "2",
//     imageSrc: "/gutter.jpg",
//     author: "Sarah Morgan",
//     date: "20 July, 2024",
//     title: "The Importance of Gutter Maintenance",
//     description:
//       "Gutter maintenance is critical to prevent damage to your home. Regular cleaning and inspection can help keep your gutters in top shape, preventing costly repairs down the line. Learn how to properly maintain your gutters to avoid common problems.",
//     readMoreLink: "#",
//   },
//   {
//     _id: "3",
//     imageSrc: "/gutter.jpg",
//     author: "Michael Roberts",
//     date: "5 August, 2024",
//     title: "How to Spot Gutter Issues Before They Get Worse",
//     description:
//       "Gutters are an essential part of your home's drainage system, and spotting issues early can save you a lot of trouble. Here are a few signs that your gutters may need repair or cleaning.",
//     readMoreLink: "#",
//   },
//   {
//     _id: "4",
//     imageSrc:
//       "https://www.techtarget.com/rms/onlineimages/what_is_a_blog_used_for-f_mobile.png",
//     author: "Linda Johnson",
//     date: "15 August, 2024",
//     title: "Gutter Guards: Do They Really Work?",
//     description: "Gutter guards are becoming increasingly ",
//     readMoreLink: "#",
//   },
// ];

// const cardData = [
//   {
//     image: ThoroughGutterCleaning,
//     title: "Trusted Professionals",
//     description:
//       "Backed by over a decade of experience, we are a Which? Trusted Trader, ensuring quality you can rely on.",
//   },
//   {
//     image: ExpertGutterRepairs,
//     title: "Exceptional Customer Satisfaction",
//     description:
//       "With hundreds of positive reviews, our commitment to excellence speaks for itself.",
//   },
//   {
//     image: FreeMinorRepairsWithEveryClean,
//     title: "Comprehensive Services",
//     description:
//       "From gutter cleaning to high-rise solutions, we offer a one-stop shop for all your gutter needs.",
//   },
//   {
//     image: QuickAndEfficientService,
//     title: "Quick & Efficient Service",
//     description:
//       "We respect your time with prompt responses and swift service delivery.",
//   },
// ];

// const TrustedByHundreds = [
//   "Over a Decade of Excellence",
//   "Award-Winning Service",
//   "Highly Rated by Customers",
//   "Certified and Trusted",
// ];

// const TestPage = () => {
//   return (
//     <div>
//       <TrustedTrader/>
//       <BlogComponent blogData={blogData} smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
//       <OurService
//         cardData={cardData}
//         imageClassName="h-10 w-[64px] bg-[#0F426214] p-2 rounded"
//         smallTitle="Our Service"
//         mainTitle="We Are Here For All Your London Guttering Needs"
//         topButtonText="Get a Free Quote"
//         topButtonTextLink={"blog"}
//       />
//       <div className="container">
//         <TitleAndDescription
//           smallTitle="Gutter Cleaning"
//           smallTitleClassName="mb-1"
//           mainTitle="Professional Gutter Cleaning for Your Home"
//           description="Our Gutter service has been offering a professional gutter cleaning solution for well over the 13 year mark now. All our gutter cleaner engineers are fully insured and qualified to work up to 6 Storeys, our high level gutter cleaning specialists can clean guttering up to 4 storey without scaffolding. Anything taller will require scaffolding or cherry picker hire. All gutters and downpipes will be thoroughly flushed out and tested for leaks. If we find any minor leaks we will fix them as a special promotion with all gutter cleans."
//         />
//       </div>
     
//       <ImageTitleAndDescription
//         mainImage={workingHuman}
//         TitleAndDescriptionClassName="mb-7"
//         smallTitle="Why Us"
//         mainTitle="Why Choose Us for Domestic Gutter Cleaning?"
//         description="London Gutter Cleaning prides itself on customer satisfaction and that’s why we are London’s most popular gutter cleaning business. You can rest assured whatever the problem we have the solution leaving your gutters and downpipes clean and clear."
//       />
//       <div className="bg-[#F1F4F6] py-10">
//         <ImageTitleAndDescription
//           mainImage={GutterReplacementImage1}
//           mainImageClassName="max-h-[400px] max-w-[450px]"
//           optionalImage={GutterReplacementImage2}
//           optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg hidden lg:flex"
//           TitleAndDescriptionClassName="mb-7"
//           isShowCall={false}
//           direction="right"
//           mainTitle="Why Choose Us for Domestic Gutter Cleaning?"
//           description="We are happy to assist all residents with their enquiries. Boasting 13 years in the gutter installation business we really know our stuff, not only will the new guttering look nice it will be put up correctly ads well, so its always has a slight drop towards the downpipes. Incorrectly fitted gutters will encourage blockages and water damage. All our replacement work has a set guarantee of 10 years for the customers piece of mind."
//         />
//         <ImageTitleAndDescription
//           mainImage={repair1}
//           mainImageClassName="max-h-[400px] max-w-[450px]"
//           optionalImage={repair2}
//           optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg top-5 hidden lg:flex"
//           TitleAndDescriptionClassName="mb-7"
//           isShowCall={false}
//           direction="left"
//           mainTitle="Why Choose Us for Domestic Gutter Cleaning?"
//           description="We are happy to assist all residents with their enquiries. Boasting 13 years in the gutter installation business we really know our stuff, not only will the new guttering look nice it will be put up correctly ads well, so its always has a slight drop towards the downpipes. Incorrectly fitted gutters will encourage blockages and water damage. All our replacement work has a set guarantee of 10 years for the customers piece of mind."
//         />
//         <ImageTitleAndDescription
//           mainImage={RoofCleaning1}
//           mainImageClassName="max-h-[400px] max-w-[480px]"
//           optionalImage={RoofCleaning2}
//           optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg hidden lg:flex"
//           TitleAndDescriptionClassName="mb-7"
//           isShowCall={false}
//           direction="right"
//           mainTitle="Roof Cleaning"
//           description="When it comes to roof cleaning, we know what our customers expect and always deliver. With staff with a vast amount of roofing expertise we can safely move over rooftops without causing damage. We will inspect the roof and the tiles and choose the best method to clean the rooftop, we can use a low power pressure washer or a wire brush to remove the moss. After completion we will clear all mess from around the property and gutters, finally applying a solution that will halt the moss from returning so soon."
//         />
//       </div>
   
//     </div>
//   );
// };

// export default TestPage;

import React from 'react';

const page = () => {
    return (
        <div>
            
        </div>
    );
};

export default page;