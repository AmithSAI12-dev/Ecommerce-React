import React from 'react'
import Product from './product/Product.component'
import './ProductPreview.style.css';
import { products } from '../product-preview/product/product.data';

function ProductPreview() {
    return (
        <div className='productPreview mt-50'>
            {/* Products */}
            {
                products.map(props => (
                    <Product {...props} />
                ))
            }
        </div>
    )
}

export default ProductPreview
