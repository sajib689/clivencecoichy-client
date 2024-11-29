/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormImageUpload from "@/components/ui/MyForm/MyFormImageUpload/MyFormImageUpload";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormTextArea from "@/components/ui/MyForm/MyFormTextArea/MyFormTextArea";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { z } from "zod";
import ImageScaleton from "@/assets/ImageScaleton.png";

const validationSchema = z.object({
  comment: z
    .string({
        required_error: "Comment is required",
      })
    .min(1, "Comment is required")
    .max(500, "Comment cannot be longer than 500 characters"),
  name: z
    .string({
        required_error: "Name is required",
      })
    .min(1, "Name is required")
    .max(100, "Name cannot be longer than 100 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
  website: z.string().url("Invalid URL format").optional(),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => (file ? file.size <= 50 * 1024 * 1024 : true), {
      message: "Image size must be less than 50MB",
    }),
});

const LeaveAComment = () => {
  const handleSubmit = async (formData: any) => {
    console.log(formData);
    // const res = await handleAsyncWithToast(
    //   async () => {
    //     return login(formData); // Replace with your actual login function
    //   },
    //   "Logging in...",
    //   "Login successful!",
    //   "Login failed. Please try again.",
    //   true,
    //   dispatch
    // );

    // if (res?.data?.success) {
    //   router.push("/");
    // }
  };
  return (
    <div className="w-full">
      <MyFormWrapper
        className={"flex flex-col gap-6 w-full"}
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
      >
        <div className="w-full ">
          <MyFormTextArea
            label="Leave a comment"
            name={"comment"}
            placeHolder="Leave a comment"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full">
              <MyFormInput label="Name" name={"name"} placeHolder="Name" />
            </div>
            <div className="w-full">
              <MyFormInput label="Email" name={"email"} placeHolder="Email" />
            </div>
            <div className="w-full">
              <MyFormInput
                label="Website"
                name={"website"}
                placeHolder="Website"
              />
            </div>
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-full ">
              <MyFormImageUpload label="Your Image (Optional)" name={"image"} previewImageClassName="h-[225px] ">
                <div className="w-full h-[225px] border border-dashed rounded-lg flex justify-center items-center cursor-pointer">
                  <div>
                    <Image
                      src={ImageScaleton}
                      height={80}
                      width={80}
                      alt="image"
                      className="mx-auto "
                    />
                    <p className="text-base text-gray-light font-medium">
                     Click here and 
                      <span className="text-green-primary ps-1">
                        Upload your image
                      </span>
                    </p>
                  </div>
                </div>
              </MyFormImageUpload>
            </div>
          </div>
        </div>
        <Button
          className="w-full mx-auto rounded-lg bg-green-primary text-white "
          type="submit"
        >
          Send
        </Button>
      </MyFormWrapper>
    </div>
  );
};

export default LeaveAComment;
