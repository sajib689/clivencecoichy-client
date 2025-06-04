"use client";

import TestimonialCard, {
    Testimonial,
} from "@/components/cards/TestimonialCard";
import CreateReviewForm from "@/components/dashboard/about/CreateReviewForm";
import MyModal from "@/components/modal.MyModal";
import {
    useDeleteReviewMutation,
    useGetAllReviewsQuery,
} from "@/redux/service/reviewsApi";
import { Button } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

const DashbaordReviewsPage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetAllReviewsQuery({});
  console.log(data);

  const [deleteReview] = useDeleteReviewMutation();

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
        toast.promise(deleteReview(id).unwrap(), {
          loading: "Deleting...",
          success: (data) => data?.message || "Deleted successfully",
          error: (err) => err.message || "Error!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-xl font-bold">Reviews</h2>
        <Button
          onClick={() => setOpen(!open)}
          className="bg-red-primary text-white"
        >
          Create Review
        </Button>
      </div>

      <div className="mt-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 xl:px-0">
          {data?.map((item: Testimonial, index: number) => (
            <div key={index}>
              <TestimonialCard data={item} />
              <div className="flex items-center justify-center flex-wrap mt-2 gap-4">
                <Button
                  onClick={() => handleDelete(item?._id)}
                  className="!bg-red-primary !text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyModal setIsModalOpen={setOpen} isModalOpen={open}>
        <CreateReviewForm />
      </MyModal>
    </div>
  );
};

export default DashbaordReviewsPage;
