import React, { ReactNode } from "react";

interface PageProp {
  id: number;
  title: string;
  icon: ReactNode;
  description?: string;
}

const RoofCard = ({ data }: { data: PageProp }) => {
  return (
    <div
      className={`flex ${
        data?.description ? "h-[200px]" : "h-[150px]"
      } w-[150px] flex-col p-5 cursor-pointer hover:border-red-primary duration-300 items-center justify-center border-2 border-gray-light rounded-xl`}
    >
      {data?.icon}
      <h2 className="text-md mt-2 font-semibold !text-wrap text-center">
        {data?.title}
      </h2>
      {data?.description && (
        <p className="text-[10px] mt-2">{data?.description}</p>
      )}
    </div>
  );
};

export default RoofCard;
