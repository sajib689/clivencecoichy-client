import Lottie from "lottie-react";
import blogLoading from "@/assets/BlogLoading.json";

const MyLoading = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Lottie className="h-96 pt-5" animationData={blogLoading} loop={true} />
    </div>
  );
};

export default MyLoading;
