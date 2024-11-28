import GutterReplacementImage1 from "@/assets/GutterReplacementImage1.png";
import GutterReplacementImage2 from "@/assets/GutterReplacementImage2.png";
import repair1 from "@/assets/repair1.png";
import repair2 from "@/assets/repair2.png";
import RoofCleaning1 from "@/assets/RoofCleaning1.png";
import RoofCleaning2 from "@/assets/RoofCleaning2.png";
import ImageTitleAndDescription from "@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription";

const FlipCardForCleaning = () => {
  return (
    <div className="bg-[#F1F4F6] py-2 md:py-12 md:mt-10">
      <ImageTitleAndDescription
        mainImage={GutterReplacementImage1}
        mainImageClassName="max-h-[400px] max-w-[450px]"
        optionalImage={GutterReplacementImage2}
        optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg hidden lg:flex"
        TitleAndDescriptionClassName="mb-7"
        isShowCall={false}
        direction="right"
        mainTitle="Gutter Replacement"
        description="We are happy to assist all residents with their enquiries. Boasting 13 years in the gutter installation business we really know our stuff, not only will the new guttering look nice it will be put up correctly ads well, so its always has a slight drop towards the downpipes. Incorrectly fitted gutters will encourage blockages and water damage. All our replacement work has a set guarantee of 10 years for the customers piece of mind."
      />
      <ImageTitleAndDescription
        mainImage={repair1}
        mainImageClassName="max-h-[400px] max-w-[450px]"
        optionalImage={repair2}
        optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg top-5 hidden lg:flex"
        TitleAndDescriptionClassName="mb-7"
        isShowCall={false}
        direction="left"
        mainTitle="Gutter Repairs"
        description="All our repairs come with a 3 to 10 year guarantee depending on the work needing to be carried out. Sometimes we can patch up a leak with sealant or if it’s metal guttering we use a fibreglass coating system, if the leaky gutter is beyond repair we will quote to replace the part in question."
      />
      <ImageTitleAndDescription
        mainImage={RoofCleaning1}
        mainImageClassName="max-h-[400px] max-w-[480px]"
        optionalImage={RoofCleaning2}
        optionalImageClassName="max-h-[200px] max-w-[150px] shadow-lg hidden lg:flex"
        TitleAndDescriptionClassName="mb-7"
        isShowCall={false}
        direction="right"
        mainTitle="Roof Cleaning"
        description="When it comes to roof cleaning, we know what our customers expect and always deliver. With staff with a vast amount of roofing expertise we can safely move over rooftops without causing damage. We will inspect the roof and the tiles and choose the best method to clean the rooftop, we can use a low power pressure washer or a wire brush to remove the moss. After completion we will clear all mess from around the property and gutters, finally applying a solution that will halt the moss from returning so soon."
      />
    </div>
  );
};

export default FlipCardForCleaning;
