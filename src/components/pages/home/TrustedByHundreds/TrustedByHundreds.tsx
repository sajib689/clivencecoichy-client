import establishedIn from "@/assets/establishedIn.png";
import trustedHuman from "@/assets/home/EnjoyFreeBasicRepairs.png";
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
        mainImageClassName="h-[300px] xs:h-[400px] md:h-[600px] max-w-[500px] object-top"
        optionalImage={establishedIn}
        optionalImageClassName="h-[60px] w-[100px] md:h-[120px] md:w-[200px] lg:bottom-[100px] shadow-lg"
        TitleAndDescriptionClassName=""
        smallTitle="Unbeatable Experience & Reputation"
        mainTitle="Enjoy free basic repairs with every gutter cleant We'll seal drips and mako minor adjustments to koop your gutters in top shape"
        description="With over a decade of experience, we’ve tackled all types of guttering issues in London. Browse through hundreds of positive reviews on Google and Which? Trusted Traders, dating back to 2013, to see what our satisfied customers say!"
      >
        <div className="pt-5 pb-8 container flex flex-col gap-3">
          {TrustedByHundredsList?.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline
                size={25}
                className="text-green-primary"
              />{" "}
              <p className="text-blue-primary font-bold text-sm sm:text-xl">{item}</p>
            </div>
          ))}
        </div>
      </ImageTitleAndDescription>
    </div>
  );
};

export default TrustedByHundreds;
