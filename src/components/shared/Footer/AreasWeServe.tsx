import { useGetAllServiceAreasQuery } from "@/redux/features/serviceArea/serviceAreaApi";
import Link from "next/link";
import React from "react";

type Route = {
  _id?: string;
  code: string;
  name: string;
};

type RouteList = {
  _id?: string;
  name: string;
  routes: Route[];
};

type RouteSection = {
  _id?: string;
  section: string;
  list: RouteList[];
};

const AreasWeServe = () => {
  const { data: getAllServiceAreasQuery } =
    useGetAllServiceAreasQuery(undefined);
    const dataLength = getAllServiceAreasQuery?.data?.length || 0;
    const gridCols = {
      xs: dataLength > 2 ? 2 : dataLength,
      md: dataLength > 3 ? 3 : dataLength,
      lg: dataLength > 4 ? 4 : dataLength,
      xl: dataLength > 6 ? 6 : dataLength,
    };
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold text-center mb-10 md:mb-20">
        Areas we serve
      </h3>
      <div
         className={`grid grid-cols-1 xs:grid-cols-${gridCols.xs} md:grid-cols-${gridCols.md} lg:grid-cols-${gridCols.lg} xl:grid-cols-${gridCols.xl} gap-4`}

      >
        {getAllServiceAreasQuery?.data?.map((section: RouteSection) => (
          <div key={section?._id}>
            {section?.list?.map((item) => (
              <div key={item?._id} className="mb-12">
                <p className="mb-6">{item?.name}</p>
                {item?.routes?.map((route) => (
                  <Link key={route?._id} href={"/get-quote"}>
                    <p className="my-2 text-green-primary">
                      {route?.code} {route?.name}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasWeServe;
