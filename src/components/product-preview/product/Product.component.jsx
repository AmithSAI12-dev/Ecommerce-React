import React from 'react'
import './Product.style.css';

function Product({name, price, image, variants}) {
    return (
        <div className='product'>
            {/* Product Image */}
            <a className="product__img" href='/'>
                <img src={image} alt={name} />
                {/* Product Tag */}
                {/* Product Overlay */}
                <div className="product__overlay">
                    <h3 className="product__overlayTitle text-uppercase">quick add</h3>
                    <div className="product__variants">
                        {
                            variants.map(variant => (
                                <div className="product__variantOption">{variant}</div>
                            ))
                        }
                    </div>               
                </div>
            </a>
            {/* Product Description */}
            <div className="product__description">
                <h2 className="title--xs"><a href="/">{name}</a></h2>
                <p className="product__price">{price}</p>
            </div>
        </div>
    )
}

export default Product
