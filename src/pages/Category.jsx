import React from 'react'

import Header from '../components/Header/Header'
import KebabList from '../components/ProductList/KebabList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import axios from 'axios'

import FranchiseSection from '../components/FranchiseSection/FranchiseSection'
import { useItems } from '../providers/ItemsProvider'


const Category = () => {

    const { items, setItems } = useItems()

    React.useEffect(() => {
        axios.get('https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs').then(res => {
            setItems(res.data)

        })

    }, []);

    const [activeCart, setActiveCart] = React.useState(false)





    return (
        <div className="wrapper">

            <Header activeCart={activeCart} setActiveCart={setActiveCart} />
            <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />

            <KebabList />

            <Footer />

        </div>
    )
}

export default Category
