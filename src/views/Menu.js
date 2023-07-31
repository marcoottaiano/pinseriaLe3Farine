import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import mockPinse from '../mock/pinse'
import Collapsable from '../components/Collapsable'
function Menu() {

  const [pinse, setPinse] = useState();
  const [pinsaGiorno, setPinsaGiorno] = useState();

  useEffect(() => {
    let giorno;
    mockPinse.forEach((pinsa) => {
      if (pinsa.giorno) giorno = pinsa;
    })
    setPinsaGiorno(giorno);
    setPinse(mockPinse);
  }, [])

  return (
    <div className='menu-container'>
      <Header />
      <div className='pinsa-day-container' />
      <div className='d-flex flex-direction-row down-triangle'>
        <div className='triangle left-triangle' />
        <div className='triangle right-triangle' />
      </div>
      {pinsaGiorno &&
        <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
          <div className='card'>
            <img
              src={`data:image/jpg;base64,${pinsaGiorno.image}`}
              className='pinsa-day-img'
            />
            <div className='card-text'>
              <h3 className='text-white fw-bold'>Pinsa del giorno:</h3>
              <h2 className='text-white fw-bold'>{pinsaGiorno.name}</h2>
              <p className='text-white'>{pinsaGiorno.description}</p>
            </div>
          </div>
        </div>
      }
      <div className='menu'>
        <h1 className='mt-4 fw-bold'>Menù</h1>
        {/* <hr className='vector mt-4 mb-4' /> */}
        <Collapsable model={pinse} type={'CLASSICA'} label='classiche' />
        <Collapsable model={pinse} type={'SPECIALE'} label='speciali' />
        <Collapsable model={pinse} type={'VEGANA'} label='vegane' />
        <Collapsable model={pinse} type={'DOLCE'} label='dolci' />
      </div>
      <Footer />
    </div>
  )
}

export default Menu