export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-8">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 text-center sm:text-left">
          <span
            className="text-neutral-400 text-sm leading-5"
            style={{ fontFamily: 'Inter' }}
          >
            © 2026 ITRAN FILM — Videomaker em Belford Roxo e Rio de Janeiro. Todos os direitos reservados.
          </span>
          <a
            href="#"
            className="text-neutral-400 text-sm leading-5 hover:text-white transition-colors"
            style={{ fontFamily: 'Inter' }}
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
