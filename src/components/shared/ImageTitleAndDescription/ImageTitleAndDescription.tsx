import React, { FC, ReactNode } from "react";

import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription";
import { IoIosCall } from "react-icons/io";
import MyButton from "@/components/ui/MyButton/MyButton";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ImageTitleAndDescriptionProps {
  children?: ReactNode;
  mainImage: string | StaticImageData;
  optionalImage?: string | StaticImageData;
  mainImageClassName?: string;
  optionalImageClassName?: string;
  TitleAndDescriptionClassName?: string;
  smallTitle?: string;
  mainTitle: string;
  description: string;
  isShowCall?: boolean;
  direction? : "left" | "right" ;
}

const ImageTitleAndDescription: FC<ImageTitleAndDescriptionProps> = ({
  children,
  mainImage,
  optionalImage,
  mainImageClassName,
  optionalImageClassName,
  TitleAndDescriptionClassName,
  smallTitle,
  mainTitle,
  description,
  isShowCall = true,
  direction = "left"
}) => {
  return (
    <div className="">
      <div className="container  py-8">
        <div className={cn("flex flex-col  items-center gap-3", direction == "left" && "md:flex-row", direction == "right" && "md:flex-row-reverse" )}>
          <div className="w-full">
            <div
              className={cn(
                "h-[400px] relative rounded-md ",
                mainImageClassName
              )}
            >
              <ImageWithFallBackSystem
                imageSrc={mainImage}
                alt="image"
                className={cn(
                  "h-[400px] w-full rounded-md overflow-hidden",
                  mainImageClassName
                )}
              />
              {optionalImage ? (
                <ImageWithFallBackSystem
                  imageSrc={optionalImage}
                  alt="image"
                  className={cn(
                    " rounded-md overflow-hidden absolute bottom-0 right-0  lg:-bottom-10 lg:-right-7 xl:-right-10 shadow-md",
                    optionalImageClassName
                  )}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={cn("w-full ")}>
            <TitleAndDescription
              className={cn("md:flex-col", TitleAndDescriptionClassName)}
              smallTitle={smallTitle}
              smallTitleClassName="mb-1"
              mainTitle={mainTitle}
              description={description}
            />

            {children}
            {isShowCall && (
              <div className="container">
                <p className="text-sm font-bold mb-2 ps-1">Call / Whatsapp</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="rounded-full border border-green-primary text-green-primary ps-2 pe-3 py-1 flex items-center gap-2">
                    <div className="bg-green-primary p-2 text-white rounded-full">
                      <IoIosCall />
                    </div>{" "}
                    0208 945 5711
                  </div>
                  <div>
                    <MyButton title="Get a Free Quote Today" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTitleAndDescription;
