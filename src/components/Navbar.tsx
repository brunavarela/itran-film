import { useState } from 'react'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'CONTATO', href: '#contato' },
]

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 border-b border-white/10">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src="/images/logo.png"
              alt="ITRAN FILM logo"
              className="h-9 w-auto"
            />
            <span
              className="text-white text-lg font-bold tracking-widest"
              style={{ fontFamily: 'Cinzel' }}
            >
              ITRAN FILM
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-sm font-medium uppercase leading-5 tracking-wide hover:text-orange-300 transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-neutral-950 border-t border-white/10 px-6 py-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white text-base font-medium uppercase tracking-wide hover:text-orange-300 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
