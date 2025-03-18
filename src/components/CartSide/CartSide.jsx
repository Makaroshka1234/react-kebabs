import React, { useEffect, useRef } from 'react'

import './cartside.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount, removeItem } from '../../redux/slices/CartSlice'

const CartSide = ({ activeCart, setActiveCart }) => {


    const dispatch = useDispatch()
    const { itemCount } = useSelector(state => state.cart)
    const { cartItems, totalPrice } = useSelector(state => state.cart)





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
                    <img src="/images/close.svg" alt="" className='cart__close-btn' onClick={removeActiveCart} />
                </div>
                <ul ref={listRef} className='cardside__list'>
                    {cartItems.length <= 0 ? 'Ваша корзина порожня' : cartItems.map(item => (
                        <li key={item.id} className="cartside__list-item">
                            <img src={item.imgUrl} alt="item" className='item-img' />
                            <p className="item-title">{item.title}</p>
                            <div className="item-counter">
                                <button className="plus-btn" onClick={() => dispatch(addCount(item))}  >+</button>
                                <input value={item.count} type="text" />
                                <button className='minus-btn' onClick={() => dispatch(removeCount(item))} >-</button>
                            </div>
                            <p className="item-price">{Number(item.price) * item.count}грн </p>
                            <button

                                className="item-delete-btn"
                                onClick={() => dispatch(removeItem(item.id))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 128 128"
                                    className="w-6 h-6"
                                    fill="currentColor"
                                >
                                    <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
                                    <path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
                                </svg>
                            </button>
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
