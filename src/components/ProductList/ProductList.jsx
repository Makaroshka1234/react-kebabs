import axios from 'axios'
import React, { useEffect } from 'react'
import './productList.css'
import { useItems } from '../../providers/ItemsProvider'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/CartSlice'

const ProductList = () => {

    const dispatch = useDispatch()

    const { items, activeCategory, setItems } = useItems()





    return (
        <section className="kebab-list">
            <div className="container">
                <div className="kebab__list-inner">
                    <p className="kebab-list-title">Найпопулярніші позиції</p>
                    <ul className='product__list'>
                        {Array.isArray(items) && items.map(item => (



                            <li key={item.id} className="product__list-item">
                                <img src={item.imgUrl} alt="" className='product-img' />
                                <div className="list__item-inner">
                                    <Link to={`/product/` + item.id}>
                                        <p className='item-title'>{item.title}</p>
                                        {
                                            item.weight && <p className="item-weight">{item.weight}г </p>
                                        }

                                        <p className="item-description">{item.description}</p>
                                    </Link>
                                    <div className="product__item-bottom">
                                        <div className="item-price-time">
                                            <p className="item__price">{item.price} грн.</p>
                                            <div className="item-hour">
                                                <img src="/images/clock.svg" alt="" className='item-clock-img' />
                                                <p className='item-time-text'>{item.time} хвилин</p>
                                            </div>

                                        </div>
                                        <button className="purshare-btn" onClick={() => dispatch(addToCart(item))} ><span>В корзину</span></button>
                                    </div>
                                </div>
                            </li>



                        ))}


                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductList
