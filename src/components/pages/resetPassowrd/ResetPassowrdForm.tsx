/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useResetPasswordMutation } from "@/redux/service/auth/authApi";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const { Title } = Typography;

type ChangePasswordFormValues = {
  newPassword: string;
  retypePassword: string;
};

const ResetPassForm: React.FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  // console.log(token, "token");

  // api call
  const [resetPassword] = useResetPasswordMutation();

  const onFinish = (values: ChangePasswordFormValues) => {
    // console.log("Success:", { newpassword: values?.newPassword });

    const user = { newpassword: values?.newPassword };
    try {
      toast.promise(resetPassword({ user, token }).unwrap(), {
        loading: "Reseting...",
        success: (data) => {
          console.log(data);
          return "Reset successful";
        },
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.data?.message);
    }
  };

  return (
    <div
      className="w-full"
      style={{ maxWidth: 500, margin: "0 auto", padding: "24px" }}
    >
      <Title level={1} style={{ textAlign: "center", fontWeight: "bold" }}>
        Resete Password
      </Title>

      <Form<ChangePasswordFormValues>
        name="changePassword"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
        >
          <Input.Password placeholder="Enter your new password" />
        </Form.Item>

        <Form.Item
          label="Retype New Password"
          name="retypePassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please retype your new password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject();
              },
            }),
          ]}
        >
          <Input.Password placeholder="Retype your new password" />
        </Form.Item>

        <div style={{ textAlign: "right" }} className="mb-6">
          <Link href="/login" className="!text-primary hover:!underline">
            Back to login
          </Link>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassForm;
