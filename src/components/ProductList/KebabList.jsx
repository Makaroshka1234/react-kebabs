import axios from 'axios'
import React from 'react'
import './productList.css'
const KebabList = () => {
    const [items, setItems] = React.useState([])


    React.useEffect(() => {
        axios.get('https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs').then(res => {
            setItems(res.data)
        })

    }, []);

    console.log(items);

    return (
        <div className="container">
            <div className="kebab__list-inner">
                <ul className='product__list'>
                    {Array.isArray(items) && items.map(item => (
                        <li className="product__list-item">
                            <img src={item.imgUrl} alt="" className='product-img' />
                            <div className="list__item-inner">

                                <p className='item-title'>{item.title}</p>
                                <p className="item-weight">{item.weight} г</p>
                                <p className="item-description">{item.description}</p>
                                <div className="product__item-bottom">
                                    <div className="item-price-time">
                                        <p className="item__price">{item.price} грн.</p>
                                        <div className="item-hour">
                                            <img src="images/clock.svg" alt="" className='item-clock-img' />
                                            <p className='item-time-text'>{item.time} хвилин</p>

                                        </div>

                                    </div>
                                    <button className="purshare-btn"><span>В корзину</span></button>
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
