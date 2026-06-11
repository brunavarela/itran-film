export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] h-[600px] sm:h-[700px] lg:h-[790px] overflow-hidden bg-neutral-950"
    >
      <img
        src="/images/hero/hero-principal.jpeg"
        alt="Produção de vídeo cinematográfica - ITRAN FILM"
        className="absolute inset-0 w-full h-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950" />

      <div className="relative z-10 flex justify-center h-full">
        <div className="w-full max-w-[1280px] px-6 pt-28 sm:pt-32 lg:pt-40 flex flex-col items-start">
          <div className="max-w-[768px] flex flex-col items-start">
            <div className="mb-6 lg:mb-8">
              <span
                className="px-4 py-1.5 bg-orange-300/10 rounded-full border border-orange-300/30 text-orange-300 text-sm font-medium uppercase tracking-wide"
                style={{ fontFamily: 'Inter' }}
              >
                HOME
              </span>
            </div>

            <h1
              className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight lg:leading-[90px] m-0"
              style={{ fontFamily: 'Montserrat' }}
            >
              SUA VISÃO. NOSSA PRODUÇÃO.
              <br />
              <span className="text-orange-300">QUALIDADE CINEMATOGRÁFICA</span>
            </h1>

            <p
              className="mt-4 lg:mt-6 text-neutral-400 text-base lg:text-xl leading-7"
              style={{ fontFamily: 'Inter' }}
            >
              Videomaker freelance especializado em produção de vídeos, imagens aéreas e
              operação de teleprompter no Rio de Janeiro e Belford Roxo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
