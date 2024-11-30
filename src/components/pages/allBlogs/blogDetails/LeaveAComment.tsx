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
import { FC } from "react";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useCreateCommentMutation } from "@/redux/features/comment/commentApi";

const validationSchema = z.object({
  content: z
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

interface LeaveACommentProps {
  blogId: string;
}

const LeaveAComment: FC<LeaveACommentProps> = ({ blogId }) => {
  const [createCommentMutation] = useCreateCommentMutation();
  const handleSubmit = async (data: any, reset: () => void) => {
    const formData = new FormData();
    if (data.image) {
      formData.append("image", data.image);
    }

    const body = {
      content: data.content,
      name: data.name,
      email: data.email,
      website: data.website,
      blog: blogId,
    };

    // Append the body object as a JSON string
    formData.append("data", JSON.stringify(body));

    try {
      const res = await handleAsyncWithToast(
        async () => {
          // Replace this with your actual mutation or API call
          return createCommentMutation(formData); // Or your custom mutation to handle form data
        },
        "Commenting...",
        "Comment successful!",
        "Comment failed. Please try again."
      );

      // Check if submission was successful
      if (res?.data?.success) {
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="w-full container">
      <div className="my-10 md:my-20">
        <MyFormWrapper
          className={"flex flex-col gap-6 w-full"}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <div className="w-full ">
            <MyFormTextArea
              label="Leave a comment"
              name={"content"}
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
                <MyFormImageUpload
                  label="Your Image (Optional)"
                  name={"image"}
                  previewImageClassName="h-[225px] "
                >
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
    </div>
  );
};

export default LeaveAComment;
