"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router hook

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // e.g. "/", "/about", "/faq", etc.

  // Helper function to check if a link is “active”
  const isActive = (href) => {
    // If you want exact-match: return pathname === href
    // If you want “startsWith” (e.g. /for-farms/subpage still highlights /for-farms): use startsWith
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header height: 96px on mobile, 160px on ≥640px */}
        <div className="flex justify-between h-24 sm:h-40">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a>
                <img
                  src="/logo.png"
                  alt="Farm Hopper Pass"
                  className="h-16 sm:h-40 w-auto"
                />
              </a>
            </Link>
          </div>

          {/* Desktop Links (hidden on mobile) */}
          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            {/* HOME */}
            <Link href="/">
              <a
                className={
                  (isActive("/")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " px-3 py-2 text-base sm:text-lg font-medium"
                }
              >
                Home
              </a>
            </Link>

            {/* ABOUT */}
            <Link href="/about">
              <a
                className={
                  (isActive("/about")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " px-3 py-2 text-base sm:text-lg font-medium"
                }
              >
                About
              </a>
            </Link>

            {/* FAQ */}
            <Link href="/faq">
              <a
                className={
                  (isActive("/faq")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " px-3 py-2 text-base sm:text-lg font-medium"
                }
              >
                FAQ
              </a>
            </Link>

            {/* FOR FARMS */}
            <Link href="/for-farms">
              <a
                className={
                  (isActive("/for-farms")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " px-3 py-2 text-base sm:text-lg font-medium"
                }
              >
                For Farms
              </a>
            </Link>

            {/* CONTACT */}
            <Link href="/contact">
              <a
                className={
                  (isActive("/contact")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " px-3 py-2 text-base sm:text-lg font-medium"
                }
              >
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
              {mobileMenuOpen ? (
                // X icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
            {/* HOME */}
            <Link href="/">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={
                  (isActive("/")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Home
              </a>
            </Link>
            {/* ABOUT */}
            <Link href="/about">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={
                  (isActive("/about")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                About
              </a>
            </Link>
            {/* FAQ */}
            <Link href="/faq">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={
                  (isActive("/faq")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                FAQ
              </a>
            </Link>
            {/* FOR FARMS */}
            <Link href="/for-farms">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={
                  (isActive("/for-farms")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                For Farms
              </a>
            </Link>
            {/* CONTACT */}
            <Link href="/contact">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className={
                  (isActive("/contact")
                    ? "underline text-gray-900"
                    : "text-gray-700 hover:underline hover:text-gray-900") +
                  " block px-3 py-2 rounded-md text-base font-medium"
                }
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
