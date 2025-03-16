import React from 'react'
import './style.css'
const Delivery = () => {
    return (
        <section className='delivery'>
            <div className="container">
                <div className="delivery__inner">
                    <ul className="delivery__list">
                        <li className="delivery__list-item">
                            <h2 className="delivery-title">Доставка</h2>
                            <p className="delivery-text">У нашому ресторані ви можете замовити доставку по м. Львів, у нас працює власна служба доставки, яка швидко  та якісно доставить замовлення за вашою адресою</p>
                        </li>
                        <li className="delivery__list-item">
                            <h2 className="delivery-title">Оплата</h2>
                            <p className="delivery-text">У нас існує три види оплат замовлення, це онлайн на сайті, оплата карткою чи готівкою при отримані. Вибрати необхідний метод оплати замовлення ви можете безпосередньо при оформленні замовлення на нашому сайт</p>
                        </li>
                        <li className="delivery__list-item">
                            <h2 className="delivery-title">Повернення</h2>
                            <p className="delivery-text">Усі товари які можна замовити на нашому сайті поверненню не підлягають</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Delivery
