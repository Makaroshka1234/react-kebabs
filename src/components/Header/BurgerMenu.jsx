import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsActive } from '../../redux/slices/SideMenu'





const BurgerMenu = () => {


    const dispatch = useDispatch()

    const { isActive } = useSelector(state => state.menu)

        ;

    return (

        <div className={`burger-menu ${isActive ? 'open' : ''}`} onClick={() => dispatch(setIsActive(isActive))}>
            <span></span>
            <span></span>
            <span></span>
        </div>


    )
}

export default BurgerMenu
