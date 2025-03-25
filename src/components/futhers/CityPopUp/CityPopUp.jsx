import React, { useEffect, useRef, useState } from 'react'


import './style.css'
import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCity } from '../../../redux/slices/HeaderSlice'


const CityPopUp = ({ activePop, setActivePop }) => {

    const { cities, activeCity } = useSelector(state => state.header)
    const [activePopCities, setActivePopCities] = useState(false)
    const dispatch = useDispatch()

    const popupRef = useRef(null);

    function closePopUp() {
        setActivePop(false)
    }

    function closeList(item) {
        dispatch(setActiveCity(item))
        setActivePopCities(false)
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
                        <button className="drop-btn" onClick={() => setActivePopCities(!activePopCities)}>
                            <span>{activeCity}</span>
                            <svg
                                height="20px"
                                width="20px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5" />
                            </svg>
                        </button>
                        <ul className={`city__list ${activePopCities ? 'active' : ''}`}>
                            {cities.map(item => (
                                <li
                                    onClick={() => closeList(item)}
                                    key={item}
                                    className="city__list-item"><span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <button className='city-btn' onClick={() => closePopUp()}>Обрати</button>
                </div>

            </div>
        </div>

    )
}

export default CityPopUp
