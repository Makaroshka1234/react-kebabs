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

        <ul className='product__list'>
            {Array.isArray(items) && items.map(item => (
                <li className="product__list-item">
                    <img src={item.imgUrl} alt="" className='product-img' />
                    <p>{item.title}</p>
                    <p className="item-weight">{item.weight} г</p>
                    <p className="description">{item.description}</p>
                    <div className="product__item-bottom">
                        <p className="item__price">{item.price}</p>
                        <div className="item-hour">
                            <img src="" alt="" />
                            <p>{item.time}</p>
                        </div>
                    </div>
                </li>

            ))}
        </ul>

    )
}

export default KebabList
