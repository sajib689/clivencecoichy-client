import Image from "next/image";
import React from "react";
import beforeAfter1 from "@/assets/roofing/before1.png";
import beforeAfter2 from "@/assets/roofing/before2.png";
import beforeAfter3 from "@/assets/roofing/before3.png";
import beforeAfter4 from "@/assets/roofing/before4.png";
import beforeAfter5 from "@/assets/roofing/before5.png";
import beforeAfter6 from "@/assets/roofing/before6.png";

const BeforeAfterSection = () => {
  return (
    <div>
      <div className="container py-20">
        {/* header  */}
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[2px] bg-title"></div>
          <h2 className="text-title">Before and After</h2>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
          Our Roofing Projects
        </h3>

        {/* content div  */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Image src={beforeAfter1} alt="before after image" />
          </div>
          <div>
            <Image src={beforeAfter2} alt="before after image" />
          </div>
          <div>
            <Image src={beforeAfter3} alt="before after image" />
          </div>
          <div>
            <Image src={beforeAfter4} alt="before after image" />
          </div>
          <div>
            <Image src={beforeAfter5} alt="before after image" />
          </div>
          <div>
            <Image src={beforeAfter6} alt="before after image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
