import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Shop.style.css';
import { ReactComponent as Grid4 } from '../../assets/grid4.svg';
import { ReactComponent as Grid6 } from '../../assets/grid6.svg';
import ProductPreview from '../../components/product-preview/ProductPreview.component';
import NewsLetter from '../../components/news-letter/NewsLetter.component';
import CustomBtn from '../../components/custom-btn/CustomBtn.component';

function Shop() {
    const [column, setColumn] = useState(6);
    return (
        <>
            {/* SHOP HEADER */}
            <section className='shop__header'>
                <div className="container d-flex justify-space-between flex-wrap">
                    <div className="shop__headerContent">
                        <h1 className="title--lg text-capitalize">New in</h1> 
                        <p>Shop your favourite brands with all the latest drops. 
                            We’ve selected the best of the best from Nike SB, Thrasher, Vans Skateboarding, 
                            Adidas Skateboarding, Dickies, Patagonia, Carhartt and a whole load more.</p>   
                    </div>
                    <div className="shop__headerRefine">
                        <h2 className="title--xs text-uppercase text-center">Refine by</h2>
                        <div className="shop__headerRefineCollection d-flex justify-content-center">
                            {
                                Array(6).fill().map((_,i) => 
                                    <Link to='/'>
                                        <div className="shop__headerRefineImg">
                                            <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/collections/plain-t-shirts_e4efc952-e0af-463d-a34e-dc853854a9ca_182x182.jpg?v=1598098150" alt="" />
                                        </div>
                                        <h3 className="title--xs text-center">T-shirts</h3>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* SHOP BODY */}
            <section className="shop__body">
                <div className="shop__navigationTop">
                    <div className="container d-flex justify-space-between align-items-center">
                        <div className="shop__sortBy">
                            <p>Sort by</p>
                            <div className="shop__select">
                                <select name="sort" id="sort">
                                    <option value="Relevance" selected>Relevance</option>
                                    <option value="Newest">Newest</option>
                                    <option value="Most Popular">Most Popular</option>
                                    <option value="Highes Price">Highest Price</option>
                                    <option value="Lowest Price">Lowest Price</option>
                                    <option value="Largest Discount">Largest Discount</option>
                                </select>
                            </div>
                        </div>
                        <p>1,214 products</p>
                        <div className="shop__gridType">
                            <Grid4 className={`${column===4 ? 'active' : ''}`} onClick={() => {
                                    setColumn(4)
                                }
                            }/>
                            <Grid6 className={`${column===6 ? 'active' : ''}`} onClick={() => setColumn(6)}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mb-200'>
                <ProductPreview columns={column} />
                <div className="mt-100 d-flex justify-content-center">
                    <CustomBtn value="load more" hoverType={true} />
                </div>
            </section>
            <NewsLetter />
        </>
    )
}

export default Shop
