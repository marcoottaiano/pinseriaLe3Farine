import React, { useEffect } from 'react'
import logo from '../assets/images/logo.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Ottieni la posizione verticale dello scroll corrente
      const currentScrollPos = window.scrollY >= 0 ? window.scrollY : 0;

      // Se la posizione verticale dello scroll è maggiore della posizione precedente,
      // la navbar scompare verso l'alto, altrimenti ricompare verso il basso
      let isNavbarVisible;
      if (currentScrollPos === 0) {
        isNavbarVisible = true;
      } else {
        isNavbarVisible = currentScrollPos < prevScrollPos;
      }
      setNavbarVisible(isNavbarVisible);

      // Salva la posizione verticale dello scroll corrente come posizione precedente per il prossimo ciclo
      setPrevScrollPos(currentScrollPos);
    };

    // Aggiungi l'evento di scorrimento
    window.addEventListener('scroll', handleScroll);

    // Rimuovi l'evento di scorrimento al dismontaggio del componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`navbar ${!navbarVisible && 'hidden'} ${window.scrollY !== 0 && 'bg-primary'}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} className='logo' />
        </div>
        <div className="menu-icon" onClick={() => handleShowNavbar()}>
          <div className={`bar ${showNavbar && " active"}`} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} d-flex align-items-center justify-content-center`}>
          <ul>
            <li >
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menú</NavLink>
            </li>
            <li>
              <NavLink to="/factory">Basi</NavLink>
            </li>
            <li>
              <NavLink to="/about">Storia</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header