import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import foto from '../assets/images/sfondo.jpg'

function About() {
  return (
    <div id='about'>
      <Header />
      <div className='background-container d-flex align-items-end text-center'>
        <div className='bg-overlay' />
        <div className='about-title-container'>
          <h1 className='text-white mb-4'>Pinseria le 3 farine</h1>
          <h2 className='text-white'>Since 2019</h2>
        </div>
      </div>
      <div className='story-container d-flex flex-column justify-content-center align-items-center'>
        <h1 className='mb-4 mt-4'>Storia</h1>
        <p className='about-text text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.
        </p>
        <img
          src={foto}
          className='about-img'
        />
        <p className='about-text text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default About