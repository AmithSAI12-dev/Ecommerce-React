import React from 'react'
import Category from './category/Category.component'
import './CategoryPreview.style.css';

function CategoryPreview() {
    const categories = [
        {name: "Completes", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Skateboardbanners__0002_NK7B3073_x1200.jpg?v=1625759575"},
        {name: "Trucks", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Skateboardbanners__0000_Layer_1_x1200.jpg?v=1625759590 "},
        {name: "Decks", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Skateboardbanners__0003_Background_x1200.jpg?v=1625759603"},
        {name: "Wheels", image: "https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Skateboardbanners__0001_Bones-STF-postSQUARE_x1200.jpg?v=1625759620"}
    ]
    return (
        <div className="categoryPreview__container">
            {/* Categories */}
            {
                categories.map(({name, image}) => (
                    <Category name={name} image={image} />
                ))
            }
        </div>
    )
}

export default CategoryPreview
