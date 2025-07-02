import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="bg-white text-gray-900">
        <Header />
        <Hero />
        <ProjectsSlides />
        <Services />
        <About />
        <Instagram />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
