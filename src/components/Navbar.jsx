import logo from '../assets/logo.png'
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img 
        src={logo}
        alt="GG Tech Support"
        />
        
      </div>

      <nav>
        <a href="#services">Servicios</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
      </nav>

    </header>
  )
}

export default Navbar