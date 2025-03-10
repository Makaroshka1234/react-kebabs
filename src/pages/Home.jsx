import React from 'react'
import Header from '../components/Header/Header'
import KebabList from '../components/ProductList/KebabList'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>


            <div className="wrapper">
                <Header />
                <KebabList />
                <Footer />
            </div>

        </>
    )
}

export default Home
