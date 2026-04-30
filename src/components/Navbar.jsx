import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/gym', label: 'Gym' },
]

const linkClass = ({ isActive }) =>
  `text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded ${
    isActive ? 'text-gray-900 font-medium' : 'text-gray-500 hover:text-gray-900'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav
        className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="font-mono text-sm font-medium text-gray-900 tracking-tight hover:text-blue-600 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          onClick={() => setOpen(false)}
        >
          milanramdhari.com
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
