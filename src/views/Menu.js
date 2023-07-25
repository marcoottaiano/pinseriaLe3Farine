import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react';

function Menu() {

  const [pinse, setPinse] = useState();

  useEffect(() => {

  }, [])

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