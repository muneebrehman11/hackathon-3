
import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, ChevronDown, Menu, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full border-2  sticky top-0 bg-white shadow-md z-20">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 px-6 sm:px-10 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-gray-800 "
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-2 lg:space-x-6 items-center">
          <Link href={"/"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
            Home
          </Link>
          <Link href={"/shop"} className="text-gray-700 text-sm font-semibold flex items-center hover:text-gray-900">
            Shop <ChevronDown width={18} className="text-gray-600 ml-1" />
          </Link>
          <Link href={"/about"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
            About
          </Link>
          <Link href={"/blog"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
            Blog
          </Link>
          <Link href={"/contact"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
            Contact
          </Link>
          <Link href={"/product"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
            Pages
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login/Register */}
          <div className="flex items-center space-x-1 text-blue-500">
            <User />
            <a href="#" className="hover:underline">Login</a>
            <p>/</p>
            <a href="#" className="hover:underline">Register</a>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-4 text-blue-500">
            <span className="cursor-pointer hover:text-blue-700">
              <Search />
            </span>

            {/* <span className="cursor-pointer hover:text-blue-700">
              <ShoppingCart />
            </span> */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="text-2xl" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <span className="cursor-pointer hover:text-blue-700">
              <Heart />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <Link href={"/"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              Home
            </Link>
            <Link href={"/shop"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              Shop
            </Link>
            <Link href={"/about"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              About
            </Link>
            <Link href={"/blog"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              Blog
            </Link>
            <Link href={"/contact"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              Contact
            </Link>
            <Link href={"/pages"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">
              Pages
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
