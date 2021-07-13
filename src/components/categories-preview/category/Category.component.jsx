import React from 'react'
import './Category.style.css';
import CustomBtn from '../../custom-btn/CustomBtn.component';

function Category() {
    return (
        <a href="/" className='category'>
            {/* Category Image */}
            <div className="category__img">
                <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Skateboardbanners__0002_NK7B3073_x1200.jpg?v=1625759575" alt="Category Name" />
            </div>
            {/* Category Title */}
            <div className="category__titleWrapper">
                <h4 className="category__title">Completes</h4>
            </div>
            {/* Category Title Hover Only */}
            <div className="category__titleWrapper hover-only">
                <div className="category__title">Completes</div>
            </div>
            {/* Custom Button Component */}
            <div className="category__btn">
                <CustomBtn value='discover' type='primary' />
            </div>
        </a>
    )
}

export default Category
