"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  // SHOW AFTER SCROLL BUTTON
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-gray-900 text-white px-4 md:px-10 py-10 md:py-20">
      {/* SCROLL TO TOP BUTTON */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition z-50"
        >
          ↑
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/ChopBetter-Logo.png"
              alt="ChopBetter Logo"
              width={140}
              height={35}
              className="object-contain"
            />
          </Link>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Discover authentic recipes, cooking inspiration, and delicious food
            experiences all in one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-orange-400 transition">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-orange-400 transition">
              <Link href="/recipes">Recipes</Link>
            </li>

            <li className="hover:text-orange-400 transition">
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-gray-400 text-lg">
            <span className="hover:text-orange-400 transition cursor-pointer">
              Facebook
            </span>

            <span className="hover:text-orange-400 transition cursor-pointer">
              Instagram
            </span>

            <span className="hover:text-orange-400 transition cursor-pointer">
              TikTok
            </span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 ChopBetter. All rights reserved.
      </div>
    </section>
  );
}
