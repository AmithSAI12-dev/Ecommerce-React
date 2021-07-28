import React from 'react'
import Product from './product/Product.component'
import './ProductPreview.style.css';
import { products } from '../product-preview/product/product.data';

function ProductPreview({columns}) {
    return (
        <div className={`productPreview mt-50 ${columns===4 ? 'col-4' : 'col-6'}`}>
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
