"use client";
import React from "react";
import logo from "@/assets/logo/footerLogo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { RiHomeOfficeLine, RiLinkedinFill } from "react-icons/ri";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import NavMenu from "../Navbar/NavMenu";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import { PiBuildingOffice } from "react-icons/pi";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";
import AreasWeServe from "./AreasWeServe";

const thirdRow = [
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Reviews",
    link: "/#review-section",
  },
  {
    title: "Terms and Conditions",
    link: "/",
  },
  {
    title: "Important information",
    link: "/",
  },
];
const forthRow = [
  {
    title: "Lee Wiltshire t/a London Gutter Clean LTD",
    icon: <PiBuildingOffice />,
  },
  {
    title: "Company Number- 13064005 Registered in England & Wales",
    icon: <RiHomeOfficeLine />,
  },
  {
    title: "21 Mead Road, Richmond, Middlesex, TW10 7LG",
    icon: <IoLocationOutline />,
  },
  {
    title: "0208 945 5711",
    icon: <MdOutlineCall />,
  },
  {
    title: "info@londongutterclean.co.uk",
    icon: <MdMailOutline />,
  },
];
const Footer = () => {
  return (
    <div className="bg-[#0F4262] py-20">
     <div className="container">
     <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex flex-col gap-6">
          <div className="h-24 w-56 ">
            <Image
              src={logo}
              className="object-contain"
              height={400}
              width={400}
              alt="image"
            />
          </div>
          <p className="text-gray-light text-base font-medium">
            We’ll ensure your gutters function flawlessly and enhance the
            overall look of your London home or business.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-[#36607b] p-2 rounded-md text-white">
              <FaFacebookF size={18} />
            </div>
            <div className="bg-[#36607b] p-2 rounded-md text-white">
              <RiLinkedinFill size={20} />
            </div>
            <div className="bg-[#36607b] p-2 rounded-md text-white">
              <IoLogoWhatsapp size={20} />
            </div>
          </div>
        </div>
        <div>
          <div className=" w-full text-base text-white">
            <NavMenu className="flex-col mb-4" />
            <div className="ps-1  w-full max-w-44">
              <Accordion isCompact className="">
                <AccordionItem
                  key="1"
                  aria-label="Other Service"
                  title={<span className="text-white">Other Service</span>}
                >
                  <div className=" ps-1">
                    <Link href={"/gutter-fascia-soffit-repair-replacement"}>
                      <div className="cursor-pointer hover:text-green-primary  p-2 mb-2 rounded">
                        Gutter, Fascia & Soffit Repair/Replacement
                      </div>
                    </Link>{" "}
                    <Link href={"/pressure-washing"}>
                      <div className="cursor-pointer hover:text-green-primary  p-2 rounded">
                        Pressure Washing
                      </div>
                    </Link>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div>
          {thirdRow?.map((item, i) => (
            <Link href={item?.link}    key={i} >
            <div
           
              className="cursor-pointer text-white hover:text-green-primary pb-5 rounded"
              >
              {item?.title}
            </div>
              </Link>
          ))}
        </div>
        <div className="text-white">
          <h3 className="text-xl font-bold mb-6">Get In Touch With us Today</h3>

          {forthRow?.map((item, i) => (
            <div
              key={i}
              className="cursor-pointer text-gray-light hover:text-green-primary p-3 rounded flex items-start gap-2"
            >
              <div>{item?.icon}</div>
              <p className="w-full -mt-1"> {item?.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t my-10 md:my-20"></div>
      <AreasWeServe/>
     </div>
    </div>
  );
};

export default Footer;
