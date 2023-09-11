import React from 'react'
import glovo from '../assets/images/glovo-logo.jpg'
import justEat from '../assets/images/juestEat-logo.jpg'
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs"


function Footer() {
  return (
    <div className='footer-container'>
      <div className='d-flex flex-direction-row'>
        <div className='triangle left-triangle' />
        <div className='triangle right-triangle' />
      </div>
      <div className='footer-body d-flex align-items-center justify-content-end flex-column'>
        <h3 className='text-white'>Ci trovi anche su:</h3>
        <div className='social-container'>
          {/* <a href='https://glovoapp.com/it/it/sedriano-magenta/pinseria-le-tre-farine-qse/'>
            <img src={glovo} className='social-logo' />
          </a> */}
          <a href='https://www.justeat.it/restaurants-pinseria-le-tre-farine-cornaredo/menu'>
            <img src={justEat} className='social-logo' />
          </a>
        </div>
        <div className='social-container'>
          <a href='https://www.facebook.com/PinserialeTreFarineBareggio/' target='_blank'>
            <BsFacebook className='text-white' size={24} />
          </a>
          <a href='https://www.instagram.com/pinseria.letrefarine/' target='_blank'>
            <BsInstagram className='text-white' size={24} />
          </a>
          <a href='https://www.tiktok.com/@pinseriale3farine?lang=it-IT' target='_blank'>
            <BsTiktok className='text-white' size={24} />
          </a>
        </div>
        <span className='text-white mt-3 footer-bio'>Via Sandro Pertini 6 - 20008 Bareggio (MI) | <a href='tel:+393278403672' className='text-white'>+39 3278403672</a> | P.IVA 11083260962</span>
        <span className='text-white mt-2 mb-3 footer-bio'>© Pinseria le 3 Farine - 2023 - All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer