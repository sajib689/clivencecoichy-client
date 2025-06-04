/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRegisterUserMutation } from "@/redux/service/auth/authApi";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

type FieldType = {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  state?: string;
  zipCode?: string;
  referral?: string;
  offers?: boolean;
  password?: string;
  confirmPassword?: string;
};

const SignUpForm: React.FC = () => {
  const [signup] = useRegisterUserMutation();
  const router = useRouter();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const newData = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      zipcode: values?.zipCode,
      state: values?.state,
      email: values?.email,
      password: values?.password,
      confirm_pass: values?.confirmPassword,
      phone: values?.phone,
      referal: values?.referral,
      offer: values?.offers,
    };
    // console.log("Success:", values);

    try {
      // calling the signup api
      toast.promise(signup(newData).unwrap(), {
        loading: "registering...",
        success: (data) => {
          console.log(data);
          if (data?.success) {
            router.push("/login");
          }
          return "Register success";
        },
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || error?.data?.map);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }} className="w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8">
        Sign Up
      </h1>
      <p className="mb-8">
        Already have an account? Then please{" "}
        <Link href="/login">
          <span className="text-primary underline cursor-pointer ">
            Log in.
          </span>
        </Link>
      </p>

      <Form<FieldType>
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <div className="flex items-center  gap-6 flex-col sm:flex-row">
          <Form.Item<FieldType>
            className="w-full"
            label="First name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="First name" />
          </Form.Item>

          <Form.Item<FieldType>
            className="w-full"
            label="Last name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </div>

        <div className="flex items-center  gap-6 flex-col sm:flex-row">
          <Form.Item<FieldType>
            className="w-full"
            label="Phone number"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>

          <Form.Item<FieldType>
            className="w-full"
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your state!" }]}
          >
            <Input placeholder="State" />
          </Form.Item>
        </div>

        <div className="flex items-center  gap-6 flex-col sm:flex-row">
          <Form.Item<FieldType>
            className="w-full"
            label="Zip code"
            name="zipCode"
            rules={[{ required: true, message: "Please input your zip code!" }]}
          >
            <Input placeholder="Zip code" />
          </Form.Item>

          <Form.Item<FieldType>
            className="w-full"
            label="Referral (Optional)"
            name="referral"
          >
            <Input placeholder="Referral (Optional)" />
          </Form.Item>
        </div>

        <Form.Item<FieldType> name="offers" valuePropName="checked">
          <Checkbox>Yes, send me special offers and exclusive deals</Checkbox>
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Confirm password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Form.Item>
          <Button
            className="!bg-primary"
            type="primary"
            htmlType="submit"
            block
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
