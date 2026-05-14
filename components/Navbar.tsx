"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white px-4 md:px-8 py-2 flex items-center justify-between shadow-sm relative">
      {/* Logo */}
      <Link href="/" className="flex items-center z-50">
        <Image
          src="/ChopBetter-Logo.png"
          alt="ChopBetter Logo"
          width={140}
          height={35}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navlinks */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link href="/recipes" className="hover:text-orange-500">
          Recipes
        </Link>
        <Link href="#" className="hover:text-orange-500">
          Categories
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 md:hidden z-50 flex flex-col gap-6 pt-20 px-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-gray-700 hover:text-orange-500"
        >
          Home
        </Link>

        <Link
          href="/recipes"
          onClick={() => setOpen(false)}
          className="text-gray-700 hover:text-orange-500"
        >
          Recipes
        </Link>

        <Link
          href="#"
          onClick={() => setOpen(false)}
          className="text-gray-700 hover:text-orange-500"
        >
          Categories
        </Link>
      </div>
    </nav>
  );
}
