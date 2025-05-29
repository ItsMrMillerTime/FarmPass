// components/NavBar.js
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-20 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} alt="Farm Pass Logo" width={48} height={48} />
          <span className="text-xl font-semibold text-green-800">Farm Pass</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-base">
          <Link href="/"><a className="text-gray-700 hover:text-green-700">Home</a></Link>
          <Link href="/about"><a className="text-gray-700 hover:text-green-700">About</a></Link>
          <Link href="/faq"><a className="text-gray-700 hover:text-green-700">FAQ</a></Link>
          <Link href="/for-farms"><a className="text-gray-700 hover:text-green-700">For Farms</a></Link>
          <Link href="/contact"><a className="text-gray-700 hover:text-green-700">Contact</a></Link>
        </div>
      </div>
    </nav>
  )
}
