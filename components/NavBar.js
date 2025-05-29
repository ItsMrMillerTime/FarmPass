'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur z-30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Only, enlarged */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="Farm Pass Logo" width={80} height={80} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-base">
          <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-green-700">About</Link>
          <Link href="/faq" className="text-gray-700 hover:text-green-700">FAQ</Link>
          <Link href="/for-farms" className="text-gray-700 hover:text-green-700">For Farms</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {['Home','About','FAQ','For Farms','Contact'].map((label, i) => {
            const href = ['/', '/about', '/faq', '/for-farms', '/contact'][i]
            return (
              <Link key={href} href={href}>
                <a className="block px-4 py-3 text-gray-700 hover:bg-gray-100">{label}</a>
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
