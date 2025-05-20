import Link from "next/link";

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
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold text-center mb-10">Areas we serve</h3>
      <div
        className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4`}
      >
        <div>
          <h2 className="font-bold text-lg">ILLINOIS</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">ILLINOIS</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">Indiana</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">Indiana</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">Ohio</h2>
        </div>
        <div>
          <h2 className="font-bold text-lg">Kentucky</h2>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;
