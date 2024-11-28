import React from 'react';
import bgImage from "@/assets/trustedHuman.png";
import SmallBanner from '@/components/shared/SmallBanner/SmallBanner';
import AllBlogsGrid from '@/components/pages/allBlogs/allBlogsGrid/allBlogsGrid';


const AllBlogsPage = () => {
    return (
        <div>
          <SmallBanner
        backgroundImage={bgImage}
        title="London Gutter Clean Blogs"
        description="Our blogs"
      />
      <AllBlogsGrid/>
        </div>
    );
};

export default AllBlogsPage;