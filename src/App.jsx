import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
