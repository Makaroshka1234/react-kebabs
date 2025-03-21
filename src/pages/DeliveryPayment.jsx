import React from 'react'
import Header from '../components/Header/Header'
import CartSide from '../components/CartSide/CartSide'
import Footer from '../components/Footer/Footer'
import Delivery from '../components/DeliverySection/Delivery'

const DeliveryPayment = () => {
    const [activeCart, setActiveCart] = React.useState(false)

    return (

        <>
            <Header activeCart={activeCart} setActiveCart={setActiveCart} />

            <Delivery />
            <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
            <Footer />
        </>

    )
}

export default DeliveryPayment
