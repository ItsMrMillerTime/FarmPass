// app/layout.js
import './globals.css'
import NavBar from '../components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="pt-16">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
