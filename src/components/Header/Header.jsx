import React from 'react'
import './header.css'
import BurgerMenu from './BurgerMenu'
import { useItems } from '../../providers/ItemsProvider'






const Category = () => {
    const { category, activeCategory, setActiveCategory } = useItems()

    function logCat(id) {
        setActiveCategory(id)
        console.log(activeCategory);


    }
    return (
        <ul className="header__category-list">
            {category.map((category, catId) => (
                <li key={catId} className={`header__list-item ${activeCategory === catId ? 'active' : ''}`}>
                    <img src="images/kebab.svg" alt="" className="list-item-img" />
                    <p className="list-item-title" onClick={() => logCat(catId)}>{category}</p>
                </li>
            ))}
        </ul>
    )
}




const Header = ({ activeCart, setActiveCart }) => {

    function addActive() {
        setActiveCart(true)
    }
    return (
        <header className="header">

            <div className="header__inner">
                <img src='images/logo.svg' alt="logo-kebab" className="header-logo" />
                <Category />
                <div className="header__location"></div>
                <div className="cart" >
                    <img src="images/cart.svg" alt="" className="cart-img" onClick={addActive} />
                    <p className="cart-price">1000 $</p>
                </div>
                <BurgerMenu />
            </div>

        </header>
    )
}

export default Header
