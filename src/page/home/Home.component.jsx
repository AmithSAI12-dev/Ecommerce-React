import React from 'react';
import BrandPreview from '../../components/brand-preview/BrandPreview.component';
import CategoryPreview from '../../components/categories-preview/CategoryPreview.component';
import CustomBtn from '../../components/custom-btn/CustomBtn.component';
import ImageCarousel from '../../components/image-carousel/ImageCarousel.component';
import SectionTitle from '../../components/section-title/SectionTitle.component';
import Poster from '../../components/poster/Poster.component';
import './Home.style.css';
import ProductPreview from '../../components/product-preview/ProductPreview.component';
import NewsLetter from '../../components/news-letter/NewsLetter.component';

function Home() {
    return (
        <React.Fragment>
            <main>
                {/* Intro Section */}
                <section className="intro">
                    <div className="container intro__content">
                        <h1 className="title--xl text-capitalize mb-40">Further Reductions <br/>& New Lines Added</h1>
                        {/* Custom Button Component */}
                        <CustomBtn value="discover" type='primary'/>
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
            <div className="mt-80"></div>

            <section className="posterSection pt-60">
                <Poster 
                    image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Banners-9.7.21-Route-One-Desktop_1.jpg?v=1625759458"
                    title={"Route One O.B. \nGraphics"}
                    subTitle='New Season'
                    value="shop now"
                />
            </section>
            {/* Product Section */}
            <section className="newRelease pt-60">
                <div className="newRelease__content container">
                    <div className="newRelease__title">
                        <SectionTitle title="new release" subTitle="fresh of the truck" />
                    </div>
                    <div className="newRelease__btn">
                        <CustomBtn value="show new in" />
                    </div>
                </div>
                <div className="container">
                    <ProductPreview columns={4} />
                </div>
            </section>
            {/* Poster Section 2 */}
            <div className="mt-80"></div>
            <section className="posterSection pt-60">
                <div className="container">
                    <div className="posterSection__grid">
                        <Poster 
                            image='https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Banners-9.7.21-Small-Nike-SB_1_x1200.jpg?v=1625759284'
                            title={"NIKE SB \nBLZR Court"}
                            subTitle='New Season'
                            value="discover"
                        />
                        <Poster 
                            image='https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Banners-9.7.21-Small-Bones_1_x1200.jpg?v=1625759331'
                            title={"Bones \nWheels"}
                            subTitle='Latest'
                            value="discover"
                        />
                    </div>
                    <div className="mt-50"></div>
                    <div className="posterSection__grid">
                        <Poster 
                            image='https://cdn.shopify.com/s/files/1/0274/4293/7933/articles/Skate-Update-24.6.21-Blog-4-Self-Storage_2090x.jpg?v=1624523290'
                        />
                        <div className="posterSection__content">
                            <h2 className="title--xl">Self Storage: Neil MacDonald</h2>
                            <p>Neil Macdonald is many things to many different people. To some he's the 
                                brains behind Sidewalk Magazine's impressive musical interview back catalogue,
                                 to others he's the assertive and highly opinionated Uk Skate Forum 
                                 moderator and Palace obsessive 'Buildafire.' To most... </p>
                                 <div className="mt-50"></div>
                            <CustomBtn value="read full article" hoverType={true} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Poster Section 3 */}
            <div className="mt-80"></div>
            <section className="posterSection pt-60">
                <Poster 
                    image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/Banners-9.7.21-Anti-Hero-Grimple-Desktop_1.jpg?v=1625759402"
                    title={"Anti-Hero \nGrimple Snips"}
                    subTitle='New Season'
                    value="discover"
                />
            </section>
            {/* Product Slider Section 2 */}
            <section className='featured-product pt-60'>
                <div className="container pt-60">
                    <ImageCarousel />
                </div>
            </section>
            {/* Poster Section 4 */}
            <div className="mt-80"></div>
            <section className="posterSection pt-60">
                <Poster 
                    image="https://cdn.shopify.com/s/files/1/0274/4293/7933/files/sustainable-route-main-banner.jpg?v=1619190225"
                />
            </section>
            {/* News Letter Section */}
            <NewsLetter />
        </React.Fragment>
    )
}

export default Home;