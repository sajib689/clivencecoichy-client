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
    title: "Gutter Cleaning - Excellent Service",
    description:
      "We use high-quality materials to install long-lasting gutters on your London property.",
  },
  {
    userName: "Mark",
    date: "February 5, 2024",
    icon: google,
    image: userImage2,
    title: "Excellent service - highly recommended",
    description:
      "Excellent, helpful and friendly service. They not only cleaned the gutters, they reattach...",
  },
  {
    userName: "Bo",
    date: "September 12, 2022",
    icon: google,
    image: userImage3,
    title: "Very informative, quick and easy to deal with",
    description:
      "Was very easy to book a job, they explained the whole process from start to end on the phon...",
  },
  {
    userName: "Oliver M",
    date: "May 17, 2022",
    icon: google,
    image: userImage4,
    title: "Quick and excellent service",
    description:
      "Extremely pleased with the excellent service from the London Gutter Clean team – arriv...",
  },
];

const Reviews = () => {
  return (
    <div id="review-section">
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
