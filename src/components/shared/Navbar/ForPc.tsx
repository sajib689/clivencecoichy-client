"use client";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FaCaretDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const ForPc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="container hidden lg:flex items-center justify-between ">
      <Link href={"/"} className="">
        <div className="flex items-center gap-2 h-20 w-40">
          <Image
            src={logo}
            alt="Booksy.buzz"
            width={400}
            height={400}
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
          <div 
        // className="cursor-pointer  hover:text-green-primary transition duration-200 flex gap-3 items-center"
          
          className={cn(
            "cursor-pointer  hover:text-green-primary transition duration-200 flex gap-3 items-center",
            pathname === "/gutter-fascia-soffit-repair-replacement" && "text-green-primary ",
            pathname === "/pressure-washing" && "text-green-primary "
          )}>
            <p> Other Service</p>{" "}
            <FaCaretDown className={cn(dropdownOpen && "rotate-180")} />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
              <Link href={"/gutter-fascia-soffit-repair-replacement"}>
                <div 
                // className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 mb-2 rounded"
                className={cn(
                  "cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                  pathname === "/gutter-fascia-soffit-repair-replacement" && "text-green-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                )}
                >
                  Gutter, Fascia & Soffit Repair/Replacement
                </div>
              </Link>
              <Link href={"/pressure-washing"}>
                <div 
                // className="cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 rounded"
                className={cn(
                  "cursor-pointer hover:text-green-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                  pathname === "/pressure-washing" && "text-green-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                )}
                >
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
     
            <a
                    href="tel:02089455711"
                   
                  >
                       <h4 className="text-white text-2xl font-bold">0208 945 5711</h4>
                  </a>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
