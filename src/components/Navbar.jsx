import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../assets/logo.png'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className="navbar">

      <div className="logo">

        <img
          src={logo}
          alt="GG Tech Support"
        />

      </div>

      <nav className={menuOpen ? 'nav active' : 'nav'}>

        <a href="#services">
          Servicios
        </a>

        <a href="#about">
          Nosotros
        </a>

        <a href="#contact">
          Contacto
        </a>

      </nav>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

    </header>

  )
}

export default Navbar