import React from 'react'
import './Brand.style.css';

function Brand({image, name}) {
    return (
        <a href="/" className='brand'>
            <img src={image} alt={name} />
        </a>
    )
}

export default Brand
