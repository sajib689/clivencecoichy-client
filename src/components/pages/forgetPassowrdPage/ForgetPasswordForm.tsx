/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForgatPasswordMutation } from "@/redux/service/auth/authApi";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const { Title, Paragraph } = Typography;

type LoginFormValues = {
  email: string;
};

const ForgetPasswordForm: React.FC = () => {
  const router = useRouter();
  const [forgetPassword] = useForgatPasswordMutation();
  const onFinish = (values: LoginFormValues) => {
    console.log("Success:", values);
    try {
      // calling the signup api
      toast.promise(forgetPassword(values).unwrap(), {
        loading: "login...",
        success: (data) => {
          console.log(data);
          if (data?.success) {
            toast.success("Reset your password now");
            router.push(
              `/reset-password?email=${values?.email}&token=${data?.data?.resetToken}`
            );
          }

          return "Login success";
        },
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.data?.map);
    }
  };

  return (
    <div
      className="w-full"
      style={{ maxWidth: 500, margin: "0 auto", padding: "24px" }}
    >
      <Title level={1} style={{ textAlign: "center", fontWeight: "bold" }}>
        Forget Password
      </Title>
      <Paragraph style={{ textAlign: "center" }}>
        Enter your email address below, and we&apos;ll send you an email
        allowing you to reset it.
      </Paragraph>

      <Form<LoginFormValues>
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <div style={{ textAlign: "right" }} className="mb-6">
          <Link href="/login" className="!text-primary hover:!underline">
            Back to login
          </Link>
        </div>

        <Form.Item>
          <Button
            type="primary"
            className="bg-red-primary"
            htmlType="submit"
            block
            size="large"
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPasswordForm;
