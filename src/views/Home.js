import React from 'react'
import Header from '../components/hooks/Header'
import Footer from '../components/hooks/Footer'
import HorizontalCard from '../components/ui/HorizontalCard'


function Home() {
  return (
    <>
      <Header />
      <div className='background-container d-flex align-items-end'>
        <div className='bg-overlay' />
        <div className='home-title-container'>
          <h1 className='text-white'>Lorem ipsum dolor sit amet</h1>
          <hr className='divider' />
          <h2 className='text-white'>Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className='home-quote'>
        <span>"Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet"</span>
      </div>
      <div className='news-section'>
        <div className='news-dark-overlay' />
        <div className='news-text-container'>
          <div className='text-white news-title'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</div>
          <div className='text-white news-subtitle'>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</div>
        </div>
      </div>
      <HorizontalCard title={'Lorem ipsum dolor sit'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nulla non accumsan ultrices.'} btnLabel={'Menú'} />
      <HorizontalCard reverse={true} />
      <Footer />
    </>
  )
}

export default Home