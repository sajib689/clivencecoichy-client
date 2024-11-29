import DontLetCloggedBG from "@/assets/DontLetCloggedBG.png";
import CallAndWhatsapp from "@/components/shared/callAndWhatsapp/callAndWhatsapp";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface DontLetCloggedProps {
  title?: string;
  description?: string;
  className?: string;
}

const DontLetClogged: FC<DontLetCloggedProps> = ({

//   title,
//   description,
  className,
}) => {
  const imageUrl =
    typeof DontLetCloggedBG === "string" ? DontLetCloggedBG : DontLetCloggedBG.src;

  return (
    <div
      className={cn("w-full py-12 container bg-cover bg-center bg-black bg-opacity-50 rounded-md", className)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <div
        className={cn(
          "flex items-center w-full h-full",
          (title || description) && "bg-black bg-opacity-50"
        )}
      >
        <div className="container">
          {title && (
            <h1 className="text-white text-2xl xs:text-3xl md:text-5xl font-extrabold mb-2 md:mb-4">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-white text-sm sm:text-base font-medium">
              {description}
            </p>
          )}
        </div>
      </div> */}
      <div className="max-w-3xl mx-auto text-center">
        <h5 className="text-4xl font-extrabold text-white mb-6">Don’t let clogged gutters disrupt your business operations</h5>
        <p className="text-gray-light text-base font-medium mb-9">Contact London Gutter Cleaning, the trusted leader in commercial gutter cleaning and repairs in London. Call us now or fill out our online quote form for a fast and reliable service!</p>
   <div className="flex justify-center ">  <CallAndWhatsapp className="text-white   max-w-fit" direction="column"/></div>
      </div>
    </div>
  );
};

export default DontLetClogged;
