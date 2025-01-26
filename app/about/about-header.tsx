
"use client"
import { useState } from 'react';
import { User } from "lucide-react";
import Link from "next/link";

export default function AboutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0  font-bold flex justify-between items-center py-4 bg-white border-b shadow-sm px-10 sm:px-12 max-w-screen-2xl mx-auto z-20">
      {/* Logo Section */}
      <h1 className="text-xl font-bold text-gray-800">Bandage</h1>

      {/* Hamburger Icon */}
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`list-none sm:flex space-x-6 text-gray-700 text-sm absolute sm:relative bg-white sm:bg-transparent w-full sm:w-auto top-16 left-0 sm:top-0 sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'} sm:block`}
      >
        <Link href="/">
          <li className="hover:text-gray-500 cursor-pointer text-center sm:text-left">Home</li>
        </Link>
        {/* <div className="flex items-center"> */}
        <Link href='/product'>
          <button className="dropbtn text-center sm:text-left">Product</button>
        </Link>
        {/* </div> */}
        <Link href="/about/pricing">
          <li className="hover:text-gray-900 cursor-pointer text-center sm:text-left">Pricing</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-gray-900 cursor-pointer text-center sm:text-left">Contact</li>
        </Link>
      </div>

      {/* Right Section */}
      <div className="sm:flex hidden items-center space-x-6 text-sm">
        <div className="flex items-center space-x-3 text-blue-500">
          <User />
          <a href="#" className="hover:underline">
            Login
          </a>
          <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-700 transition">
            Become a Member
          </button>
        </div>
      </div>
    </header>
  );
}
