import TitleWithBorder from "@/components/ui/TitleWithBorder/TitleWithBorder";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface TitleAndDescriptionProps {
  mainTitle: string;
  mainTitleClassName?: string;
  smallTitle?: string;
  smallTitleClassName?: string;
  description?: string;
  className?: string;
  borderClassName?: string;
}

const TitleAndDescription: FC<TitleAndDescriptionProps> = ({
  mainTitle,
  mainTitleClassName,
  smallTitle,
  smallTitleClassName,
  description,
  className,
  borderClassName,
}) => {
  return (
    <div className="">
      <div
        className={cn(
          "flex flex-col md:flex-row justify-between gap-2 text-blue-primary",
          className
        )}
      >
        <div className={cn("w-full", mainTitleClassName)}>
          <TitleWithBorder
            title={smallTitle}
            className={smallTitleClassName}
            borderColor={borderClassName}
          />
          <p className={cn("text-2xl md:text-4xl font-extrabold md:max-w-[520px]   mb-2", mainTitleClassName)}>
            {mainTitle}
          </p>
        </div>
        <div className="w-full text-gray-light text-base">{description}</div>
      </div>
    </div>
  );
};

export default TitleAndDescription;
