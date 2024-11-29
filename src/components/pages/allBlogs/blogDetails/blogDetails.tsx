/* eslint-disable @typescript-eslint/no-explicit-any */

import blogDetailsMainImage from "@/assets/blogDetailsMainImage.png";
import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";
import Image from "next/image";
import SearchByEmail from "./SearchByEmail";
import account_circle from "@/assets/icons/account_circle.svg";
import calendar_month from "@/assets/icons/calendar_month.svg";
import blogDetailsImage from "@/assets/blogDetailsImage.png";
import LeaveAComment from "./LeaveAComment";

const BlogDetails = () => {
  return (
    <div className="container">
      <div className="md:flex items-start gap-6">
        {/* left side start */}
        <div className="md:w-4/12">
          <div className="h-full max-h-96 w-full max-w-72 overflow-hidden mb-5">
            <Image
              src={blogDetailsMainImage}
              width={400}
              height={600}
              alt="image"
              className="object-contain"
            />
          </div>
          <h5 className="text-xl font-bold mb-4">Written by</h5>
          <div className="flex items-center gap-2">
            <div className="rounded-full overflow-hidden h-10 w-10">
              <ImageWithFallBackSystem
                imageSrc={blogDetailsMainImage}
                alt="Review Card Image"
              />
            </div>
            <div>
              <p className="text-base font-bold ">David London NW3</p>
              <p className="text-sm font-medium text-gray-light">
                September 12, 2022
              </p>
            </div>
          </div>
          <div className="w-full border my-6"></div>
          <h5 className="text-xl font-bold mb-4">Subscribe to our news feed</h5>
          <SearchByEmail />
          <h5 className="text-xl font-bold my-4">Comments</h5>

          <div className="flex flex-col md:flex-row md:items-start gap-3">
            <div className="rounded-full overflow-hidden h-9 w-10">
              <ImageWithFallBackSystem
                imageSrc={blogDetailsMainImage}
                alt="Review Card Image"
              />
            </div>
            <div className="w-full">
              <p className="text-base font-bold ">Olivia Clark</p>
              <p className="text-sm font-medium text-gray-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          <div className="w-full border my-6"></div>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="md:w-8/12">
          <div className="flex items-center text-sm text-gray-light space-x-2 mb-2">
            <span className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <ImageWithFallBackSystem imageSrc={account_circle} />
              </div>
              <span className="font-medium text-sm whitespace-nowrap">
                James Charls
              </span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-5 h-5  overflow-hidden">
                <ImageWithFallBackSystem imageSrc={calendar_month} />
              </div>
              <span className="font-medium text-sm  whitespace-nowrap">
                12 July, 2024
              </span>
            </span>
          </div>
          <div className="mb-11">
            <h3 className="font-extrabold text-4xl mb-6">
              Gutter Vacuums Review From The Professionals
            </h3>
            <p className="font-medium text-base text-gray-light">
              Keeping your gutters clean is vital for protecting your home from
              water damage. But when it comes to cleaning methods, there’s a
              debate: hands-on or high-tech vacuums? While vacuums can seem like
              a quicker option, we at London gutter clean strongly believe in
              the power of a good old-fashioned hand cleaning. Here’s why:
            </p>
          </div>
          <div className="mb-11">
            <h3 className="font-extrabold text-xl mb-6">
              A Deeper Clean, Every Time
            </h3>
            <p className="font-medium text-base text-gray-light">
              Leaf litter, twigs, and other debris can build up surprisingly
              fast in your gutters. A thorough hand cleaning ensures we remove
              everything, not just the loose stuff on top. Our technicians get
              in there and scoop out every bit, leaving your gutters sparkling
              clean and ready for the next downpour.
            </p>
          </div>
          <div className="mb-11">
            <h3 className="font-extrabold text-xl mb-6">
              Spotting Potential Problems Before They Become Big Ones
            </h3>
            <p className="font-medium text-base text-gray-light">
              The beauty of hand cleaning is that it allows for a close
              inspection of your entire gutter system. While we’re up there,
              we’re not just focused on debris. We’re also on the lookout for
              any potential issues like:{" "}
            </p>
          </div>
          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">
              Loose or sagging gutters:
            </span>
             These can lead to leaks and foundation problems.
          </p>
          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">
              Cracked or damaged gutters:
            </span>
            Left unrepaired, these cracks can worsen and cause water to seep
            into your home.
          </p>
          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">
              Clogged downspouts:
            </span>
            A blocked downspout renders your gutters useless. We can identify
            the blockage and clear it efficiently.
          </p>
          <h3 className="text-xl font-bold mb-3">
            Vacuums: Not a One-Size-Fits-All Solution
          </h3>
          <div className="h-full  w-full  overflow-hidden mb-5">
            <Image
              src={blogDetailsImage}
              width={500}
              height={300}
              alt="image"
              className="object-contain"
            />
          </div>

          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">Tight Spaces:</span>
             If your roof tiles are close to the gutters, a vacuum’s nozzle
            might not be able to reach all the debris. This can leave hidden
            pockets of leaves and twigs that can still cause blockages.
          </p>
          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">Stuck Objects:</span>
             If something like a toy or a large branch is wedged in your
            downspout, a vacuum will only clear the loose debris around it. The
            blockage itself might remain, hidden from sight, and ready to cause
            problems again soon.
          </p>
          <p className="mb-4 text-base font-medium text-gray-light">
            <span className="text-black font-bold mr-1">
              Damage to Guttering:
            </span>
             If something like a toy or a large branch is wedged in your
            downspout, a vacuum will only clear the loose debris around it. The
            blockage itself might remain, hidden from sight, and ready to cause
            problems again soon.
          </p>
          <div className="mb-11">
            <h3 className="font-bold text-xl mb-2">
              The Hands-On Advantage
            </h3>
            <p className="font-medium text-base text-gray-light">
              Our experienced technicians can identify these limitations and
              adjust their cleaning approach accordingly. They’ll use their
              expertise and good old-fashioned tools to ensure your gutters are
              completely clear and your downspouts are flowing freely.
            </p>
          </div>
        </div>
      </div>
      {/* right side end */}

      <div className="w-full border my-6"></div>

      <h5 className="text-xl font-bold mt-4 mb-10">Leave a comment</h5>
     <div className="mb-10 md:mb-20">
     <LeaveAComment/>
     </div>
    </div>
  );
};

export default BlogDetails;
