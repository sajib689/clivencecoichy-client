import google from "@/assets/icons/google.png";
import userImage1 from "@/assets/userImage.png";
import userImage2 from "@/assets/userImage2.png";
import userImage3 from "@/assets/userImage3.png";
import userImage4 from "@/assets/userImage4.png";
import ReviewCard from "@/components/cards/ReviewCard/ReviewCard";
import TitleAndDescription from "@/components/shared/TitleAndDescription/TitleAndDescription";

const cardData = [
  {
    userName: "David London NW3",
    date: "September 12, 2022",
    icon: google,
    image: userImage1,
    title: "Trusted Professionals",
    description:
      "Backed by over a decade of experience, we are a Which? Trusted Trader, ensuring quality you can rely on.",
  },
  {
    userName: "Mark",
    date: "February 5, 2024",
    icon: google,
    image: userImage2,
    title: "Exceptional Customer Satisfaction",
    description:
      "With hundreds of positive reviews, our commitment to excellence speaks for itself.",
  },
  {
    userName: "Bo",
    date: "September 12, 2022",
    icon: google,
    image: userImage3,
    title: "Comprehensive Services",
    description:
      "From gutter cleaning to high-rise solutions, we offer a one-stop shop for all your gutter needs.",
  },
  {
    userName: "Oliver M",
    date: "May 17, 2022",
    icon: google,
    image: userImage4,
    title: "Quick & Efficient Service",
    description:
      "We respect your time with prompt responses and swift service delivery.",
  },
];

const Reviews = () => {
  return (
    <div>
      <div className="bg-[#0F4262] py-10 md:py-20 ">
        <div className="container">
          <div className="mb-4 md:mb-12">
            <TitleAndDescription
              smallTitle="Reviews"
              mainTitle="See What Our Client Says About Us"
              mainTitleClassName="md:whitespace-nowrap"
              className="text-white"
              borderClassName="border-white"
              smallTitleClassName="text-white mb-1"
            />
          </div>{" "}
          <div className=" grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5">
            {cardData?.map((item, i) => (
              <ReviewCard
                key={i}
                userName={item?.userName}
                date={item?.date}
                icon={item?.icon}
                image={item?.image}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
