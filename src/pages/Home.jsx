import React from 'react'
import Header from '../components/Header/Header'
import KebabList from '../components/ProductList/KebabList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'

const Home = () => {

    const [activeCart, setActiveCart] = React.useState(false)


    return (
        <>


            <div className="wrapper">
                <Header activeCart={activeCart} setActiveCart={setActiveCart} />
                <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
                <KebabList />
                <Footer />
            </div>

        </>
    )
}

export default Home
