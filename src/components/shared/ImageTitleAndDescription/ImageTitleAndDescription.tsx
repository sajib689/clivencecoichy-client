import { FC, ReactNode } from "react";

import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import CallAndWhatsapp from "../callAndWhatsapp/callAndWhatsapp";
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription";

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
  position?: "center" | "top" | "bottom"
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
  direction = "left",
  position = "center"
}) => {
  return (
    <div className="">
      <div className="container  py-8">
        <div className={cn("flex flex-col items-center  gap-5 md:gap-8 ", direction == "left" && "md:flex-row", direction == "right" && "md:flex-row-reverse", position == "center" && "items-center", position == "top" && "items-start", position == "bottom" && "items-end" )}>
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
              <CallAndWhatsapp/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTitleAndDescription;
