import React from 'react'
import CustomBtn from '../custom-btn/CustomBtn.component'
import './Poster.style.css';

function Poster({image, title, subTitle}) {
    return (
        <div className='poster mt-80' style={{backgroundImage: `url(${image})`}}>
            <div className="container">
                <h3 className='title--sm text-capitalize'>{subTitle}</h3>
                <h2 className="title--xl text-capitalize mb-40">{title}</h2>
                <CustomBtn value="shop now" type='primary'/>
            </div>
        </div>
    )
}

export default Poster
