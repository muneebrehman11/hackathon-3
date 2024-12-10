
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="px-10 sm:px-12 max-w-screen-2xl mx-auto flex justify-between h-36 bg-[#FAFAFA] items-center">
          <h1 className="font-bold text-2xl">Bandage</h1>

          <ul className="flex gap-6">
            <li><img  src="/assets/fb.png" alt="Facebook" /></li>
            <li><img  src="/assets/insta.png" alt="Instagram" /></li>
            <li><img  src="/assets/x.png" alt="Twitter" /></li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="py-20 px-6 sm:px-12 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-gray-700">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company Info</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Carrier</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">We are hiring</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Legal Notices</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Business Marketing</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">User Analytic</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Live Chat</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Unlimited Support</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">iOS & Android</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Watch a Demo</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">Customers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-900">API</a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Get in Touch */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-[240px] h-[58px] border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="h-[58px] bg-blue-500 text-white px-6 rounded-md hover:bg-blue-600 w-full sm:w-auto">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 mt-4 text-sm">Lorem ipsum dolor Amit.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-gray-50 text-gray-500 mt-8 text-sm py-4">
          Made with love by Finland. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
