import React, { useEffect } from 'react'
import logo from '../assets/images/logo.jpg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollActive(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={`navbar ${scrollActive && 'scroll-active'}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} className='logo' />
        </div>
        <div className="menu-icon" onClick={() => handleShowNavbar()}>
          <div className={`bar ${showNavbar && " active"}`} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"} d-flex align-items-center justify-content-center`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Menú</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Aziende</NavLink>
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