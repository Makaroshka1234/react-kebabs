import React from 'react'

import './cartside.css'
const CartSide = ({ activeCart, setActiveCart }) => {

    function removeActiveCart() {
        setActiveCart(false)
    }

    return (

        <div className={`cardside ${activeCart ? 'active' : ''}`} >
            <div className="cardside__inner">
                <div className="cardside-top">
                    <h1 className="top-title">Корзина</h1>
                    <img src="images/close.svg" alt="" className='cart__close-btn' onClick={removeActiveCart} />
                </div>
                <ul className='cardside__list'></ul>
                <div className="cardside__bottom">
                    <div className="cardide__bottom-section">
                        <p className='cardside__price-text'>До оплати: </p>
                        <h1 className='cardside-total'>172 грн</h1>
                    </div>

                    <button className='cardside_btn'>Оформити замовлення</button>
                </div>
            </div>

        </div>

    )
}

export default CartSide
