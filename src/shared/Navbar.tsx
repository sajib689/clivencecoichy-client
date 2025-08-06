"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const links = (
    <>
      <li onClick={closeMenu}>
        <Link
          href="/"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600] transition-colors"
        >
          Home
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link
          href="/pages/tax-preparation"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600] transition-colors"
        >
          Tax Preparation
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link
          href="#"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600] transition-colors"
        >
          Real Estate Services
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link
          href="#"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600] transition-colors"
        >
          Other Services
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link
          href="/contact-details/about-us"
          className="hover:text-[var(--textColor)] text-[var(--textColor)] font-[600] transition-colors"
        >
          About Us
        </Link>
      </li>
      <li onClick={closeMenu}>
        <Link
          href="/contact-details/contact-us"
          className="bg-[var(--primary-color)] text-white px-6 py-3 font-medium hover:opacity-90 rounded-full transition-all duration-300 inline-block"
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 bg-white p-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={115}
            height={80}
            className="inline-block mr-2"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 items-center">{links}</ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] rounded"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-opacity-40 z-30"
            onClick={closeMenu}
          />

          {/* Slide-down menu */}
          <ul className="md:hidden absolute top-full left-0 w-full bg-white z-40 p-6 space-y-4 shadow-md animate-slideDown">
            {links}
          </ul>
        </>
      )}
    </nav>
  );
}
