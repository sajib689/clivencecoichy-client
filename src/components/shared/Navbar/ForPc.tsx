"use client";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FaCaretDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const ForPc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="container hidden lg:flex items-center justify-between ">
      <Link href={"/"} className="">
        <div className="flex items-center gap-2 h-20 w-20">
          <Image
            src={logo}
            alt="Booksy.buzz"
            width={200}
            height={200}
            className="rounded object-contain"
          />
        </div>
      </Link>
      <div className="flex items-center gap-5 text-base text-[#808080]">
        <NavMenu className="lg:items-center" isShowBorder={true}/>
        {/* "Other Service" Dropdown  */}
        <div
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          className="relative py-5 flex"
        >
          <div className="cursor-pointer  hover:text-green-primary transition duration-200 flex gap-3 items-center">
            <p> Other Service</p>{" "}
            <FaCaretDown className={cn(dropdownOpen && "rotate-180")} />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
              <Link href={"/gutter-fascia-soffit-repair-replacement"}>
                <div className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 mb-2 rounded">
                  Gutter, Fascia & Soffit Repair/Replacement
                </div>
              </Link>
              <Link href={"/pressure-washing"}>
                <div className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 rounded">
                  Pressure Washing
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="h-[80px] w-[220px] bg-green-primary flex items-center ps-5">
        <div>
          <p className="text-sm font-medium text-white ">Call us on</p>
          <h4 className="text-white text-2xl font-bold">0208 945 5711</h4>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
