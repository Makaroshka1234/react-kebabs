import React, { useEffect, useRef } from 'react'

import './cartside.css'
import { useItems } from '../../providers/ItemsProvider'
const CartSide = ({ activeCart, setActiveCart }) => {



    const { cartItems } = useItems()
    console.log(cartItems);

    const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

    function removeActiveCart() {
        setActiveCart(false)
    }



    const listRef = useRef()

    useEffect(() => {
        if (listRef.current) {
            listRef.current.style.overflowY = 'scroll';
        }
    }, []);


    return (

        <div className={`cardside ${activeCart ? 'active' : ''}`} >
            <div className="cardside__inner">
                <div className="cardside-top">
                    <h1 className="top-title">Корзина</h1>
                    <img src="images/close.svg" alt="" className='cart__close-btn' onClick={removeActiveCart} />
                </div>
                <ul ref={listRef} className='cardside__list'>
                    {cartItems.length <= 0 ? 'Ваша корзина порожня' : cartItems.map(item => (
                        <li className="cartside__list-item">
                            <img src={item.imgUrl} alt="item" className='item-img' />
                            <p className="item-title">{item.title}</p>
                            <div className="item-counter">
                                <button className="plus-btn" >+</button>
                                <input value={item.count} type="text" />
                                <button className='minus-btn' >-</button>
                            </div>
                            <p className="item-price">{item.price}</p>
                            <img src="" alt="" />
                        </li>
                    ))}
                </ul>
                <div className="cardside__bottom">
                    <div className="cardide__bottom-section">
                        <p className='cardside__price-text'>До оплати: </p>
                        <h1 className='cardside-total'>{totalPrice} грн</h1>
                    </div>

                    <button className='cardside_btn'>Оформити замовлення</button>
                </div>
            </div>

        </div>

    )
}

export default CartSide
