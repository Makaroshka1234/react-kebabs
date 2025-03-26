import React from 'react'


import './style.css'
import { useSelector } from 'react-redux'

const SideMenu = () => {

    const { isActive } = useSelector(state => state.menu)


    return (



        <aside className={`sidemenu ${isActive ? 'open' : ''}`}>
            <div className="sidemenu__inner">
                <ul className="sidemenu__list">
                    <li className="sidemenu__list-item">
                        <p className="item-title">Про нас</p>
                    </li>
                    <li className="sidemenu__list-item">
                        <p className="item-title">Про нас</p>
                    </li>
                    <li className="sidemenu__list-item">
                        <p className="item-title">Про нас</p>
                    </li>
                    <li className="sidemenu__list-item">
                        <p className="item-title">Про нас</p>
                    </li>
                    <li className="sidemenu__list-item">
                        <p className="item-title">Доставка <a href="tel:096 960 53 27">+380 96 960 53 27</a></p>
                    </li>
                </ul>
            </div>
        </aside>


    )
}

export default SideMenu
