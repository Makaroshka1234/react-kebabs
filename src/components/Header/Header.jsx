import React from 'react'
import './header.css'
import BurgerMenu from './BurgerMenu'

const Header = ({ activeCart, setActiveCart }) => {

    function addActive() {
        setActiveCart(true)
    }
    return (
        <header className="header">

            <div className="header__inner">
                <img src='images/logo.svg' alt="logo-kebab" className="header-logo" />
                <ul className="header__category-list">
                    <li className="header__list-item">
                        <img src="images/kebab.svg" alt="" className="list-item-img" />
                        <p className="list-item-title">КЕБАБ</p>
                    </li>
                    <li className="header__list-item">
                        <img src="images/combo.svg" alt="" className="list-item-img" />
                        <p className="list-item-title">Комбо меню</p>
                    </li>
                    <li className="header__list-item">
                        <img src="images/dishes.svg" alt="" className="list-item-img" />
                        <p className="list-item-title">Страви</p>
                    </li>
                    <li className="header__list-item">
                        <img src="images/souses.svg" alt="" className="list-item-img" />
                        <p className="list-item-title">Соуси</p>
                    </li>
                    <li className="header__list-item">
                        <img src="images/drinks.svg" alt="" className="list-item-img" />
                        <p className="list-item-title">Напої</p>
                    </li>
                    <li className="header__list-item">
                        <img src="" alt="" className="list-item-img" />
                        <p className="list-item-title">Франшиза Кебабу</p>
                    </li>
                </ul>
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
