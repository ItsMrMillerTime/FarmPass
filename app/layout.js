import './globals.css'
import NavBar from '../components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Fixed navbar is h-24 (6rem) */}
        <NavBar />

        {/* Push everything down by 6rem */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}
