import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Menu() {

  return (
    <div className='menu-container'>
      <Header />
      <div className='pinsa-day-container'>
      </div>
      <div className='d-flex flex-direction-row down-triangle'>
        <div className='triangle left-triangle' />
        <div className='triangle right-triangle' />
      </div>
      <Footer />
    </div>
  )
}

export default Menu