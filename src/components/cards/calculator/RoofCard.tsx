import Image, { StaticImageData } from "next/image";
import React from "react";

export type RoofType = {
  _id: string | number;
  name: string;
  image: string | StaticImageData;
  description?: string;
  __v?: number;
};

const RoofCard = ({
  data,
  isSelect,
}: {
  data: RoofType;
  isSelect?: boolean;
}) => {
  return (
    <div
      className={`flex ${
        data?.description ? "h-[220px]" : "h-[180px]"
      } w-[150px] flex-col p-5 cursor-pointer hover:border-red-primary duration-300 shadow items-center justify-center border-2 border-gray-light rounded-xl ${
        isSelect ? "border-red-primary" : "border-gray-light"
      }`}
    >
      <Image src={data?.image} width={100} height={100} alt="icon" />
      <h2 className="text-md mt-2 font-semibold !text-wrap text-center">
        {data?.name}
      </h2>
      {data?.description && (
        <p className="text-[10px] mt-2">{data?.description}</p>
      )}
    </div>
  );
};

export default RoofCard;
