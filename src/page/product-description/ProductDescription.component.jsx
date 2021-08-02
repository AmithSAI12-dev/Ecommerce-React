import React from 'react';
import './ProductDescription.style.css';

function ProductDescription() {
    return (
        <>
            <div className="mt-80"></div>
            <section className="container d-flex justify-space-between flex-wrap">
                <div className="productDesc__image">
                    {
                        Array(8)
                        .fill()
                        .map((_, i) => 
                            <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/products/001118827_804x.progressive.jpg?v=1627313527" alt="" />
                        )
                    }
                </div>
                <div className="productDesc__content">
                    <h1 className="title--md">New Balance Numeric 440 Skate Shoes - Cream/White</h1>
                    <p className="title--sm">$64.99</p>
                </div>
            </section>  
        </>
    )
}

export default ProductDescription
