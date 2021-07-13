import React from 'react'
import CustomBtn from '../custom-btn/CustomBtn.component';
import Brand from './brand/Brand.component';
import './BrandPreview.style.css';

function BrandPreview() {
    // Temporary Brand List Need to get it from database
    const brands = [
        { id: 1, name: "Nike SB", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/nike-sb-logo_0fbfc646-b6e6-42da-8a75-8ccb2faf6bee_x114.png?v=1599723115" },
        { id: 2, name: "Skateboarding", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/adidas-logo_9b925788-b750-4e95-9c6c-1eb19224e430_x114.png?v=1599723205" },
        { id: 3, name: "Routeone", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/r1-logo-grey_x114.png?v=1614798557" },
        { id: 4, name: "Vans of the wall", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/vans-logo-grey_x114.png?v=1614798598" },
        { id: 5, name: "Santa Cruz", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/santa-cruz-logo_ff61bc28-5451-4e39-8ceb-b5cf114df291_x114.png?v=1599723232" },
        { id: 6, name: "Carhartt", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/carhartt-logo_x114.png?v=1615369011" }
    ]
    return (
        <section id='brandPreview'>
            <div className="brandPreview container">
                {/* Brands Section */}
                <div className="brandPreview__container">
                    {/* Brand */}
                    {
                        brands.map(({ id, name, image }) =>
                            <Brand key={id} image={image} name={name} />
                        )
                    }
                </div>
                {/* Button section */}
                <div className="brandPreview__button">
                    <CustomBtn value='explore brands' hoverType={true} />
                </div>
            </div>
        </section>
    )
}

export default BrandPreview
