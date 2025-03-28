import React from 'react'

import CartSide from '../components/CartSide/CartSide'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SideMenu from '../components/futhers/SideMenu/SideMenu'

const AboutUs = () => {

    const [activeCart, setActiveCart] = React.useState(false)

    return (

        <>
            <div className="wrapper">
                <Header activeCart={activeCart} setActiveCart={setActiveCart} />
                <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
                <SideMenu />
                <Footer />
            </div>
        </>

    )
}

export default AboutUs
