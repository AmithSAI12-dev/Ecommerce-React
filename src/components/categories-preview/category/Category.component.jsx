import React from 'react'
import './Category.style.css';
import CustomBtn from '../../custom-btn/CustomBtn.component';

function Category({name, image}) {
    return (
        <a href="/" className='category'>
            {/* Category Image */}
            <div className="category__img">
                <img src={image} alt={name} />
            </div>
            {/* Category Title */}
            <div className="category__titleWrapper">
                <h4 className="category__title">{name}</h4>
            </div>
            {/* Category Title Hover Only */}
            <div className="category__titleWrapper hover-only">
                <div className="category__title">{name}</div>
            </div>
            {/* Custom Button Component */}
            <div className="category__btn">
                <CustomBtn value='discover' type='primary' />
            </div>
        </a>
    )
}

export default Category
