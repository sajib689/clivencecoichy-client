import Image, { StaticImageData } from "next/image";

const CalculatorRightShowCard = ({
  data,
}: {
  data: {
    title: string;
    price: string | number;
    highPrice: string | number;
    image: StaticImageData | string;
  };
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5 hover:bg-white duration-300 rounded-xl cursor-pointer">
      <div className="col-span-12 sm:col-span-4 p-3">
        <Image src={data?.image} className="w-full h-full" alt="image" />
      </div>
      <div className="col-span-12 sm:col-span-8 py-5">
        <h2 className="text-xl font-bold mb-2 text-title">{data?.title}</h2>
        {data?.price || data?.highPrice ? (
          <p className="text-lg font-bold text-red-primary mb-2">
            ${data?.price} - ${data?.highPrice}
          </p>
        ) : (
          <p className="text-red-primary">Finish form to see pricing</p>
        )}
        {/* <p>
          America&apos;s favorite, bang for buck, aesthetically pleasing roofing
          system.
        </p> */}
      </div>
    </div>
  );
};

export default CalculatorRightShowCard;
