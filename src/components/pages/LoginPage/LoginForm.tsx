/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setUser, UserType } from "@/redux/features/auth";
import { useLoginUserMutation } from "@/redux/service/auth/authApi";
import { Button, Form, Input, Typography } from "antd";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const { Title } = Typography;

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [login] = useLoginUserMutation();

  const onFinish = (values: LoginFormValues) => {
    // console.log("Success:", values);
    try {
      // calling the signup api
      toast.promise(login(values).unwrap(), {
        loading: "loggin in...",
        success: (data) => {
          // console.log(data);
          if (data?.message) {
            const decoded: UserType = jwtDecode(data?.accessToken);
            Cookies.set("accessToken", data?.accessToken, {
              expires: 7,
            });

            // console.log(decoded);
            dispatch(
              setUser({
                user: decoded,
                accessToken: data?.accessToken,
                refreshToken: data?.refreshToken,
              })
            );

            router.push("/dashboard");
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
        Log in
      </Title>
      {/* <Paragraph style={{ textAlign: "center" }}>
        If you have not created an account yet, then please{" "}
        <Link href="/signup" className="!text-primary !underline">
          sign up
        </Link>
        .
      </Paragraph> */}

      <Form<LoginFormValues>
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <div style={{ textAlign: "right" }} className="mb-6">
          <Link
            href="/forgot-password"
            className="!text-primary hover:!underline"
          >
            Forgot Password
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
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
