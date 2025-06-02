"use client";

import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { Button, Divider, Input } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo/redTextLogo.png";
import { FaCalculator } from "react-icons/fa6";

const FinanceComponent = () => {
  const [inputValue, setInputValue] = useState("");

  function getMonthlyPayment(cost: number, months: number): number {
    const year = months / 12;
    const totalCost = cost / months;
    // const interestRate = year + year * 1.9733;
    if (year >= 10) {
      if (cost > 100) {
        return totalCost + totalCost * 0.59 - 1;
      }
      return totalCost + totalCost * 0.59; // If interest rate is 0, return simple division
    }
    return cost / months;
  }

  const oneYEAR_PAYMENT = getMonthlyPayment(Number(inputValue), 12).toFixed(2);
  const tenYEAR_PAYMENT = getMonthlyPayment(Number(inputValue), 120).toFixed(2);

  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          subTitle="Step"
          description="Your local contractors for roofing, siding, windows, and gutters in Illinois, Indiana, Ohio, and Kentucky."
        >
          3 ways to pay
        </SectionHeader>

        {/* buttons  */}
        <div className="flex items-center gap-5 flex-wrap mt-8 ">
          <Button
            size="large"
            className="flex-1 border-red-primary hover:!border-red-primary hover:!bg-red-primary bg-transparent border text-red-primary hover:!text-white text-lg"
          >
            Roofing Financing
          </Button>
          <Button
            size="large"
            className="flex-1  border-red-primary hover:!border-red-primary hover:!bg-red-primary bg-transparent border text-red-primary hover:!text-white text-lg"
          >
            Window Financing
          </Button>
          <Button
            size="large"
            className="flex-1  border-red-primary hover:!border-red-primary hover:!bg-red-primary bg-transparent border text-red-primary hover:!text-white text-lg"
          >
            Siding Financing
          </Button>
        </div>

        {/* contents  */}
        <div className="mt-12 grid grid-cols-12 gap-10">
          {/* left  */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
            {/* card  */}
            <div className="flex flex-col items-center justify-center p-5 lg:p-8 rounded-xl gap-4 bg-gray-light">
              <Button className="rounded-full w-8 h-8 p-1 mx-auto bg-red-primary text-white">
                1
              </Button>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400">
                PAY IN FULL
              </h2>
              <h3 className="text-xl md:text-2xl text-title font-semibold">
                Done & done
              </h3>
              <p className="text-sm font-semibold">
                Another project checked off the list.
              </p>
              <div className="p-8">
                <Image src={logo} alt="logo" />
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <div className="flex items-center gap-5 justify-between">
              {/* 1  */}
              <div className="flex flex-col items-center justify-center p-5 gap-5 rounded-xl">
                <Button className="rounded-full w-8 h-8 p-1 mx-auto bg-red-primary text-white">
                  2
                </Button>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-primary">
                  1 YEAR
                </h2>
                <h3 className="text-xl md:text-2xl text-title font-semibold">
                  0% INTEREST
                </h3>
                <p className="text-sm font-semibold text-center">
                  Enjoy 12 months of no mess no <br /> fuss payments
                </p>
              </div>
              {/* 2  */}
              <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-xl">
                <Button className="rounded-full w-8 h-8 p-1 mx-auto bg-red-primary text-white">
                  3
                </Button>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-primary">
                  10 YEAR
                </h2>
                <h3 className="text-xl md:text-2xl text-title font-semibold">
                  PAYMENT PLAN
                </h3>
                <p className="text-sm font-semibold">
                  Caught off guard by your exterior project?
                  <br /> Don&aps;t sweat it - we have your back!
                </p>
              </div>
            </div>
            {/* divider  */}
            <Divider className="my-10">
              <p className="!text-sm font-normal flex items-center gap-2">
                Payment <FaCalculator className="text-yellow-500" /> Estimator
              </p>
            </Divider>

            <div className="flex flex-col items-center justify-center gap-5 mt-8">
              <h2 className="text-sm font-normal text-title">
                Enter estimated project cost:
              </h2>
              {/* input */}
              <div className="flex items-center gap-2">
                ${" "}
                <Input
                  type="number"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  value={inputValue}
                  placeholder="0.00"
                  className="focus:!border-red-primary hover:!border-red-primary max-w-[200px] "
                />
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-10 mt-10">
              <div className="flex flex-col items-center justify-center p-5  gap-5 ">
                <h2 className="text-2xl font-bold text-title text-center ">
                  <span className="text-red-primary"> 1 YEAR,</span> <br /> +{" "}
                  <span className="text-red-primary">$0</span> DOWN
                </h2>
                <h3 className="text-xl md:text-2xl text-title font-semibold">
                  <span className="text-yellow-400">${oneYEAR_PAYMENT} </span>/{" "}
                  <span className="text-[16px]">per month</span>
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-5  gap-5 ">
                <h2 className="text-2xl font-bold text-title text-center ">
                  <span className="text-red-primary"> 10 YEAR,</span> <br /> +{" "}
                  <span className="text-red-primary">$0</span> DOWN
                </h2>
                <h3 className="text-xl md:text-2xl text-title font-semibold">
                  <span className="text-yellow-400">${tenYEAR_PAYMENT} </span>/{" "}
                  <span className="text-[16px]">per month</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceComponent;
