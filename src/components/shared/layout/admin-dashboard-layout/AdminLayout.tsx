"use client";

import AdminLayout from "@/components/shared/layout/Layout";
import { FaBlogger, FaBook, FaClipboardList } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";
import { TfiGallery } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Overview</Link>,
    "/dashboard",
    <LuLayoutDashboard />
  ),
  // getItem(
  //   <Link href="/dashboard/city">Dubai City</Link>,
  //   "/dashboard/city",
  //   <FaCity />
  // ),
  getItem(
    <Link href="/dashboard/list-with-us">List with us</Link>,
    "/dashboard/list-with-us",
    <FaClipboardList />
  ),
  getItem(
    <Link href="/dashboard/events">Events</Link>,
    "/dashboard/events",
    <MdEventNote />
  ),
  getItem(
    <Link href="/dashboard/exhibitions">Exhibitions</Link>,
    "/dashboard/exhibitions",
    <RiGalleryView2 />
  ),
  getItem(
    <Link href="/dashboard/workshop-course">Workshop & Course</Link>,
    "/dashboard/workshop-course",
    <FaBook />
  ),
  getItem(
    <Link href="/dashboard/galleries">Galleries</Link>,
    "/dashboard/galleries",
    <TfiGallery />
  ),
  getItem(
    <Link href="/dashboard/blog">Blogs</Link>,
    "/dashboard/blog",
    <FaBlogger />
  ),
  getItem(
    <Link href="/dashboard/shop">Shop</Link>,
    "/dashboard/shop",
    <TiShoppingCart />
  ),
  getItem(
    <Link href="/dashboard/about">About</Link>,
    "/dashboard/about",
    <FaAddressCard />
  ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
