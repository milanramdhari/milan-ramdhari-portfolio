import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/projects', label: 'Projects' },
  { to: '/uses', label: 'Uses' },
]

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded ${
    isActive ? 'text-[#2563eb]' : 'text-gray-600 hover:text-gray-900'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav
        className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          className="font-mono text-[#2563eb] font-semibold text-base tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          onClick={() => setOpen(false)}
        >
          milan.dev
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
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
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded p-1"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
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
