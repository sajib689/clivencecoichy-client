"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({
  className,
  isShowBorder = false,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex  gap-6  font-normal ps-3", className)}>
      <Link href={"/"}>
        <div 
        // className="cursor-pointer hover:text-green-primary transition duration-200"
         className={cn(
          "cursor-pointer hover:text-green-primary transition duration-200",
          pathname === "/" && "text-green-primary font-semibold"
        )}
        >
          Home
        </div>
      </Link>
      {isShowBorder && <div className="h-7 border "></div>}
      <Link href={"/domestic-cleaning"}>
        <div  className={cn(
            "cursor-pointer hover:text-green-primary transition duration-200",
            pathname === "/domestic-cleaning" && "text-green-primary font-semibold"
          )}>
          Domestic Cleaning
        </div>
      </Link>
    {isShowBorder && <div className="h-7 border "></div>}
      <Link href={"/commercial-service"}>
        <div  className={cn(
            "cursor-pointer hover:text-green-primary transition duration-200",
            pathname === "/commercial-service" && "text-green-primary font-semibold"
          )}>
          Commercial Service
        </div>
      </Link>
    {isShowBorder && <div className="h-7 border "></div>}
    </div>
  );
};

export default NavMenu;
