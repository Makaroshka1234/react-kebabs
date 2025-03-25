import React, { useEffect, useRef, useState } from 'react'


import './style.css'
import react from 'react'
import { useSelector } from 'react-redux'


const CityPopUp = ({ activePop, setActivePop }) => {

    const { cities, activeCity } = useSelector(state => state.header)

    const popupRef = useRef(null);

    function closePopUp() {
        setActivePop(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setActivePop(false);
            }
        };

        if (activePop) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activePop]);

    if (!activePop) return null;

    return (



        <div className="city__pop">

            <div ref={popupRef} className="pop__inner">
                <div className="btn-close-box">
                    <button className='pop-close-btn'><img src="/images/close.svg" alt="" onClick={() => closePopUp()} /></button>
                </div>

                <div className="pop-box">

                    <p className="pop-title">Оберіть Ваше Місто</p>
                    <p className="pop-description">Перш ніж розпочати своє замовлення, будь ласка, оберіть ваше місто. Це допоможе нам забезпечити вам найшвидше доставку та найсмачніші страви.</p>
                    <div className="drop-down">
                        <button className="drop-btn">
                            <span>{activeCity}</span>
                            <img src="" alt="" />
                        </button>
                        <ul className="city__list">
                            {cities.map(item => {
                                <li className="city__list-item"><span>{item}</span></li>
                            })}
                        </ul>
                    </div>
                    <button className='city-btn' onClick={() => closePopUp()}>Обрати</button>
                </div>

            </div>
        </div>

    )
}

export default CityPopUp
