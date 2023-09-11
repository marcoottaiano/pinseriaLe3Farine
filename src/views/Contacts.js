import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'
import { BsFacebook, BsInstagram, BsTiktok, BsFillTelephoneFill } from "react-icons/bs"
import { SiJusteat } from "react-icons/si"

function Contacts() {
  return (
    <div id='contact'>
      <Header />
      <div className='header-background' />
      <div className='d-flex flex-direction-row down-triangle'>
        <div className='triangle left-triangle' />
        <div className='triangle right-triangle' />
      </div>
      <div className='contact-body'>
        <h1 className='mt-4 fw-bold'>Contattaci!</h1>
        <div className='contact-card'>
          <div className='contact-social-container'>
            <h3 className='text-center mb-4'>Chiamaci o contattaci tramite social!</h3>
            <div className='contact-socials'>
              <a className='social-link' href='tel:+393278403672'>
                <BsFillTelephoneFill className='text-black' size={24} />
                +39 3278403672
              </a>
              <a className='social-link' href='https://www.justeat.it/restaurants-pinseria-le-tre-farine-cornaredo/menu' target='_blank'>
                <SiJusteat className='text-black' size={24} />
                Pinseria Le Tre Farine
              </a>
              <a className='social-link' href='https://www.facebook.com/PinserialeTreFarineBareggio/' target='_blank'>
                <BsFacebook className='text-black' size={24} />
                @PinserialeTreFarineBareggio
              </a>
              <a className='social-link' href='https://www.instagram.com/pinseria.letrefarine/' target='_blank'>
                <BsInstagram className='text-black' size={24} />
                @pinseria.letrefarine
              </a>
              <a className='social-link' href='https://www.tiktok.com/@pinseriale3farine?lang=it-IT' target='_blank'>
                <BsTiktok className='text-black' size={24} />
                @pinseriale3farine
              </a>
            </div>
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacts