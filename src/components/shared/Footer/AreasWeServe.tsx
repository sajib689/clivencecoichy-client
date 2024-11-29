import React from "react";

type Route = {
  code: string;
  name: string;
};

type RouteList = {
  name: string;
  routes: Route[];
};

type RouteSection = {
  section: string;
  list: RouteList[];
};

const sections: RouteSection[] = [
  {
    section: "section 1",
    list: [
      {
        name: "Central",
        routes: [
          { code: "WC1", name: "Camden" },
          { code: "WC2", name: "Strand" },
          { code: "EC1", name: "Clerkenwell" },
          { code: "EC2", name: "Bishopsgate" },
          { code: "EC3", name: "Fenchurch Street" },
          { code: "EC4", name: "Fleet Street" },
        ],
      },
      {
        name: "Eastern",
        routes: [
          { code: "E1", name: "Whitechapel" },
          { code: "WC2", name: "Strand" },
          { code: "EC1", name: "Clerkenwell" },
          { code: "EC2", name: "Bishopsgate" },
          { code: "EC3", name: "Fenchurch Street" },
          { code: "EC4", name: "Fleet Street" },
        ],
      },
    ],
  },
  {
    section: "section 2",
    list: [
      {
        name: "Central 3",
        routes: [
          { code: "WC1", name: "Camden" },
          { code: "WC2", name: "Strand" },
          { code: "EC1", name: "Clerkenwell" },
          { code: "EC2", name: "Bishopsgate" },
          { code: "EC3", name: "Fenchurch Street" },
          { code: "EC4", name: "Fleet Street" },
        ],
      },
      {
        name: "Central 4",
        routes: [
          { code: "WC1", name: "Camden" },
          { code: "WC2", name: "Strand" },
          { code: "EC1", name: "Clerkenwell" },
          { code: "EC2", name: "Bishopsgate" },
          { code: "EC3", name: "Fenchurch Street" },
          { code: "EC4", name: "Fleet Street" },
        ],
      },
    ],
  },
];

const AreasWeServe = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold text-center mb-10 md:mb-20">
        Areas we serve
      </h3>
      <div className="grid grid-cols-6 gap-4">
        {sections?.map((section, i) => (
          <div key={i}>
            {section?.list?.map((item, j) => (
              <div key={j} className="mb-12">
                <p className="mb-6">
                  {item?.name}
                </p>
                {item?.routes?.map((route, k) => (
                  <p key={k} className="my-2 text-green-primary">
                    {route?.code} {route?.name}
                  </p>
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
