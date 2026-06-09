export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-8">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6 flex justify-between items-center">
          <span
            className="text-neutral-400 text-sm leading-5"
            style={{ fontFamily: 'Inter' }}
          >
            © 2025 ITRAN FILM. Todos os direitos reservados.
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
