// components/pages/allBlogs/allBlogsGrid/allBlogsGrid.tsx
'use client'
import BlogCard from '@/components/cards/BlogCard/BlogCard';
import MyPagination from '@/components/ui/MyPagination/MyPagination';
import { TBlogPost } from '@/interface/globalType';
import { isNonEmptyArray } from '@/utils/isNonEmptyArray';
import React from 'react';

interface AllBlogsGridProps {
  blogs: TBlogPost[];
  currentPage: number;
  totalBlogs: number;
  defaultPageSize: number;
}

const AllBlogsGrid: React.FC<AllBlogsGridProps> = ({ blogs, currentPage, totalBlogs , defaultPageSize}) => {



  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container py-10">
        {isNonEmptyArray(blogs) && blogs?.map((item) => (
          <BlogCard
            key={item._id}
            imageSrc={item.banner}
            author={item?.authorId?.username}
            date={item.createdAt}
            title={item.title}
            description={item.content}
            readMoreLink={`/blog/${item._id}`}
          />
        ))}
      </div>
    <MyPagination currentPage={currentPage} totalBlogs={totalBlogs} defaultPageSize={defaultPageSize}/>
    </div>
  );
};

export default AllBlogsGrid;
