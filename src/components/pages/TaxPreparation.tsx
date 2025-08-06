"use client";

import Image, { StaticImageData } from "next/image";
import { FaFile } from "react-icons/fa";
import Button from "../ui/Button";

import support1 from "@/assets/tax-preparation/support3.png";
import support2 from "@/assets/tax-preparation/support2.png";
import support3 from "@/assets/tax-preparation/support3.png";

type Card =
  | {
      type: "image";
      image: StaticImageData;
      alt: string;
      bg: string;
    }
  | {
      type: "text";
      icon: React.ReactNode;
      title: string;
      description: string;
      buttonText: string;
      bg: string;
    };

const TaxPreparation = () => {
  const cards: Card[] = [
    {
      type: "image",
      image: support1,
      alt: "Support Image 1",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: <FaFile />,
      title: "File a Tax Amendment",
      description: "Mend past returns quickly and correctly",
      buttonText: "Amend My Return",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support3,
      alt: "Support Image 2",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: <FaFile />,
      title: "Start Filing Today",
      description:
        "File Now or Finalize Late/Extension Returns — EFinancial Can Help!",
      buttonText: "Start Filing Now",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support2,
      alt: "Support Image 3",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: <FaFile />,
      title: "Track Your Tax Refund",
      description: "Want to know your refund status? Check your status here.",
      buttonText: "Track My Refund",
      bg: "bg-[var(--third-color)]",
    },
  ];

  return (
    <div className="mt-20 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-lg overflow-hidden flex flex-col`}
          >
            {card.type === "image" ? (
              <Image
                src={card.image}
                alt={card.alt}
                className="w-full h-96 object-cover"
                priority
              />
            ) : (
              <div className="p-6 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[var(--primary-color)] mb-4 text-lg">
                  {card.icon}
                </div>
                <h2 className="text-lg font-semibold mb-3">{card.title}</h2>
                <p className="text-sm text-gray-700 mb-5">{card.description}</p>
                <Button
                  text={card.buttonText}
                  onClick={() => console.log(`${card.buttonText} clicked!`)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxPreparation;
