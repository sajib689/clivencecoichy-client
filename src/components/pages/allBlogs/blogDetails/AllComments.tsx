/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ImageWithFallBackSystem from "@/components/ui/ImageWithFallBackSystem/ImageWithFallBackSystem";
import { useGetAllCommentsQuery } from "@/redux/features/comment/commentApi";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import { Button } from "@nextui-org/react";
import { FC, useState } from "react";
import { RxAvatar } from "react-icons/rx";

interface AllCommentsProps {
  blogId: string;
}
const AllComments: FC<AllCommentsProps> = ({ blogId }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: allComments, isLoading } = useGetAllCommentsQuery({
    id: blogId,
    page,
    limit,
  });


  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {allComments?.data?.comments?.length > 0 && (
        <h5 className="text-xl font-bold my-4">Comments</h5>
      )}
      {allComments?.data?.comments?.length > 0 &&
        isNonEmptyArray(allComments?.data?.comments) &&
        allComments?.data?.comments?.map((comment: any, i: number) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-start gap-3 mb-7"
          >
            {comment?.image ? (
              <div className="rounded-full overflow-hidden h-9 w-10">
                <ImageWithFallBackSystem
                  imageSrc={comment?.image}
                  alt={comment?.name}
                />
              </div>
            ) : (
              <RxAvatar size={40} className="-mt-1" />
            )}

            <div className="w-full">
              <p className="text-base font-bold ">{comment?.name}</p>
              <p className="text-sm font-medium text-gray-light">
                {comment?.content}
              </p>
            </div>
          </div>
        ))}
      {allComments?.data?.totalComments > limit && (
        <Button
          radius="sm"
          onClick={() => {
            {
              setPage(1);
              setLimit(limit + 10);
            }
          }}
          className="w-full bg-green-primary text-white"
        >
          See More
        </Button>
      )}
    </div>
  );
};

export default AllComments;
