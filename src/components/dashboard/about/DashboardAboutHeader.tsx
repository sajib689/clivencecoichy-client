"use client";

import MyModal from "@/components/modal.MyModal";
import { useGetAllOwnersQuery } from "@/redux/service/about/ownerApi";
import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import UpdateMainImageForm from "./UpdateMainImage";

const DashboardAboutHeader = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetAllOwnersQuery({});

  if (isLoading) {
    <div className="py-12 flex items-center justify-center">
      <p>Loading...</p>
    </div>;
  }
  const id: string = data ? data[0]?._id : "";
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold">Main image</h2>
          <Button
            onClick={() => setOpen(!open)}
            className="bg-red-primary text-white"
          >
            Update Main image
          </Button>
        </div>
        <div className="mt-8">
          {data?.length > 0 && (
            <Image
              className="max-w-[600px] h-full rounded-xl"
              src={data![0]?.image?.url}
              width={1200}
              height={600}
              alt=""
            />
          )}
        </div>
      </div>
      <MyModal setIsModalOpen={setOpen} isModalOpen={open}>
        <UpdateMainImageForm id={id} />
      </MyModal>
    </>
  );
};

export default DashboardAboutHeader;
