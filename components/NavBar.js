'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'For Farms', href: '/for-farms' },
  { label: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Larger logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="Farm Pass Logo" width={96} height={96} priority />
        </Link>

        {/* Desktop links: spaced, larger, underlined on hover */}
        <div className="hidden md:flex items-center space-x-10 text-xl font-medium">
          {LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-800 hover:text-green-700 hover:underline transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-3 text-lg text-gray-800 hover:bg-gray-100 hover:underline"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
