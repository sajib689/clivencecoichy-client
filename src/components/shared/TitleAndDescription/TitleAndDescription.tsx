import TitleWithBorder from "@/components/ui/TitleWithBorder/TitleWithBorder";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface TitleAndDescriptionProps {
  smallTitle: string;
  mainTitle: string;
  description: string;
  className: string;
}

const TitleAndDescription: FC<TitleAndDescriptionProps> = ({
  smallTitle,
  mainTitle,
  description,
  className,
}) => {
  return (
    <div className="container my-5 md:my-12">
      <div
        className={cn(
          "flex flex-col md:flex-row justify-between gap-2 mb-6 md:mb-12",
          className
        )}
      >
        <div className="w-full">
          <TitleWithBorder title={smallTitle} className="mb-2" />
          <p className="text-2xl md:text-4xl font-extrabold md:max-w-[520px]  text-blue-primary mb-2">
            {mainTitle}
          </p>
        </div>
        <div className="w-full text-gray-light text-base">{description}</div>
      </div>
    </div>
  );
};

export default TitleAndDescription;
