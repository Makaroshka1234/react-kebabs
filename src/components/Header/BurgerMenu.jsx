import React from 'react'

const BurgerMenu = () => {
    const [isActive, setIsActive] = React.useState(false)

    function changeBurgerActive() {
        setIsActive(!isActive)
    }


    return (
        <div className={`burger-menu ${isActive ? 'open' : ''}`} onClick={changeBurgerActive}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerMenu
