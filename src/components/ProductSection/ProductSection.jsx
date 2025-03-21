import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useItems } from '../../providers/ItemsProvider';

import './style.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlice';

const ProductSection = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id);
    const { items, setItems } = useItems()
    useEffect(() => {
        axios.get('https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs/' + id).then(res => {
            setItems(res.data)
        })
    }, [])

    return (
        <section className='product'>
            <div className="container">
                <div className="product__inner">
                    <img src={items.imgUrl} alt="product-image" />
                    <aside className="productside">
                        <div className="side-top">
                            <h1 className='product-title'>{items.title}</h1>
                            <div className="product-time">
                                <img src="/images/clock.svg" alt="" className="time-img" />
                                <p className="time"> {items.time} хвилин</p>
                            </div>
                        </div>
                        <p className="product-description">
                            {items.description}
                        </p>
                        <p className="product-weight">{items.weight} г</p>
                        <div className="side-bottom">
                            <div className="counter">
                                <button className="minus-btn">-</button>
                                <input type="text" />
                                <button className='plus-btn'>+</button>
                            </div>
                            <button className="cart-btn" onClick={() => dispatch(addToCart(items))} ><span>В корзину</span> <img src="/images/cart.svg" alt="" className='cart-img' /></button>
                        </div>
                    </aside>

                </div>
            </div>

        </section>
    )
}

export default ProductSection
