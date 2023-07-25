import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HorizontalCard from '../components/HorizontalCard'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import Map from '../components/Map'


function Home() {
  const [email, setEmail] = useState();
  const [personalDataCheckbox, setPersonalDataCheckbox] = useState();
  const [isEmailValid, setIsEmailValid] = useState(true);

  function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailField(evt) {
    if (evt.target.value !== '' && !isEmailValid) {
      setIsEmailValid(true)
    }
    setEmail(evt.target.value);
  }

  function handlePersonalDataCheckbox(evt) {
    setPersonalDataCheckbox(evt.target.checked);
  }

  function handleOnSubmit() {
    let emailValid = checkEmail(email);
    setIsEmailValid(emailValid);
    if (emailValid) {
      //chiamata
    }
  }

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
      <HorizontalCard reverse={true} title={'Lorem ipsum dolor sit'} subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nulla non accumsan ultrices.'} btnLabel={'Aziende'} />
      <hr className='home-vector' />
      <div className='newsletter-section'>
        <div className='text-black newsletter-subtitle text-center'>
          Vuoi rimanere sempre aggiornato sulle novitá e gli eventi che organizziamo?
        </div>
        <div className='text-black newsletter-title fw-bold text-center'>
          Iscriviti alla nostra newsletter!
        </div>
        <div className='form-container'>
          <FloatingLabel
            label="Email"
            className="floating-field"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={handleEmailField}
              value={email}
              isInvalid={!isEmailValid}
            />
            <Form.Control.Feedback type='invalid'>
              Inserire un'email valida
            </Form.Control.Feedback>
          </FloatingLabel>
          <Button
            variant='primary'
            className='button-text'
            size='lg'
            disabled={!email || !personalDataCheckbox}
            onClick={handleOnSubmit}
          >
            Invia
          </Button>
        </div>
        <Form.Check
          type='checkbox'
          label={`Trattamento dati personali`}
          className='mt-3'
          onChange={handlePersonalDataCheckbox}
        />
      </div>
      <div className='map-section mt-4 mb-5'>
        <div className='map-title text-black fw-bold text-center mb-4'>
          Inoltre puoi trovarci qui:
        </div>
        <Map />
      </div>
      <Footer />
    </>
  )
}

export default Home