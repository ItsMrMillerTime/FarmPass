import './globals.css'
import NavBar from '../components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body>
        <NavBar/>
        {/* push all page content below the fixed 80px nav */}
        <main className="mt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
