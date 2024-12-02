import DomesticAndCommercialSpecialists from "@/assets/icons/DomesticAndCommercialSpecialists.png";
import DurableGutterReplacements from "@/assets/icons/DurableGutterReplacements.png";
import ExpertGutterRepairs from "@/assets/icons/ExpertGutterRepairs.png";
import FreeMinorRepairsWithEveryClean from "@/assets/icons/FreeMinorRepairsWithEveryClean.png";
import HighLevelCleaningExpertise from "@/assets/icons/HighLevelCleaningExpertise.png";
import PressureWashingServices from "@/assets/icons/PressureWashingServices.png";
import ThoroughGutterCleaning from "@/assets/icons/ThoroughGutterCleaning.png";
import CardWithTitle from "@/components/cards/CardWithTitle/CardWithTitle";
import MyButton from "@/components/ui/MyButton/MyButton";
import TitleWithBorder from "@/components/ui/TitleWithBorder/TitleWithBorder";
import Link from "next/link";

const cardData = [
  {
    image: ThoroughGutterCleaning,
    title: "Thorough Gutter Cleaning",
    description: "We ensure your gutters flow freely with a meticulous clean.",
  },
  {
    image: ExpertGutterRepairs,
    title: "Expert Gutter Repairs (Up to 4 Storeys High)",
    description:
      "We can handle most repairs up to 4 storeys high without scaffolding, minimising disruption to your London home or business. For even greater heights, we also offer cherry picker and scaffolding solutions.",
  },
  {
    image: FreeMinorRepairsWithEveryClean,
    title: "Free Minor Repairs with Every Clean",
    description:
      "Our gutter cleaning service includes complimentary leak sealing and minor adjustments, keeping your London property protected.",
  },
  {
    image: HighLevelCleaningExpertise,
    title: "High-Level Cleaning Expertise",
    description:
      "Our skilled technicians are adept at cleaning gutters on high-rise buildings.",
  },
  {
    image: DomesticAndCommercialSpecialists,
    title: "Domestic & Commercial Specialists",
    description:
      "We cater to both residential and commercial properties across London.",
  },
  {
    image: PressureWashingServices,
    title: "Pressure Washing Services",
    description:
      "We offer comprehensive pressure washing services in London to keep your property sparkling clean, from driveways and patios to gutters and soffits.",
  },
  {
    image: DurableGutterReplacements,
    title: "Durable Gutter Replacements",
    description:
      "We use high-quality materials to install long-lasting gutters on your London property.",
  },
];

const OurService = () => {
  return (
    <div className="container py-10 md:py-20">
      <TitleWithBorder title={"Our Service"} className="mb-2" />
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
        <p className="text-2xl md:text-4xl font-extrabold md:max-w-[500px] text-blue-primary mb-2">
          {"We Are Here For All Your London Guttering Needs"}
        </p>
        <Link href={"/get-quote"}>
          <MyButton title={"Get a Free Quote"} />
        </Link>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {cardData?.map((item, i) => (
          <CardWithTitle
            key={i}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            className="text-blue-primary flex items-start gap-3"
            imageClassName={"h-9 w-[40px] bg-[#0F426214] p-2 rounded"}
          />
        ))}
      </div>
    </div>
  );
};

export default OurService;
