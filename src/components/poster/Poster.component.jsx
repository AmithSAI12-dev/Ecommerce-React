import React from 'react'
import CustomBtn from '../custom-btn/CustomBtn.component'
import './Poster.style.css';

function Poster({image, title, subTitle, value}) {
    return (
        <div className='poster' style={{backgroundImage: `url(${image})`}}>
            <div className="poster__container">
                <h3 className='title--sm text-capitalize'>{subTitle}</h3>
                <h2 className="title--xl text-capitalize mb-40">{title}</h2>
                <CustomBtn value={value} type='primary'/>
            </div>
        </div>
    )
}

export default Poster
