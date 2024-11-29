import GraffitiRemovalService1 from "@/assets/GraffitiRemovalService1.png";
import GraffitiRemovalService2 from "@/assets/GraffitiRemovalService2.png";
import PressureWashingRoofImage1 from "@/assets/PressureWashingRoofImage1.png";
import PressureWashingRoofImage2 from "@/assets/PressureWashingRoofImage2.png";
import ImageTitleAndDescription from "@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription";

const FlipCardForPressureRoof = () => {
  return (
    <div className="bg-[#F1F4F6] py-2 md:py-12 md:mt-10">
      <ImageTitleAndDescription
        mainImage={PressureWashingRoofImage1}
        mainImageClassName="max-h-[400px] max-w-[450px]"
        optionalImage={PressureWashingRoofImage2}
        optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg hidden lg:flex"
        TitleAndDescriptionClassName="mb-7"
        isShowCall={false}
        direction="right"
        mainTitle="Pressure washing/roof cleaning service "
        description="When pressure washing a roof we always recommend to our customers to let us asses the roof and look at the tiles condition. Not all roofs are suitable to be pressure washed and may need to be hand cleaned by wired brush instead. On completion of roof cleans we will give the all guttering and surrounding area of the property a thorough clean. Then apply biocide to the roof, this will help prevent a speedy return of the moss and leaving your roof spotlessly clean."
      />
      <ImageTitleAndDescription
        mainImage={GraffitiRemovalService1}
        mainImageClassName="max-h-[400px] max-w-[450px]"
        optionalImage={GraffitiRemovalService2}
        optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg top-5 hidden lg:flex"
        TitleAndDescriptionClassName="mb-7"
        isShowCall={false}
        direction="left"
        mainTitle="Graffiti removal service "
        description="Graffiti removal is a challenging job that sometimes needs more then just pressure washing. We can pre treat the graffiti with a special chemical to break it down before pressure washing the graffiti afterwards. This will be a far superior method and leave the area looking much more presentable. The sooner you deal with graffiti a more of a deterrent it is against future vandalism. Call us today and get a free no obligation quote to get the graffiti cleaning service you deserve."
      />
 
    </div>
  );
};

export default FlipCardForPressureRoof;
