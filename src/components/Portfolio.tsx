import { useState } from 'react'

const portfolioItems = [
  { category: 'Corporativo', title: 'Entrevista Corporativa',           image: '/images/corporativo/entrevista-auditorio.jpeg' },
  { category: 'Corporativo', title: 'Gravação BNDES',                   image: '/images/corporativo/gravacao-bndes.jpeg' },
  { category: 'Corporativo', title: 'Casa de Saúde São José',           image: '/images/corporativo/gravacao-casa-saude.jpeg' },
  { category: 'Corporativo', title: 'Vídeo Institucional',              image: '/images/corporativo/gravacao-institucional.jpeg' },
  { category: 'Externo',     title: 'Fundo Amazônia',                   image: '/images/externo/gravacao-fundo-amazonia.jpeg' },
  { category: 'Externo',     title: 'Gravação Ao Ar Livre',             image: '/images/externo/gravacao-externa-teleprompter.jpeg' },
  { category: 'Externo',     title: 'Documentário de Obra',             image: '/images/externo/gravacao-obra.jpeg' },
  { category: 'Externo',     title: 'Captação Externa',                 image: '/images/externo/gravacao-externa-praca.jpeg' },
  { category: 'Eventos',     title: 'Rio Porta de Entrada do Brasil',   image: '/images/eventos/cobertura-rio-porta-brasil.jpeg' },
  { category: 'Eventos',     title: 'Cobertura de Palestra',            image: '/images/eventos/cobertura-evento-palestra.jpeg' },
  { category: 'Publicidade', title: 'Fashion Film',                     image: '/images/publicidade/shoot-moda-modelo.jpeg' },
  { category: 'Estúdio',    title: 'Green Screen',                     image: '/images/estudio/green-screen.jpeg' },
  { category: 'Estúdio',    title: 'Gravação em Estúdio',              image: '/images/estudio/gravacao-interna.jpeg' },
  { category: 'Estúdio',    title: 'Operação de Teleprompter',         image: '/images/estudio/setup-teleprompter.jpeg' },
  { category: 'Drone',      title: 'Imagem Aérea DJI FPV',            image: '/images/equipamentos/drone-dji-fpv.jpeg' },
]

const categories = ['Todos', ...Array.from(new Set(portfolioItems.map(i => i.category)))]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory)

  return (
    <section id="portfolio" className="bg-neutral-950 py-16 lg:py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-[1280px] px-6">
          <div className="text-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-[48px] m-0"
              style={{ fontFamily: 'Montserrat' }}
            >
              <span className="text-white">PORTFÓLIO </span>
              <span className="text-orange-300">AUDIOVISUAL</span>
            </h2>
            <p
              className="mt-4 text-neutral-400 text-base lg:text-lg leading-7"
              style={{ fontFamily: 'Inter' }}
            >
              Nossos Projetos (Reel Maker)
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-orange-300 border-orange-300 text-neutral-950'
                    : 'border-neutral-700 text-neutral-400 hover:border-orange-300 hover:text-orange-300'
                }`}
                style={{ fontFamily: 'Inter' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[26px]">
            {filtered.map((item) => (
              <div
                key={item.title}
                className="relative rounded-lg overflow-hidden h-56 sm:h-72 lg:h-96 cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                  <span
                    className="text-orange-300 text-xs lg:text-sm font-medium leading-5"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.category}
                  </span>
                  <h3
                    className="mt-1 text-white text-sm lg:text-lg font-bold leading-tight lg:leading-7 m-0"
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
