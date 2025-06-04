/* eslint-disable @typescript-eslint/no-explicit-any */
import blogImage from "@/assets/blogs/blog1.png";
import { TBlog } from "@/interface/globalType";
import { useDeleteBlogMutation } from "@/redux/service/blog/blogApi";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DashboardBlogCard = ({ data }: { data: TBlog }) => {
  const [deleteBlogPost] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    console.log(id);

    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        toast.promise(deleteBlogPost(id).unwrap(), {
          loading: "Deleting...",
          success: (data) => data?.message || "Deleted successfully",
          error: (err) => err.message || "Error!",
        });
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.data?.message);
    }
  };
  return (
    <div className="max-w-md overflow-hidden !bg-white rounded-lg shadow-2xl cursor-pointer hover:shadow-none duration-300 mx-auto">
      {/* Image */}
      <div className="w-full">
        <Image
          src={data?.image?.url || blogImage}
          width={500}
          height={300}
          alt="Modern wooden house with black roof"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Author and Date */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center text-blue-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[15px]">{data?.admin?.name}</span>
          </div>

          <div className="flex items-center text-blue-gray-400">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[15px]">
              {new Date(data?.createdAt).toDateString()}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold text-gray-900 leading-tight">
          {data?.title || "How to Protect Your Roof After a Storm"}
        </h2>

        {/* Description */}
        <p
          className="mb-5 text-blue-gray-500 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        />

        {/* Read More Link */}
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/blogs/${data?._id}`}>
            <Button>Update</Button>
          </Link>
          <Button
            onClick={() => handleDelete(data?._id)}
            className="!bg-red-primary !text-white"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogCard;
