'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur z-30 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Only */}
        <Link href="/">
          <a>
            <Image src={logo} alt="Farm Pass Logo" width={64} height={64} />
          </a>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
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

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-base">
          <Link href="/"><a className="text-gray-700 hover:text-green-700">Home</a></Link>
          <Link href="/about"><a className="text-gray-700 hover:text-green-700">About</a></Link>
          <Link href="/faq"><a className="text-gray-700 hover:text-green-700">FAQ</a></Link>
          <Link href="/for-farms"><a className="text-gray-700 hover:text-green-700">For Farms</a></Link>
          <Link href="/contact"><a className="text-gray-700 hover:text-green-700">Contact</a></Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          {['/', '/about', '/faq', '/for-farms', '/contact'].map((href, i) => {
            const label = ['Home','About','FAQ','For Farms','Contact'][i]
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
