import React, { useEffect } from 'react'

import { Link, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import BurgerMenu from './BurgerMenu'

import './header.css'
import { setActiveCategory } from '../../redux/slices/HeaderSlice'





const Category = () => {

    const dispatch = useDispatch()
    const { categoryUrl, category, activeCategory } = useSelector(state => state.header)






    return (
        <ul className="header__category-list">
            {category.map((category, catId) => (
                <Link to={`/categories/${categoryUrl[catId]}`}>
                    <li key={catId} className={`header__list-item ${activeCategory === catId ? 'active' : ''}`} onClick={() => dispatch(setActiveCategory(catId))}  >
                        <img src="/images/kebab.svg" alt="" className="list-item-img" />
                        <p className="list-item-title" >{category}</p>
                    </li>
                </Link>
            ))
            }
        </ul >
    )
}




const Header = ({ activeCart, setActiveCart }) => {

    const dispatch = useDispatch()
    const { categoryUrl, category, activeCategory, activeCity } = useSelector(state => state.header)
    const { totalPrice } = useSelector(state => state.cart)



    function addActive() {
        setActiveCart(true)
    }


    return (
        <header className="header">

            <div className="header__inner">

                <Link to="/">
                    <img src='/images/logo.svg' alt="logo-kebab" className="header-logo" onClick={() => dispatch(setActiveCategory(null))} />
                </Link>
                <Category />
                <div className="header__location">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"

                    >
                        <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    </svg>
                    <p className='location-city'>{activeCity}</p>
                </div>
                <div className="cart" >
                    <img src="/images/cart.svg" alt="" className="cart-img" onClick={addActive} />
                    <p className="cart-price">{totalPrice} грн</p>
                </div>
                <BurgerMenu />

            </div>

        </header>
    )
}

export default Header
