function TeleprompterIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2.67" y="5.33" width="26.67" height="18.67" rx="1" stroke="#fdba74" strokeWidth="2.67" />
      <rect x="12" y="13.33" width="8" height="5.33" rx="0.5" stroke="#fdba74" strokeWidth="2.67" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2.67" y="8" width="20" height="16" rx="1" stroke="#fdba74" strokeWidth="2.67" />
      <rect x="22.67" y="11" width="6.67" height="10" rx="1" stroke="#fdba74" strokeWidth="2.67" />
    </svg>
  )
}

function ClapperboardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="1" stroke="#fdba74" strokeWidth="2.67" />
      <line x1="4" y1="12" x2="28" y2="12" stroke="#fdba74" strokeWidth="2.67" />
      <line x1="10.67" y1="4" x2="10.67" y2="12" stroke="#fdba74" strokeWidth="2.67" />
      <line x1="18.67" y1="4" x2="18.67" y2="12" stroke="#fdba74" strokeWidth="2.67" />
    </svg>
  )
}

const services = [
  {
    icon: <TeleprompterIcon />,
    title: 'Teleprompter Profissional',
    subtitle: 'Com Operador',
    description:
      'Diretrizes fluidas e naturais. Garanta a integridade de seu roteiro com nosso teleprompter especializado.',
  },
  {
    icon: <CameraIcon />,
    title: 'Câmera Pro',
    subtitle: 'Com Operador',
    description:
      'Captação de alta qualidade para suas produções. Perfeita para filmagens, making off ou cinema. Equipamentos profissionais.',
  },
  {
    icon: <ClapperboardIcon />,
    title: 'Produção Completa',
    subtitle: 'Do Roteiro à Entrega',
    description:
      'Serviço completo de produção audiovisual. Roteiro, filmagem, edição e pós-produção com qualidade cinematográfica.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="bg-zinc-900 py-16 lg:py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6">
          <h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[48px] m-0"
            style={{ fontFamily: 'Montserrat' }}
          >
            <span className="text-white">Nossos </span>
            <span className="text-orange-300">Serviços</span>
          </h2>

          <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-zinc-800/50 rounded-lg border border-white/10 flex flex-col"
              >
                <div className="w-16 h-16 bg-orange-300/10 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>

                <h3
                  className="mt-6 text-white text-xl font-bold leading-7 m-0"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {service.title}
                </h3>

                <p
                  className="mt-3 text-neutral-400 text-sm leading-5"
                  style={{ fontFamily: 'Inter' }}
                >
                  {service.subtitle}
                </p>

                <p
                  className="mt-4 mb-6 text-neutral-400 text-base leading-6 flex-1"
                  style={{ fontFamily: 'Inter' }}
                >
                  {service.description}
                </p>

                <button
                  className="w-full sm:w-48 h-10 bg-orange-300 rounded-lg text-neutral-950 text-base font-medium cursor-pointer hover:bg-orange-200 transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
