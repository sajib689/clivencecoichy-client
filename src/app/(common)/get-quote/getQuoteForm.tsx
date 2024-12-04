/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormTextArea from "@/components/ui/MyForm/MyFormTextArea/MyFormTextArea";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useRequestQuoteOrSupportMutation } from "@/redux/features/getQuoteAsSupport/getQuoteAsSupportApi";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import React from "react";
import { z } from "zod";

const validationSchema = z.object({
 
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
    phone: z
    .string({
      required_error: "Phone number is required",
    }).min(1, "Phone number is required"),
    message: z
    .string({
      required_error: "Comment is required",
    })
    .min(1, "Comment is required")
    .max(500, "Comment cannot be longer than 500 characters"),
});

const GetQuoteForm = () => {

 const [requestQuoteOrSupportMutation] = useRequestQuoteOrSupportMutation()
  const handleSubmit = async (formData: any) => {
 
    const res = await handleAsyncWithToast(
      async () => {
        return requestQuoteOrSupportMutation(formData); // Replace with your actual login function
      },
      "Requesting...",
      "Request successful!",
      "Request failed. Please try again.",
    );

    if (res?.data?.success) {
      // router.push("/");
    }
  };

  return (
    <div>
      <MyFormWrapper
        className={"flex flex-col gap-6 w-full"}
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
      >
        <div className="w-full flex flex-col gap-5">
          <div className="w-full">
            <MyFormInput label="Name" name={"name"} />
          </div>
          <div className="w-full">
            <MyFormInput label="Email" name={"email"} />
          </div>
          <div className="w-full">
            <MyFormInput label="Phone Number" name={"phone"} type="number" />
          </div>
          <div className="w-full ">
            <MyFormTextArea label="How Can We Help You?" name={"message"} />
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

export default GetQuoteForm;
