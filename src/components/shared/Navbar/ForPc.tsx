"use client";
import React, { useState } from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FaCaretDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MyButton from "@/components/ui/MyButton/MyButton";

const ForPc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenPricing, setDropdownOpenPricing] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className="container hidden lg:flex py-3 items-center justify-between ">
        <Link href={"/"} className="">
          <div className="flex items-center gap-2 h-full w-28">
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
          <NavMenu className="lg:items-center" isShowBorder={true} />
          {/* "Other Service" Dropdown  */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative py-5 flex"
          >
            <div
              // className="cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center"

              className={cn(
                "cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center",
                pathname === "/gutter-fascia-soffit-repair-replacement" &&
                  "text-red-primary ",
                pathname === "/pressure-washing" && "text-red-primary "
              )}
            >
              <p> Other Services</p>{" "}
              <FaCaretDown className={cn(dropdownOpen && "rotate-180")} />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
                <Link href={"/gutter-fascia-soffit-repair-replacement"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/gutter-fascia-soffit-repair-replacement" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Gutter, Fascia & Soffit Repair/Replacement
                  </div>
                </Link>
                <Link href={"/pressure-washing"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/pressure-washing" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Pressure Washing
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="h-5 border "></div>
          <div
            onMouseEnter={() => setDropdownOpenPricing(true)}
            onMouseLeave={() => setDropdownOpenPricing(false)}
            className="relative py-5 flex"
          >
            <div
              // className="cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center"

              className={cn(
                "cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center",
                pathname === "/gutter-fascia-soffit-repair-replacement" &&
                  "text-red-primary ",
                pathname === "/pressure-washing" && "text-red-primary "
              )}
            >
              <p>Pricing</p>{" "}
              <FaCaretDown
                className={cn(dropdownOpenPricing && "rotate-180")}
              />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpenPricing && (
              <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
                <Link href={"/roof-cost-calculator"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/roof-cost-calculator" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Roof Cost Calculator
                  </div>
                </Link>
                <Link href={"/siding-cost-calculator"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/siding-cost-calculator" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Siding Cost Calculator
                  </div>
                </Link>
                <Link href={"/window-cost-calculator"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/window-cost-calculator" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Window Cost Calculator
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <MyButton title="Free Estimate" />
        </div>
      </div>
    </div>
  );
};

export default ForPc;
