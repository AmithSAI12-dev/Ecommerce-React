import React, { useState } from 'react'
import SectionTitle from '../section-title/SectionTitle.component';
import './ImageCarousel.style.css';

function ImageCarousel() {
    
    const [current, setCurrent] = useState(0);

    const carouselImages = [
        {
            imageLeft: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112385_630x806.progressive.jpg?v=1624979072", 
            imageRight: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112385_1_1300x.jpg?v=1624979072"
        },
        {
            imageLeft: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112383_630x806.progressive.jpg?v=1624979027", 
            imageRight: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112383_1_1300x.jpg?v=1624979027"
        },
        {
            imageLeft: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112381_630x806.progressive.jpg?v=1624978894", 
            imageRight: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001112381_1_1300x.jpg?v=1624978894"
        },
        {
            imageLeft: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001119062_630x806.progressive.jpg?v=1625151157", 
            imageRight: "https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001119062_1_1300x.jpg?v=1625151157"
        }
    ]
    const length = carouselImages.length;

    return (
        <div className='carousel'>
            {/* Carousel Title */}
            <div className='carousel__title'>
                <SectionTitle title='Thrasher Favourites' subTitle='Find Your Style' />
            </div>
            {/* Carousel Indicator */}
            <div className='carousel__indicator'>
                {
                   [...Array(length)].map((el, index) => <span key={index} className={`line ${current===index ? 'active' : ''}`}></span>)
                }
            </div>
            {/* Carousel Image Left */}
            <div className='carousel__left'>
                <div className='carousel__arrow' onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>
                    <img src='https://cdn.shopify.com/s/files/1/0274/4293/7933/t/375/assets/icon-chevron-right.svg?v=4500643479396833321' alt='Previous' />
                </div>
                <div className="carousel__img">
                    {
                        carouselImages.map(({imageLeft},index)=> (
                            <img src={imageLeft} alt="" className={index===current ? 'active' : ''} key={index}/>
                        ))
                    }
                </div>                
                <div className='carousel__arrow' onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>
                    <img src='https://cdn.shopify.com/s/files/1/0274/4293/7933/t/375/assets/icon-chevron-right.svg?v=4500643479396833321' alt='Next' />
                </div>
            </div>
            {/* Carousel Image Right */}
            <div className='carousel__right'>
                {
                    carouselImages.map(({imageRight},index)=> (
                        <img src={imageRight} alt="" className={index===current ? 'active' : ''} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCarousel
