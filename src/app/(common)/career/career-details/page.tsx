import CareerDetails from "@/components/pages/career/CareerDetails";
import CareerDetailsBanner from "@/components/shared/commonBanner/CareerDetailsBanner";

const page = () => {
  return (
    <div>
      <CareerDetailsBanner title="<span>Ready to Elevate Your <br/> Career?</span>" />
      <CareerDetails />
    </div>
  );
};

export default page;
