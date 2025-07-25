// src/components/Header.jsx
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi' 
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/Logo.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed bottom-0 p-6 lg:p-9 w-full bg-black border-t-1 border-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start md:gap-10">
        {/* Logo com imagem */}
        <a href="/">
          <img
            src={Logo}
            alt="Logo iTran"
            className="w-[118px] lg:w-[158px] h-auto object-contain"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        > 
          <FiMenu />
        </button>

        {/* Desktop menu */}
        <nav className="hidden text-base gap-[90px] md:flex flex-1 justify-center uppercase text-white font-[Causten-Medium]">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="about" className="hover:text-gray-400 transition">Sobre</a>
          <a href="portfolio" className="hover:text-gray-400 transition">Portfolio</a>
          <a href="contact" className="hover:text-gray-400 transition">Contato</a>
        </nav>

        {/* Social links (Desktop only) */}
        <div className="hidden md:flex w-12 h-8 gap-4 ml-auto text-white text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-400 transition w-10 h-8" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
