"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl text-accent-500 font-light">
          Jewelryhub<span className="text-primary-500 font-semibold">Gele</span>
        </h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 shadow-md md:shadow-none transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {["Home", "Book", "Services", "About", "Contact Us"].map(
            (text, index) => {
              const href =
                text === "Home"
                  ? "/"
                  : `/${text.toLowerCase().replace(" ", "-")}`;
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className={`block px-4 py-2 rounded-md ${
                      pathname === href
                        ? "text-primary-500 font-semibold border-b-4 border-accent-500"
                        : "text-gray-700"
                    } hover:text-primary-500`}
                  >
                    {text}
                  </Link>
                </li>
              );
            }
          )}
        </ul>

        {/* Right Side Button */}
        <div className="hidden md:block">
          <button className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
