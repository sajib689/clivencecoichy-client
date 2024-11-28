import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import React, { FC } from "react";

interface SmallBannerProps {
  backgroundImage: string | StaticImageData;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SmallBanner: FC<SmallBannerProps> = ({
  backgroundImage,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName
}) => {
  const imageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <div
      className={cn("w-full  bg-cover bg-center", className)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div
        className={cn(
          "flex items-center w-full h-full",
          (title || description) && "bg-black bg-opacity-50 py-12"
        )}
      >
        <div className="container">
          {title && (
            <h1 className={cn("text-white text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 md:mb-4", titleClassName)}>
              {title}
            </h1>
          )}
          {description && (
            <p className={cn("text-white text-sm sm:text-base font-medium", descriptionClassName)}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
