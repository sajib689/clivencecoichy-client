/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useChangePasswordMutation } from "@/redux/service/auth/authApi";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const { Title } = Typography;

type ChangePasswordFormValues = {
  previousPassword: string;
  newPassword: string;
  retypePassword: string;
};

const ChangePasswordForm: React.FC = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();
  const onFinish = (values: ChangePasswordFormValues) => {
    // console.log("Success:", values);
    const newData = {
      currentpassword: values?.previousPassword,
      newpassword: values?.newPassword,
      retypePass: values?.retypePassword,
    };
    try {
      // calling the signup api
      toast.promise(changePassword(newData).unwrap(), {
        loading: "Password changing...",
        success: (data) => {
          console.log(data);
          if (data?.success) {
            router.push("/");
          }

          return "Passowrd changePassword successfully";
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
        Change Password
      </Title>

      <Form<ChangePasswordFormValues>
        name="changePassword"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Previous Password"
          name="previousPassword"
          rules={[
            { required: true, message: "Please input your current password!" },
          ]}
        >
          <Input.Password placeholder="Enter your current password" />
        </Form.Item>

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
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
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
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
