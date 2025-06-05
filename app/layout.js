// app/layout.js
import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Farm Hopper Pass',
  description: 'Seasonal membership to kid-friendly farms',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
