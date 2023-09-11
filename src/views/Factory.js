import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sfondo from '../assets/images/sfondo.jpg'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import cloneDeep from 'lodash/cloneDeep';

function Factory() {

  const [form, setForm] = useState({
    name: null,
    surname: null,
    email: null,
    phone: null,
    note: null
  });
  const [isEmailValid, setIsEmailValid] = useState(true);


  function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleOnChange(evt) {
    const newState = cloneDeep(form);
    if (evt.target.name !== 'phone' || (evt.target.name === 'phone' && evt.target.value.length <= 10)) {
      newState[evt.target.name] = evt.target.value;
    }
    setForm(newState)
    if (evt.target.name == 'email' && evt.target.value !== '' && !isEmailValid) setIsEmailValid(true);
  }

  function handleOnSubmit() {
    let emailValid = checkEmail(form.email);
    setIsEmailValid(emailValid);
    if (emailValid) {
      //chiamata
    }
  }

  return (
    <div id='factory'>
      <Header />
      <div className='header-background' />
      <div className='d-flex flex-direction-row down-triangle'>
        <div className='triangle left-triangle' />
        <div className='triangle right-triangle' />
      </div>
      <div className='factory-body'>
        <h1 className='mt-4 fw-bold'>Basi della pinsa</h1>
        <p className='mt-3 factory-text'>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
        </p>
        <img
          src={sfondo}
          className='factory-img'
        />
        <p className='mt-4 factory-text text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor quam at nibh eleifend, maximus lobortis diam feugiat
        </p>
        <hr className='vector mt-4 mb-4' />
        <h2 className='mt-3 text-center fw-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <form className='factory-form'>
          <div className='d-flex flex-row justify-content-between w-100'>
            <FloatingLabel
              label="Nome"
              className="floating-field"
            >
              <Form.Control
                type="text"
                placeholder="nome"
                name='name'
                className='text-capitalize'
                onChange={handleOnChange}
                value={form.name}
              />
            </FloatingLabel>
            <FloatingLabel
              label="Cognome"
              className="floating-field"
            >
              <Form.Control
                type="text"
                placeholder="cognome"
                name='surname'
                className='text-capitalize'
                onChange={handleOnChange}
                value={form.surname}
              />
            </FloatingLabel>
          </div>
          <div className='d-flex flex-row justify-content-between w-100'>
            <FloatingLabel
              label="Email"
              className="floating-field"
            >
              <Form.Control
                type="email"
                placeholder="email"
                name='email'
                onChange={handleOnChange}
                value={form.email}
                isInvalid={!isEmailValid}
              />
              <Form.Control.Feedback type='invalid'>
                Inserire un'email valida
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              label="Telefono"
              className="floating-field"
            >
              <Form.Control
                type="number"
                placeholder="Telefono"
                name='phone'
                onChange={handleOnChange}
                value={form.phone}
              />
            </FloatingLabel>
          </div>
          <FloatingLabel
            label="Note"
            className="floating-field textarea"
          >
            <Form.Control
              as="textarea"
              placeholder="Note"
              rows={4}
              className='text-capitalize'
              name='note'
              onChange={handleOnChange}
              value={form.note}
            />
          </FloatingLabel>
          <Button
            variant='primary'
            className='button-text mt-4'
            size='lg'
            disabled={!isEmailValid || !form.name || !form.surname || !form.email || !form.phone}
            onClick={handleOnSubmit}
          >
            Invia
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Factory