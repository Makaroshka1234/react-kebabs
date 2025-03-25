import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import ProductSection from '../components/ProductSection/ProductSection'
import SideMenu from '../components/futhers/SideMenu/SideMenu'

const Product = () => {

    const [activeCart, setActiveCart] = React.useState(false)


    return (
        <>
            <div className="wrapper">
                <Header activeCart={activeCart} setActiveCart={setActiveCart} />
                <ProductSection />
                <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
                <SideMenu />
                <Footer />
            </div>
        </>
    )
}

export default Product
