import React from 'react'
import Header from '../components/hooks/Header'
import Footer from '../components/hooks/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className='background-container d-flex align-items-end'>
        <div className='bg-overlay'></div>
        <div className='home-title-container'>
          <h1 className='text-white'>Lorem ipsum dolor sit amet</h1>
          <hr className='divider' />
          <h2 className='text-white'>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className='home-quote'>
        <span>"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"</span>
      </div>
      <Footer />
    </>
  )
}

export default Home