"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/pages/tax-preparation"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]"
        >
          Tax Preparation
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]"
        >
          Real Estate Services
        </Link>
      </li>
      <li>
        <Link
          href="/other-services"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]"
        >
          Other Services
        </Link>
      </li>
      <li>
        <Link
          href="/about-us"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]"
        >
          About Us
        </Link>
      </li>
      {/* <li>
        <Link href="/auth/sign-in" className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]">
          Sign In
        </Link>
      </li>
      <li>
        <Link href="/auth/sign-up" className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600]">
          Sign Up
        </Link>
      </li>
      */}
      <div className="ms-12">
        <Link
          href="/contact-details/contact-us"
          className="bg-[var(--primary-color)] text-white px-6 py-3 font-medium hover:bg-[var(--primary-color)] rounded-full transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={115}
              height={80}
              className="inline-block mr-2"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">{links}</ul>

        {/* Mobile hamburger button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">{links}</ul>
      )}
    </nav>
  );
}
