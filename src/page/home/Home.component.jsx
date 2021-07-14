import React from 'react';
import BrandPreview from '../../components/brand-preview/BrandPreview.component';
import CategoryPreview from '../../components/categories-preview/CategoryPreview.component';
import CustomBtn from '../../components/custom-btn/CustomBtn.component';
import ImageCarousel from '../../components/image-carousel/ImageCarousel.component';
import SectionTitle from '../../components/section-title/SectionTitle.component';
import Poster from '../../components/poster/Poster.component';
import './Home.style.css';

function Home() {
    return (
        <React.Fragment>
            <main>
                {/* Intro Section */}
                <section className="intro">
                    <div className="container intro__content">
                        <h1 className="title--xl text-capitalize mb-40">Further Reductions <br/>& New Lines Added</h1>
                        {/* Custom Button Component */}
                        <CustomBtn value="discover"/>
                    </div>
                </section>
            </main>
            {/* Brand Section */}
            <BrandPreview></BrandPreview>
            {/* Category Section  */}
            <section className='featured-category'>
                <div className="container pt-60">
                    {/* Title */}
                    <SectionTitle title="Latest Skateboard" subTitle="discover" rightAlign={true}/>
                    <CategoryPreview />
                </div>
            </section>
            {/* Product Slider Section 1 */}
            <section className='featured-product pt-60'>
                <div className="container pt-60">
                    <ImageCarousel />
                </div>
            </section>
            {/* Poster Section 1 */}
            <Poster 
                image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Banners-9.7.21-Route-One-Desktop_1.jpg?v=1625759458"
                title={"Route One O.B. \nGraphics"}
                subTitle='New Season'
            />
            {/* Product Section */}
            {/* Poster Section 2 */}
            {/* Poster Section 3 */}
            {/* Product Slider Section 2 */}
            {/* Poster Section 4 */}
            {/* News Letter Section */}
        </React.Fragment>
    )
}

export default Home;