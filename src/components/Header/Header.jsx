import React, { useEffect } from 'react'
import './header.css'
import BurgerMenu from './BurgerMenu'
import { useItems } from '../../providers/ItemsProvider'
import { Link, useParams } from 'react-router'
import { useSelector } from 'react-redux'






const Category = () => {
    const { category, activeCategory, setActiveCategory } = useItems()



    function logCat(id) {
        setActiveCategory(id)
        console.log(activeCategory);


    }

    let { categoryName } = useParams();

    console.log(categoryName);

    return (
        <ul className="header__category-list">
            {category.map((category, catId) => (
                <Link to={`/categories/${category}`}>
                    <li key={catId} className={`header__list-item ${activeCategory === catId ? 'active' : ''}`} onClick={() => setActiveCategory(catId)} >
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

    const { category, activeCategory, setActiveCategory } = useItems()

    const { totalPrice } = useSelector(state => state.cart)



    function addActive() {
        setActiveCart(true)
    }
    return (
        <header className="header">

            <div className="header__inner">
                <Link to="/">
                    <img src='/images/logo.svg' alt="logo-kebab" className="header-logo" />
                </Link>
                <Category />
                <div className="header__location"></div>
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
