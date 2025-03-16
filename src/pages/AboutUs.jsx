import React from 'react'
import CartSide from '../components/CartSide/CartSide'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const AboutUs = () => {

    const [activeCart, setActiveCart] = React.useState(false)

    return (

        <div className="wrapper">
            <Header activeCart={activeCart} setActiveCart={setActiveCart} />
            <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />

            <Footer />
        </div>

    )
}

export default AboutUs
