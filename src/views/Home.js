import React from 'react'
import Header from '../components/hooks/header/Header'
import '../styles/home.scss'
import Footer from '../components/hooks/footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className='background-container d-flex align-items-end'>
        <div className='home-title-container'>
          <h1 className='title'>Lorem ipsum dolor sit amet</h1>
          <hr className='divider' />
          <h2 className='title'>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home