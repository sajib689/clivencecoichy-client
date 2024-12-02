import { useGetAllServiceAreasQuery } from "@/redux/features/serviceArea/serviceAreaApi";
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
  console.log(getAllServiceAreasQuery);
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold text-center mb-10 md:mb-20">
        Areas we serve
      </h3>
      <div
  className={`grid grid-cols-1 xs:grid-cols-${getAllServiceAreasQuery?.data?.length > 2 ? 2 : getAllServiceAreasQuery?.data?.length}  md:grid-cols-${getAllServiceAreasQuery?.data?.length > 3 ? 3 : getAllServiceAreasQuery?.data?.length}  lg:grid-cols-${getAllServiceAreasQuery?.data?.length > 4 ? 4 : getAllServiceAreasQuery?.data?.length} xl:grid-cols-${getAllServiceAreasQuery?.data?.length > 6 ? 6 : getAllServiceAreasQuery?.data?.length} gap-4`}
>
     {getAllServiceAreasQuery?.data?.map(
          (section: RouteSection) => (
            <div key={section?._id}>
              {section?.list?.map((item, ) => (
                <div key={item?._id} className="mb-12">
                  <p className="mb-6">{item?.name}</p>
                  {item?.routes?.map((route) => (
                    <p key={route?._id} className="my-2 text-green-primary">
                      {route?.code} {route?.name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AreasWeServe;
