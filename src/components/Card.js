import React from 'react'

function Card(props) {
    return (
        <div className='card-container'>
            <img
                src={props.img}
                className='card-image'
            />
            <h3 className='fw-bold text-center'>{props.name}</h3>
            <span className='card-text'>{props.description}</span>
        </div>
    )
}

export default Card