import ImageTitleAndDescription from '@/components/shared/ImageTitleAndDescription/ImageTitleAndDescription';
import React from 'react';
import workingHuman from "@/assets/workingHuman.jpg";

const ProtectItAll = () => {
    return (
        <div>
        <ImageTitleAndDescription
   mainImage={workingHuman}
   TitleAndDescriptionClassName="mb-7"
   smallTitle="Why Us"
   mainTitle="Why Choose Us for Domestic Gutter Cleaning?"
   description="London Gutter Cleaning prides itself on customer satisfaction and that’s why we are London’s most popular gutter cleaning business. You can rest assured whatever the problem we have the solution leaving your gutters and downpipes clean and clear."
 />
   </div>
    );
};

export default ProtectItAll;