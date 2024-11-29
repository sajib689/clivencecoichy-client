"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavMenu = ({
  className,
  isShowBorder = false,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  return (
    <div className={cn("flex  gap-6  font-normal ps-3", className)}>
      <Link href={"/"}>
        <div className="cursor-pointer hover:text-green-primary transition duration-200">
          Home
        </div>
      </Link>
      {isShowBorder && <div className="h-7 border "></div>}
      <Link href={"/domestic-cleaning"}>
        <div className="cursor-pointer hover:text-green-primary transition duration-200">
          Domestic Cleaning
        </div>
      </Link>
    {isShowBorder && <div className="h-7 border "></div>}
      <Link href={"/commercial-service"}>
        <div className="cursor-pointer hover:text-green-primary transition duration-200">
          Commercial Service
        </div>
      </Link>
    {isShowBorder && <div className="h-7 border "></div>}

      {/* <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
      dsfs
      </AccordionItem>
   
    </Accordion> */}
    </div>
  );
};

export default NavMenu;
