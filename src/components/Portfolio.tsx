const portfolioItems = [
  { category: 'Comercial', title: 'Comercial para Marca X', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Videoclipe', title: 'Videoclipe da Banda Y', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Casamento', title: 'Ensaio de Casamento', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Direção', title: 'Bastidores Direção', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Corporativo', title: 'Entrevista Corporativa', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Esporte', title: 'Captação Esportiva', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Animação', title: 'Peças de Animação', image: 'https://placehold.co/290x384/1a1a1a/555555' },
  { category: 'Moda', title: 'Fashion Film', image: 'https://placehold.co/290x384/1a1a1a/555555' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-neutral-950 py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6">
          <div className="text-center">
            <h2
              className="text-5xl font-bold leading-[48px] m-0"
              style={{ fontFamily: 'Montserrat' }}
            >
              <span className="text-white">PORTFÓLIO </span>
              <span className="text-orange-300">AUDIOVISUAL</span>
            </h2>
            <p
              className="mt-4 text-neutral-400 text-lg leading-7"
              style={{ fontFamily: 'Inter' }}
            >
              Nossos Projetos (Reel Maker)
            </p>
          </div>

          <div className="mt-16 grid grid-cols-4 gap-[26px]">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="relative rounded-lg overflow-hidden h-96 cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span
                    className="text-orange-300 text-sm font-medium leading-5"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="mt-1 text-white text-lg font-bold leading-7 m-0"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
