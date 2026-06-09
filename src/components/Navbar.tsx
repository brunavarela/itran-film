const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'CONTATO', href: '#contato' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 border-b border-white/10">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6 py-4 flex justify-between items-center">
          <div className="w-28" />
          <div className="flex items-center gap-8">
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
        </div>
      </div>
    </nav>
  )
}
