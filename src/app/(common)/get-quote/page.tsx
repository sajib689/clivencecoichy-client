import ImageTitleAndDescription from "@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription";
import React from "react";
import getQuoteImage from "@/assets/getQuoteImage.png";
import Image from "next/image";
import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";
import GetQuoteForm from "./getQuoteForm";
import InfoCard from "@/components/cards/InfoCard/InfoCard";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { LuMapPin } from "react-icons/lu";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";


const informations  = [
  {
    icon : <IoMdCall size={25} className="text-green-primary" />,
    title: "Call/Whatsapp",
    description: "0208 945 5711",
  },
  {
    icon : <AiOutlineMail size={25} className="text-green-primary" />,
    title: "Mail Us On",
    description: "info@londongutterclean.co.uk",
  },
  {
    icon : <LuMapPin size={25} className="text-green-primary" />,
    title: "Visit Us At",
    description: "21 Mead Road, Richmond, Middlesex, TW10 7LG",
  },
]
const GetQuotePage = () => {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row gap-5 mb-10 md:mb-20">
        <div className="w-full h-full max-h-[800px]">
          <Image
            src={getQuoteImage}
            height={1200}
            width={800}
            alt="image"
            className="object-contain"
          />
        </div>
        <div className="w-full">
          <TitleAndDescription
            className=" md:flex-col"
            smallTitle="Get a Quote"
            smallTitleClassName="mb-1"
            mainTitle="Get Your Free Gutter Cleaning Quote Today!"
          />

          <GetQuoteForm/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
          informations?.map((item, i) => <InfoCard key={i} icon={item?.icon} title={item?.title} description={item?.description}/>)
        }

      </div>

      <TrustedTrader />
      <BlogComponent
        smallTitle="Blog"
        mainTitle="Insights & Inspiration: The LondonGutterClean Blog"
        topButtonText="Read All"
        topButtonTextLink={"blog"}
      />
      <ImproveProperty/>
    </div>
  );
};

export default GetQuotePage;
