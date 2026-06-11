import { useState, useEffect, useCallback } from 'react'
import { imagePlaceholders } from '../imagePlaceholders'

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

function ChevronLeft() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
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

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [modalIndex, setModalIndex] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const markLoaded = (src: string) =>
    setLoadedImages(prev => (prev.has(src) ? prev : new Set(prev).add(src)))

  const filtered = activeCategory === 'Todos'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeCategory)

  const openModal = (index: number) => setModalIndex(index)
  const closeModal = () => setModalIndex(null)

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setModalIndex(null)
  }

  const prev = useCallback(() => {
    setModalIndex(i => i === null ? null : (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const next = useCallback(() => {
    setModalIndex(i => i === null ? null : (i + 1) % filtered.length)
  }, [filtered.length])

  useEffect(() => {
    if (modalIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalIndex, prev, next])

  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalIndex])

  const currentItem = modalIndex !== null ? filtered[modalIndex] : null

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
                onClick={() => handleCategoryChange(cat)}
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
            {filtered.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-lg overflow-hidden h-56 sm:h-72 lg:h-96 cursor-pointer group bg-zinc-800"
                onClick={() => openModal(index)}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-110 bg-cover bg-center blur-lg"
                  style={{ backgroundImage: `url(${imagePlaceholders[item.image]})` }}
                />
                <picture className="contents">
                  <source srcSet={item.image.replace(/\.jpeg$/i, '.webp')} type="image/webp" />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onLoad={() => markLoaded(item.image)}
                    className={`relative w-full h-full object-cover group-hover:scale-105 transition-[opacity,transform] duration-500 ${loadedImages.has(item.image) ? 'opacity-100' : 'opacity-0'}`}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
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

      {/* Modal lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={closeModal}
        >
          {/* Fechar */}
          <button
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2 cursor-pointer"
            onClick={closeModal}
            aria-label="Fechar"
          >
            <XIcon />
          </button>

          {/* Contador */}
          <span
            className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums"
            style={{ fontFamily: 'Inter' }}
          >
            {modalIndex! + 1} / {filtered.length}
          </span>

          {/* Seta esquerda */}
          <button
            className="absolute left-2 sm:left-6 z-10 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Anterior"
          >
            <ChevronLeft />
          </button>

          {/* Imagem + legenda */}
          <div
            className="flex flex-col items-center max-w-4xl w-full mx-14 sm:mx-20"
            onClick={e => e.stopPropagation()}
          >
            <picture className="contents">
              <source srcSet={currentItem.image.replace(/\.jpeg$/i, '.webp')} type="image/webp" />
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
              />
            </picture>
            <div className="mt-3 text-center">
              <span
                className="text-orange-300 text-sm font-medium"
                style={{ fontFamily: 'Inter' }}
              >
                {currentItem.category}
              </span>
              <h3
                className="text-white font-bold mt-0.5 text-base sm:text-lg m-0"
                style={{ fontFamily: 'Montserrat' }}
              >
                {currentItem.title}
              </h3>
            </div>
          </div>

          {/* Seta direita */}
          <button
            className="absolute right-2 sm:right-6 z-10 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Próxima"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}
