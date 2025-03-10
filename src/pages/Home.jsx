import React from 'react'
import Header from '../components/Header/Header'
import KebabList from '../components/ProductList/KebabList'

const Home = () => {
    return (
        <>

            <Header />
            <div className="wrapper">
                <div className="container">
                    <KebabList />
                </div>
            </div>
        </>
    )
}

export default Home
