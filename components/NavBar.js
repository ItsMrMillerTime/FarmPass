// /components/NavBar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-40">
          
          {/* Logo Section */}
<div className="flex-shrink-0 flex items-center">
  <Link href="/">
    <a>
      <img
        src="/logo.png"
        alt="Farm Hopper Pass"
        className="h-40 sm:h-40 w-auto"
      />
    </a>
  </Link>
</div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link href="/">
              <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
            </Link>
            <Link href="/for-farms">
              <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                For Farms
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </Link>
          </div>

          {/* Mobile menu button (visible <640px) */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {/* Hamburger icon */}
              {mobileMenuOpen ? (
                // X icon when open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon when closed
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
            </Link>
            <Link href="/faq">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                FAQ
              </a>
            </Link>
            <Link href="/for-farms">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                For Farms
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
