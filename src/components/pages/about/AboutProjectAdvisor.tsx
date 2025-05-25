import React from 'react'
import logo from "@/assets/about/aboutPeople.jpg";
import { StaticImageData } from "next/image";

import CommonCard from './CommonCard';

type TeamMember = {
    name: string;
    role: string;
    image: string | StaticImageData;
};

const teamMembers: TeamMember[] = [
    { name: "George", role: "President & Owner", image: logo },
    { name: "Phillip", role: "Illinois & Indiana Sales & Operations Manager", image: logo },
    { name: "Mike", role: "Ohio & Kentucky Sales & Operations Manager", image: logo },
    { name: "Danielle", role: "Vice President of Administration & Insurance", image: logo },
    { name: "Ted", role: "Lead Inspector & Adjuster Advisor", image: logo },
    { name: "John", role: "Project Advisor", image: logo },
    { name: "Marina", role: "Head of HR", image: logo },
    { name: "Meysoon", role: "Director of Procurement", image: logo },
];;

const AboutProjectAdvisor = () => {
  return (
    <div className=" font-sans container mx-auto space-y-10 my-20">
       <div>
         
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title">
            Project Advisor
          </h3>
        

       
        </div>
      <div className="grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
        {teamMembers.map((member, index) => (
          <CommonCard key={index} member={member}/>
        ))}
      </div>
    </div>
  );
};

export default AboutProjectAdvisor;
