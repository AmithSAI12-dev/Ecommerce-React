import React, { useState } from 'react'
import './Header.style.css';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as User} from '../../assets/user.svg';
import {ReactComponent as Wishlist} from '../../assets/wishlist.svg';
import {ReactComponent as Cart} from '../../assets/cart.svg';
import MobileNav from '../mobile-nav/MobileNav.component';

function Header() {
    // State to toggle mobile dropdown
    const [open, setOpen] = useState(false);
    return (
        <header className='header'>
            <div className='container'>
                {/* Header Mobile Icon */}
                <div className="header__mobile" onClick={() => setOpen(!open)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                {/* Header Mobile Navigation */}
                { open && <MobileNav />}
                {/* Header Logo */}
                <a href='/' className='header__logo'><Logo /></a>
                {/* Header Navigation */}
                <div className='header__navigation'>
                    <div className='header__navigationItem'><a href='/'>Men</a></div>
                    <div className='header__navigationItem'><a href='/'>Women</a></div>
                </div>
                {/* Header Search */}
                <form action='/' className='header__form'>
                    <button type='submit' className='header__btn'><Search /></button>
                    <input type='text' placeholder='Search products..' className='header__input'/>
                </form>
                {/* Header Icons */}
                <div className="header__icons">
                    <img src="https://cdn.shopify.com/s/files/1/0274/4293/7933/t/375/assets/club-logo-dark.svg?v=1225262083578130312" alt="Club" />
                    <User />
                    <Wishlist />
                    <Cart />
                </div>
                
            </div>
        </header>
    )
}

export default Header
