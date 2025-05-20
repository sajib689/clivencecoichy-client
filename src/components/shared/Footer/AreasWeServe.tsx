import Link from "next/link";

const AreasWeServe = () => {
  return (
    <div className="text-white">
      <h3 className="text-xl font-bold text-center mb-10">Areas we serve</h3>
      <div
        className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4`}
      >
        <div>
          <h2 className="font-bold text-lg">ILLINOIS</h2>
          <div className="mt-6 space-y-5">
            {ILLINOIS1?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">ILLINOIS</h2>
          <div className="mt-6 space-y-5">
            {ILLINOIS2?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Indiana</h2>
          <div className="mt-6 space-y-5">
            {indiana1?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Indiana</h2>
          <div className="mt-6 space-y-5">
            {indiana2?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Ohio</h2>
          <div className="mt-6 space-y-5">
            {ohio?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg">Kentucky</h2>
          <div className="mt-6 space-y-5">
            {Kentucky?.map((item, index) => (
              <Link key={index} href={"#"} className="hover:underline block">
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;

const ILLINOIS1 = [
  {
    title: "Addison	IL",
  },
  {
    title: "Algonquin	IL",
  },
  {
    title: "Alsip	IL",
  },
  {
    title: "Arlington Heights	IL",
  },
  {
    title: "Aroma Park	IL",
  },
  {
    title: "Aurora	IL",
  },
  {
    title: "Barrington	IL",
  },
  {
    title: "Bartlett	IL",
  },
  {
    title: "Batavia	IL",
  },
  {
    title: "Beaverville	IL",
  },
  {
    title: "Bedford Park	IL",
  },
  {
    title: "Beecher	IL",
  },
  {
    title: "Bellwood	IL",
  },
  {
    title: "Beecher	IL",
  },
  {
    title: "Bensenville	IL",
  },
  {
    title: "Berkeley	IL",
  },
  {
    title: "Berwyn	IL",
  },
];

const ILLINOIS2 = [
  { title: "Big Rock	IL" },
  { title: "Blackstone	IL" },
  { title: "Bloomingdale	IL" },
  { title: "Blue Island	IL" },
  { title: "Bolingbrook	IL" },
  { title: "Bonfield	IL" },
  { title: "Bourbonnais	IL" },
  { title: "Braceville	IL" },
  { title: "Bradley	IL" },
  { title: "Braidwood	IL" },
  { title: "Bridgeview	IL" },
  { title: "Bristol	IL" },
  { title: "Broadview	IL" },
  { title: "Brookfield	IL" },
  { title: "Buffalo Grove	IL" },
  { title: "Burbank	IL" },
  { title: "Burlington	IL" },
];
const indiana1 = [
  { title: "Beverly Shores	IN" },
  { title: "Boone Grove	IN" },
  { title: "Cedar Lake	IN" },
  { title: "Chesterton	IN" },
  { title: "Crown Point	IN" },
  { title: "Demotte	IN" },
  { title: "Dyer	IN" },
  { title: "East Chicago	IN" },
  { title: "Fair Oaks	IN" },
  { title: "Francesville	IN" },
  { title: "Gary	IN" },
  { title: "Griffith	IN" },
  { title: "Hammond	IN" },
  { title: "Hebron	IN" },
  { title: "Hobart	IN" },
  { title: "Kouts	IN" },
  { title: "La Crosse	IN" },
  { title: "Lake Station	IN" },
  { title: "Lake Village	IN" },
  { title: "Leroy	IN" },
];
const indiana2 = [
  { title: "Merrillville	IN" },
  { title: "Michigan City	IN" },
  { title: "Morocco	IN" },
  { title: "Mount Ayr	IN" },
  { title: "Munster	IN" },
  { title: "Portage	IN" },
  { title: "Porter	IN" },
  { title: "Rensselaer	IN" },
  { title: "Roselawn	IN" },
  { title: "Saint John	IN" },
  { title: "San Pierre	IN" },
  { title: "Schererville	IN" },
  { title: "Schneider	IN" },
  { title: "Shelby	IN" },
  { title: "Sumava Resorts	IN" },
  { title: "Tefft	IN" },
  { title: "Valparaiso	IN" },
  { title: "Wanatah	IN" },
  { title: "Wheeler	IN" },
  { title: "Whiting	IN" },
];

const ohio = [
  { title: "Addyston	OH" },
  { title: "Airport	OH" },
  { title: "Alpha	OH" },
  { title: "Amelia	OH" },
  { title: "Anderson	OH" },
  { title: "Ansonia	OH" },
  { title: "Arcanum	OH" },
  { title: "Arlington Heights	OH" },
  { title: "Batavia	OH" },
  { title: "Bethel	OH" },
  { title: "Blanchester	OH" },
  { title: "Blue Ash	OH" },
  { title: "Bond Hill	OH" },
  { title: "Bowersville	OH" },
  { title: "Bradford	OH" },
  { title: "Bridgetown	OH" },
  { title: "Brookville	OH" },
  { title: "Buford	OH" },
  { title: "Butlerville	OH" },
  { title: "Cable	OH" },
];

const Kentucky = [
  { title: "Alexandria	KY" },
  { title: "Bellevue	KY" },
  { title: "Burlington	KY" },
  { title: "Campsprings	KY" },
  { title: "Carthage	KY" },
  { title: "Covington	KY" },
  { title: "Crescent Springs	KY" },
  { title: "Dayton	KY" },
  { title: "Edgewood	KY" },
  { title: "Florence	KY" },
  { title: "Fort Mitchell	KY" },
  { title: "Florence	KY" },
  { title: "Fort Mitchell	KY" },
  { title: "Fort Thomas	KY" },
  { title: "Hebron	KY" },
  { title: "Highland Heights	KY" },
  { title: "Independence	KY" },
  { title: "Ludlow	KY" },
  { title: "Melbourne	KY" },
];
