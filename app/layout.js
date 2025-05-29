import './globals.css'
import NavBar from '../components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Fixed navbar is 6rem tall (h-24) */}
        <NavBar />

        {/* Push all page content down by exactly 6rem */}
        <main className="mt-24">{children}</main>
      </body>
    </html>
  )
}
