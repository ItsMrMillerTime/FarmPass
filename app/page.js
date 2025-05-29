// app/page.js
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero: 65vh tall showing the bottom of the image */}
<section className="relative h-[65vh] overflow-hidden">
  <Image
    src="/hero.jpg"
    alt="Long Island farm"
    fill
    className="object-cover object-bottom"
    priority
  />
  <div className="absolute inset-0 bg-black/30" />
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      Farm Pass
    </h1>
    <p className="text-lg md:text-2xl text-white max-w-xl mb-6">
      One pass to every fun farm on Long Island.
    </p>
    <a
      href="#signup"
      className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-green-800 transition"
    >
      Get Started
    </a>
  </div>
</section>

      {/* Why Farm Pass */}
      <section className="py-16 px-4 max-w-5xl mx-auto" id="why-it-works">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Farm Pass?
        </h2>
        <p className="text-lg text-center mb-10">
          Families love farms—but paying $40+ each visit is a gamble when kids get
          cranky. Farm Pass offers unlimited access for a single price,
          encouraging more visits, more purchases, and more memories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">For Families</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Buy once, visit often</li>
              <li>Choose one-farm or all-farm season passes</li>
              <li>No surprises—just show your QR code</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">For Farms</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Drive traffic, reduce friction</li>
              <li>Earn commission-based revenue</li>
              <li>Optional signup fees for more visibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="signup" className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Waitlist</h2>
          <p className="mb-8">
            Farm Pass launches soon—join the list to stay in the loop!
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="email"
              placeholder="Your email (Family)"
              className="p-3 rounded border border-gray-300 w-full"
            />
            <input
              type="email"
              placeholder="Farm contact email"
              className="p-3 rounded border border-gray-300 w-full"
            />
            <button className="col-span-2 bg-green-700 text-white py-3 rounded hover:bg-green-800 transition">
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-white border-t text-gray-500">
        &copy; 2025 Farm Pass. All rights reserved.
      </footer>
    </>
  )
}
