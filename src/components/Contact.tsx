function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.67" y="1.67" width="16.67" height="16.67" rx="4" stroke="white" strokeWidth="1.67" />
      <circle cx="10" cy="10" r="3.33" stroke="white" strokeWidth="1.67" />
      <circle cx="14.58" cy="5.42" r="0.83" fill="white" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.67" y="3.33" width="16.67" height="13.33" rx="3" stroke="white" strokeWidth="1.67" />
      <path d="M8 7.5L13.5 10L8 12.5V7.5Z" stroke="white" strokeWidth="1.67" strokeLinejoin="round" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M13 1.67C13 1.67 13.5 5 16.67 5.83V8.33C16.67 8.33 14.33 8.17 13 6.83V13.33C13 15.72 11.05 17.67 8.67 17.67C6.28 17.67 4.33 15.72 4.33 13.33C4.33 10.95 6.28 9 8.67 9C8.83 9 9 9.01 9.17 9.03V11.58C9 11.55 8.84 11.53 8.67 11.53C7.65 11.53 6.83 12.34 6.83 13.37C6.83 14.39 7.65 15.2 8.67 15.2C9.69 15.2 10.5 14.39 10.5 13.37V1.67H13Z" stroke="white" strokeWidth="1.67" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.67" y="1.67" width="16.67" height="16.67" rx="2" stroke="white" strokeWidth="1.67" />
      <line x1="5" y1="8.33" x2="5" y2="15" stroke="white" strokeWidth="1.67" />
      <circle cx="5" cy="5.83" r="0.83" fill="white" />
      <path d="M8.33 8.33V15M8.33 11.25C8.33 9.58 15 8.75 15 11.67V15" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contato" className="bg-zinc-900 py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-[896px] px-6">
          <h2
            className="text-center text-5xl font-bold leading-[48px] m-0"
            style={{ fontFamily: 'Montserrat' }}
          >
            <span className="text-white">Fale </span>
            <span className="text-orange-300">Conosco</span>
          </h2>

          <form className="mt-16" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-[36px]">
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

            <div className="mt-6 flex flex-col">
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

            <div className="mt-6 mb-6 flex flex-col">
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
              className="w-56 h-14 bg-orange-300 rounded-lg text-neutral-950 text-lg font-bold cursor-pointer hover:bg-orange-200 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-white/10 flex justify-between items-center">
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
                contato@itranfilm.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <YouTubeIcon />, label: 'YouTube' },
                { icon: <TikTokIcon />, label: 'TikTok' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-zinc-800 rounded-full border border-white/10 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
