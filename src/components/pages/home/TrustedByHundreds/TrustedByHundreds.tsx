import establishedIn from "@/assets/establishedIn.png";
import trustedHuman from "@/assets/trustedHuman.png";
import ImageTitleAndDescription from "@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const TrustedByHundredsList = [
  "Over a Decade of Excellence",
  "Award-Winning Service",
  "Highly Rated by Customers",
  "Certified and Trusted",
];

const TrustedByHundreds = () => {
  return (
    <div className="py- md:py-20">
      <ImageTitleAndDescription
        mainImage={trustedHuman}
        mainImageClassName="max-h-[500px] max-w-[500px]"
        optionalImage={establishedIn}
        optionalImageClassName="h-[120px] w-[200px]"
        TitleAndDescriptionClassName=""
        smallTitle="Unbeatable Experience & Reputation"
        mainTitle="Trusted by Hundreds of Happy Customers Across London."
        description="With over a decade of experience, we’ve tackled all types of guttering issues in London. Browse through hundreds of positive reviews on Google and Which? Trusted Traders, dating back to 2013, to see what our satisfied customers say!"
      >
        <div className="pt-5 pb-8 container flex flex-col gap-3">
          {TrustedByHundredsList?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline
                size={25}
                className="text-green-primary"
              />{" "}
              <p className="text-blue-primary font-bold text-xl">{item}</p>
            </div>
          ))}
        </div>
      </ImageTitleAndDescription>
    </div>
  );
};

export default TrustedByHundreds;
