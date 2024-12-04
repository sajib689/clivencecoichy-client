/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useSubscribeToNewsLetterMutation } from "@/redux/features/newsLetter/newsLetterApi";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import React from "react";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import { z } from "zod";

const validationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email address"),
});

const SubscribeToNewsLetter = () => {
  const [subscribeToNewsLetterMutation] = useSubscribeToNewsLetterMutation();
  const handleSubmit = async (formData: any, reset: () => void) => {

    const res = await handleAsyncWithToast(
      async () => {
        return subscribeToNewsLetterMutation(formData); // Replace with your actual login function
      },
      "Subscribing...",
      "Subscription successful!",
      "Subscription failed. Please try again."
    );
    if (res?.data.success) {
      reset();
    }
  };
  return (
    <div className="w-full">
      <MyFormWrapper
        className={"flex flex-col gap-6 w-full"}
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
      >
        <div className="w-full relative">
          <MyFormInput
            label="Email"
            labelClassName="mb-1 text-xs font-medium"
            inputClassName="pe-24"
            name={"email"}
            placeHolder="Email"
          />
          <Button
            className="w-fit mx-auto rounded-lg bg-green-primary text-white absolute top-5 right-0"
            type="submit"
          >
            <PiPaperPlaneRightLight size={22} />
          </Button>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default SubscribeToNewsLetter;
