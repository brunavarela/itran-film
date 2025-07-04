// src/components/Header.jsx
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi' 
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/Logo.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50 p-1">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between md:justify-start md:gap-10">
        {/* Logo com imagem */}
            <img
            src={Logo}
            alt="Logo iTran"
            className="h-12 w-auto object-contain"
        />

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu />
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-gray-700 font-medium">
          <a href="#projects" className="hover:text-black transition">Trabalhos</a>
          <a href="#services" className="hover:text-black transition">Serviços</a>
          <a href="#about" className="hover:text-black transition">Sobre</a>
          <a href="#contact" className="hover:text-black transition">Contato</a>
        </nav>

        {/* Social links (Desktop only) */}
        <div className="hidden md:flex gap-4 ml-auto text-gray-600 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
