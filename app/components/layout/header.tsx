"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { Search, ShoppingCart, Heart, ChevronDown, Menu, X } from "lucide-react";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useSearch } from "@/app/context/SearchContext"; // Import the useSearch hook

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch(); // Use the search context
  const { totalItems } = useWishlist();
  const { totalQuantity } = useCart();
  const router = useRouter(); // Initialize useRouter

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`); // Redirect to search page
    }
  };

  return (
    <header className="w-full border-2 sticky top-0 bg-white shadow-md z-20">
      <div className="flex justify-between items-center py-4 px-6 sm:px-10 max-w-screen-2xl mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">Bandage</h1>
        </Link>
        <button className="md:hidden text-gray-800" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex md:space-x-2 lg:space-x-6 items-center">
          <Link href={"/"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Home</Link>
          <Link href={"/shop"} className="text-gray-700 text-sm font-semibold flex items-center hover:text-gray-900">
            Shop <ChevronDown width={18} className="text-gray-600 ml-1" />
          </Link>
          <Link href={"/about"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">About</Link>
          <Link href={"/blog"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Blog</Link>
          <Link href={"/contact"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Contact</Link>
          <Link href={"/product"} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Pages</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
              onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Trigger search on Enter key
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleSearch} className="text-blue-500 hover:text-blue-700">
              <Search />
            </button>
          </div>
          <div className="flex items-center space-x-1 text-blue-500">
            <SignedOut>
              <SignInButton>
                <button className="text-blue-500 hover:text-blue-700">Login / Register</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div className="flex items-center space-x-4 text-blue-500">
            <Link href="/cart" className="relative cursor-pointer hover:text-blue-700">
              <ShoppingCart />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link href="/wishList" className="relative cursor-pointer hover:text-blue-700">
              <Heart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-100 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <Link href={"/"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Home</Link>
            <Link href={"/shop"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Shop</Link>
            <Link href={"/about"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">About</Link>
            <Link href={"/blog"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Blog</Link>
            <Link href={"/contact"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Contact</Link>
            <Link href={"/pages"} onClick={toggleMenu} className="text-gray-700 text-sm font-semibold hover:text-gray-900">Pages</Link>
          </ul>
        </nav>
      )}
    </header>
  );
}