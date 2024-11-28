import ComprehensiveServices from "@/assets/icons/ComprehensiveServices.png";
import ExceptionalCustomerSatisfaction from "@/assets/icons/ExceptionalCustomerSatisfaction.png";
import QuickAndEfficientService from "@/assets/icons/QuickAndEfficientService.png";
import TrustedProfessionals from "@/assets/icons/TrustedProfessionals.png";
import CardWithTitle from "@/components/cards/CardWithTitle/CardWithTitle";
import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";
import DigitalPhotosForYourPeaceOfMind from "@/assets/icons/DigitalPhotosForYourPeaceOfMind.png";
import AllWorkGuaranteed from "@/assets/icons/AllWorkGuaranteed.png";
import NoObligationQuote from "@/assets/icons/NoObligationQuote.png";
import FullyInsuredAndTrainedStaff from "@/assets/icons/FullyInsuredAndTrainedStaff.png";
import AllMinorRepairsIncluded from "@/assets/icons/AllMinorRepairsIncluded.png";

const cardData = [
  {
    image: DigitalPhotosForYourPeaceOfMind,
    title: "Digital Photos for your peace of mind",
  },
  {
    image: AllWorkGuaranteed,
    title: "All work guaranteed",
  },
  {
    image: NoObligationQuote,
    title: "Free, fast, No obligation quote",
  },
  {
    image: FullyInsuredAndTrainedStaff,
    title: "Fully insured and trained staff",
  },
  {
    image: AllMinorRepairsIncluded,
    title: "All minor repairs included",
  },
];

const Features = () => {
  return (
    <div>
      <div className="bg-[#0F4262] py-10 md:py-20">
        <div className="container">
         
          <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-x-4 gap-y-5">
            {cardData?.map((item, i) => (
              <CardWithTitle
                key={i}
                image={item?.image}
                title={item?.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
