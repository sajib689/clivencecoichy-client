import Banner from "@/components/pages/home/banner/Banner";
import OurService from "@/components/pages/home/OurService/OurService";
import Reviews from "@/components/pages/home/Reviews/Reviews";
import TrustedByHundreds from "@/components/pages/home/TrustedByHundreds/TrustedByHundreds";
import YourTrustedPartner from "@/components/pages/home/YourTrustedPartner/YourTrustedPartner";
import BlogComponent from "@/components/shared/blog/BlogComponent";
import ImproveProperty from "@/components/shared/ImproveProperty/ImproveProperty";
import TrustedTrader from "@/components/shared/TrustedTrader/TrustedTrader";

const Home = () => {
  return (
    <>
      <Banner />
      <TrustedByHundreds />
      <YourTrustedPartner />
      <OurService />
      <Reviews />
      <TrustedTrader/>
      <BlogComponent  smallTitle="Blog" mainTitle="Insights & Inspiration: The LondonGutterClean Blog" topButtonText="Read All" topButtonTextLink={"blog"}/>
      <ImproveProperty/>
    </>
  );
};

export default Home;
