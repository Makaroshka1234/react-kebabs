import axios from 'axios'
import React, { useEffect } from 'react'
import './productList.css'
import { useItems } from '../../providers/ItemsProvider'
import { Link } from 'react-router'
const KebabList = () => {

    const { items, activeCategory, addItemCart } = useItems()

    let filterItems = items.filter(item => item.category === `${activeCategory}`)

    useEffect(() => {
        console.log(filterItems);

    }, [activeCategory])

    function checkItem(item) {
        console.log(item);

    }

    return (

        <div className="container">
            <div className="kebab__list-inner">
                <ul className='product__list'>
                    {filterItems.map(item => (

                        <li key={item.id} className="product__list-item">

                            <div className="list__item-inner">
                                <Link to={`/product/` + item.id}>
                                    <img src={item.imgUrl} alt="" className='product-img' />


                                    <p className='item-title'>{item.title}</p>
                                    <p className="item-weight">{item.weight} г</p>
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
                                    <button className="purshare-btn" onClick={() => addItemCart(item)} ><span>В корзину</span></button>
                                </div>
                            </div>
                        </li>



                    ))}


                </ul>
            </div>
        </div>

    )
}

export default KebabList
