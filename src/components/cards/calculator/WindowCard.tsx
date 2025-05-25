"use client";

import { ReactNode, useState } from "react";
import { FaChevronDown, FaX } from "react-icons/fa6";

interface ProductSelectorProps {
  id: number;
  title: string;
  icon: ReactNode;
  quantity?: number;
  selectedSize?: string;
  sizes?: string[];
}

const WindowCard = ({ data }: { data: ProductSelectorProps }) => {
  const [quantity, setQuantity] = useState(data.quantity || 1);
  const [selectedSize, setSelectedSize] = useState(
    data.selectedSize || "Medium (70-90)"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sizes = data.sizes || [
    "Small (50-70)",
    "Medium (70-90)",
    "Large (90-110)",
  ];

  return (
    <div
      className={`flex flex-col lg:flex-row  w-full gap-5 p-5 cursor-pointer hover:border-red-primary duration-300 items-center justify-between border-2 border-gray-light rounded-xl`}
    >
      {/* Icon Section */}
      <div className="flex flex-1 items-center gap-5 justify-center w-24 h-24  rounded-lg bg-white">
        {data.icon}
      </div>

      {/* Title Section */}
      <div className="space-y-3">
        <div className="flex-1 text-left">
          <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
        </div>

        {/* Add Size Button */}
        {/* <div className="mr-8">
        <button className="text-gray-400 text-sm font-medium border-b border-gray-300 pb-1">
          Add Size
        </button>
      </div> */}

        {/* Quantity and Size Controls */}
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex items-center gap-5 space-x-6">
            {/* Quantity Section */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 font-medium">QTY</span>
              <FaX className="w-4 h-4 text-gray-400" />
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number.parseInt(e.target.value) || 1)
                }
                className="w-8 h-8 text-center text-sm border border-gray-300 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>
          </div>

          {/* Size Dropdown Section */}
          <div className="flex items-center gap-2 space-x-3">
            <span className="text-gray-600 font-medium">UI:</span>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-40 h-fit px-4 py-1 border border-gray-300 rounded-lg bg-white text-gray-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-[12px]">{selectedSize}</span>
                <FaChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedSize(size);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-1 text-md text-left text-gray-600 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowCard;
