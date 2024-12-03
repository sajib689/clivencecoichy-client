'use client'
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import Image from "next/image"; // Importing Image component from Next.js
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
  // Determine if backgroundImage is a string or StaticImageData
  const imageUrl =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full h-full">
        {/* Image component to fill the entire container */}
        <Image
          src={imageUrl}
          alt="Banner Image"
          layout="fill" // Makes the image fill the entire container
          objectFit="cover" // Ensures the image covers the area without stretching
          className="absolute top-0 left-0 z-0"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
          style={{
            background: `linear-gradient(90deg, rgba(0, 0, 0, 0.50) 41.73%, rgba(0, 0, 0, 0.00) 100%)`
          }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-20 py-12 container">
          {title && (
            <h1
              className={cn(
                "text-white text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 md:mb-4",
                titleClassName
              )}
            >
              {title}
            </h1>
          )}
          {description && (
            <p
              className={cn("text-white text-sm sm:text-base font-medium", descriptionClassName)}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
