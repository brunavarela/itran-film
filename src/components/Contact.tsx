function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.67" y="1.67" width="16.67" height="16.67" rx="4" stroke="white" strokeWidth="1.67" />
      <circle cx="10" cy="10" r="3.33" stroke="white" strokeWidth="1.67" />
      <circle cx="14.58" cy="5.42" r="0.83" fill="white" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contato" className="bg-zinc-900 py-16 lg:py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-[896px] px-6">
          <h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[48px] m-0"
            style={{ fontFamily: 'Montserrat' }}
          >
            <span className="text-white">Fale </span>
            <span className="text-orange-300">Conosco</span>
          </h2>

          <form className="mt-10 lg:mt-16" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-9">
              <div className="flex flex-col">
                <label
                  className="text-white text-sm font-medium leading-5 mb-2"
                  style={{ fontFamily: 'Inter' }}
                >
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="h-12 px-4 bg-zinc-900 rounded-lg border border-white/10 text-white/50 text-base placeholder:text-white/50 focus:outline-none focus:border-orange-300/50 transition-colors"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-white text-sm font-medium leading-5 mb-2"
                  style={{ fontFamily: 'Inter' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="h-12 px-4 bg-zinc-900 rounded-lg border border-white/10 text-white/50 text-base placeholder:text-white/50 focus:outline-none focus:border-orange-300/50 transition-colors"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col">
              <label
                className="text-white text-sm font-medium leading-5 mb-2"
                style={{ fontFamily: 'Inter' }}
              >
                Telefone
              </label>
              <input
                type="tel"
                placeholder="(XX) XXXX-XXXX"
                className="h-12 px-4 bg-zinc-900 rounded-lg border border-white/10 text-white/50 text-base placeholder:text-white/50 focus:outline-none focus:border-orange-300/50 transition-colors"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <div className="mt-4 sm:mt-6 mb-6 flex flex-col">
              <label
                className="text-white text-sm font-medium leading-5 mb-2"
                style={{ fontFamily: 'Inter' }}
              >
                Mensagem
              </label>
              <textarea
                placeholder="Conte-nos sobre seu projeto..."
                rows={7}
                className="px-4 py-3 bg-zinc-900 rounded-lg border border-white/10 text-white/50 text-base placeholder:text-white/50 leading-6 resize-none focus:outline-none focus:border-orange-300/50 transition-colors"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-56 h-14 bg-orange-300 rounded-lg text-neutral-950 text-lg font-bold cursor-pointer hover:bg-orange-200 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
            <div className="flex flex-col gap-1">
              <span
                className="text-neutral-400 text-sm leading-5"
                style={{ fontFamily: 'Inter' }}
              >
                Email
              </span>
              <span
                className="text-white text-base leading-6"
                style={{ fontFamily: 'Inter' }}
              >
                itranvarela@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/itranfilm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-zinc-800 rounded-full border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
