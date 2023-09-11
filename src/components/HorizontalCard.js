import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/sfondo.jpg'

function HorizontalCard(props) {

  return (
    <div className={`horizontal-card ${props.reverse && 'row-reverse'}`}>
      <div className='text-container'>
        <div>
          <div className='title-horizontal-card'>{props.title}</div>
          <hr className='card-divider' />
          <span className='text-horizontal-card'>{props.subtitle}</span>
        </div>
        <Button variant='primary' className='button-text' onClick={props.onClick}>{props.btnLabel}</Button>
      </div>
      <img src={logo} className='image-horizontal-card' />
    </div>
  )
}

export default HorizontalCard