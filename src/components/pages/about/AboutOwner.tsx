import Image from "next/image";
import React from "react";
import logo from "@/assets/about/aboutPeople.jpg";

const AboutOwner = () => {
  return (
    <section className="pb-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
       
        {/* left  */}
        <div>
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[2px] bg-title"></div>
            <h2 className="text-title">About Us</h2>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
            About the Company
          </h3>
          <p className="text-md mt-5">
            George has over 22 years of experience in exterior restoration. As a Public Adjuster himself, he has a unique skillset which allows him to use his experience and wisdom to work with insurance companies to achieve the absolute best outcomes for his clients. 
            <br />
            <br />
            He is constantly reminding his children (especially his son) that knowledge is knowing that a tomato is a fruit and wisdom is knowing not to put it in a fruit salad.          </p>

       
        </div>
         {/*right  */}
        <div className="flex flex-col items-center justify-center">
          <Image
                src={logo}
                alt="logo"
                width={500}
                height={500}
                className="w-full max-h-[455px] rounded-md"
          />
          {/* <div className="bg-white  shadow-xl rounded-xl inline-block p-5 text-xl font-bold text-title">
            20+ years of <br /> experience
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
