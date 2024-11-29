'use client'
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import NavMenu from "../Navbar/NavMenu";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#0F4262] py-20">
      <div className="container grid grid-cols-4">
        <div className="flex flex-col gap-6">
          <div className="h-28 w-28 ">
            <Image
              src={logo}
              className="object-contain"
              height={200}
              width={200}
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
                <div className="ps-1 ">
                  <Accordion isCompact className="!text-white">
                    <AccordionItem
                      key="1"
                      aria-label="Other Service"
                      title={<span className="text-white">Other Service</span>}
                    >
                      <div className=" ps-1">
                        <Link href={"/gutter-fascia-soffit-repair-replacement"}>
                          <div className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 mb-2 rounded">
                          Gutter, Fascia & Soffit Repair/Replacement
                          </div>
                        </Link>{" "}
                        <Link href={"/pressure-washing"}>
                          <div className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 rounded">
                            Pressure Washing
                          </div>
                        </Link>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>


        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
