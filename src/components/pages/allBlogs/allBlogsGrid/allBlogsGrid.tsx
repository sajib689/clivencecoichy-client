// components/pages/allBlogs/allBlogsGrid/allBlogsGrid.tsx
'use client'
import React, { useState } from 'react';
import { Pagination, PaginationProps } from 'antd';
import BlogCard from '@/components/cards/BlogCard/BlogCard';
import { isNonEmptyArray } from '@/utils/isNonEmptyArray';
import { useRouter } from 'next/navigation';
import MyPagination from '@/components/ui/MyPagination/MyPagination';
import { TBlogPost } from '@/interface/globalType';

interface AllBlogsGridProps {
  blogs: TBlogPost[];
  currentPage: number;
  totalBlogs: number;
}

const AllBlogsGrid: React.FC<AllBlogsGridProps> = ({ blogs, currentPage, totalBlogs }) => {



  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container py-10">
        {isNonEmptyArray(blogs) && blogs?.map((item) => (
          <BlogCard
            key={item._id}
            imageSrc={item.banner}
            author={item.author}
            date={item.date}
            title={item.title}
            description={item.description}
            readMoreLink={`/blog/${item._id}`}
          />
        ))}
      </div>
    <MyPagination currentPage={currentPage} totalBlogs={totalBlogs} defaultPageSize={10}/>
    </div>
  );
};

export default AllBlogsGrid;
