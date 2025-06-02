"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    "/dashboard",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/roofing">Roofing</Link>,
    "/dashboard/roofing",
    <LuLayoutDashboard />
  ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
