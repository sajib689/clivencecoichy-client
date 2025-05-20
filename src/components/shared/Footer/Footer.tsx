"use client";
import logo from "@/assets/logo/footerLogo.png";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdMailOutline, MdOutlineCall } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { RiHomeOfficeLine, RiLinkedinFill } from "react-icons/ri";
import NavMenu from "../Navbar/NavMenu";
import AreasWeServe from "./AreasWeServe";

const thirdRow = [
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Reviews",
    link: "/review",
  },
  {
    title: "Certification",
    link: "/certification",
  },
  {
    title: "Careers",
    link: "/career",
  },
  {
    title: "Financing",
    link: "/financing",
  },
];
const forthRow = [
  {
    title: "1655 South Oak Park Ave, Tinley Park, IL 60477",
    icon: <PiBuildingOffice />,
  },
  {
    title: "8200 Beckett Park Dr West Chester Township OH 45069",
    icon: <RiHomeOfficeLine />,
  },

  {
    title: "708-949-4553",
    icon: <MdOutlineCall />,
  },
  {
    title: " info@arcroofs.com",
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
              Restoring Homes After Storms and Seasons.
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
                    title={<span className="text-white">Pricing</span>}
                  >
                    <div className=" ps-1">
                      <Link href={"/roof-cost-calculator"}>
                        <div
                          // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Roof Cost Calculator
                        </div>
                      </Link>
                      <Link href={"/siding-cost-calculator"}>
                        <div
                          // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Siding Cost Calculator
                        </div>
                      </Link>
                      <Link href={"/window-cost-calculator"}>
                        <div
                          // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                          className={cn(
                            "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200"
                          )}
                        >
                          Window Cost Calculator
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
              <Link href={item?.link} key={i}>
                <div className="cursor-pointer text-white hover:text-red-primary pb-5 rounded">
                  {item?.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-6">
              Get In Touch With us Today
            </h3>

            {forthRow?.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer text-gray-light hover:text-red-primary p-3 rounded flex items-start gap-2"
              >
                <div>{item?.icon}</div>
                <p className="w-full -mt-1"> {item?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t border-gray-400 my-10"></div>
        <AreasWeServe />
      </div>
    </div>
  );
};

export default Footer;
