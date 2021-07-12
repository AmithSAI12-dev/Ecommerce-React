import React from 'react';
import BrandPreview from '../../components/brand-preview/BrandPreview.component';
import CustomBtn from '../../components/custom-btn/CustomBtn.component';
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
            {/* Product Slider Section 1 */}
            {/* Poster Section 1 */}
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