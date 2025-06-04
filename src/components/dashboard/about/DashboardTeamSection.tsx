/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyModal from "@/components/modal.MyModal";
import CommonCard from "@/components/pages/about/CommonCard";
import {
  useDeleteTeamMutation,
  useGetAllTeamsQuery,
} from "@/redux/service/about/teamApi";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import CreateTeamMemberForm from "./CreateTeammemberForm";

const DashboardTeamSection = () => {
  const [open, setOpen] = useState(false);
  const [aboutTeam, setAboutTeam] = useState<any[]>([]);

  const { data: teamDdata, isLoading: teamLoading } = useGetAllTeamsQuery({});
  const [deleteMembers] = useDeleteTeamMutation();

  useEffect(() => {
    if (teamDdata && teamDdata.length > 0) {
      setAboutTeam(teamDdata);
    }
  }, [teamDdata]);

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
        toast.promise(deleteMembers(id).unwrap(), {
          loading: "Deleting...",
          success: (data) => data?.message || "Deleted successfully",
          error: (err) => err.message || "Error!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   loader
  if (teamLoading) {
    <div className="py-12 flex items-center justify-center">
      <p>Loading...</p>
    </div>;
  }

  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-xl font-bold">Team memebrs</h2>
          <Button
            onClick={() => setOpen(!open)}
            className="bg-red-primary text-white"
          >
            Create team member
          </Button>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
          {aboutTeam?.map((member, index) => (
            <div key={index}>
              <CommonCard member={member} />
              <div>
                <div className="flex items-center justify-center flex-wrap mt-2 gap-4">
                  <Button
                    onClick={() => handleDelete(member?._id)}
                    className="!bg-red-primary !text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyModal setIsModalOpen={setOpen} isModalOpen={open}>
        <CreateTeamMemberForm />
      </MyModal>
    </>
  );
};

export default DashboardTeamSection;
