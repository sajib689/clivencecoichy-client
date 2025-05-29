"use client";

import { setUser } from "@/redux/features/auth";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout");
    dispatch(setUser({ user: null, accessToken: null, refreshToken: null, }));
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Title
          level={5}
          className="!text-black !font-semibold !text-base !m-0"
          style={{ margin: 0 }}
        >
          Pamelam
        </Title>
      ),
    },
    {
      key: "2",
      label: (
        <Link className={`!text-primary `} href={"/profile"}>
          Profile
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Button onClick={handleLogout} icon={<MdOutlineLogout />} size="small">
          Logout
        </Button>
      ),
    },
  ];
  return (
    <div>
      {
        <div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              size={40}
              className="hover:!border hover:!border-white duration-300  cursor-pointer"
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      }
    </div>
  );
};

export default User;
