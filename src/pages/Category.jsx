import React from 'react'
import axios from 'axios'

import { useItems } from '../providers/ItemsProvider'
import { useSelector } from 'react-redux'

import Header from '../components/Header/Header'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import FranchiseSection from '../components/FranchiseSection/FranchiseSection'
import SideMenu from '../components/futhers/SideMenu/SideMenu'



const Category = () => {

    const { items, setItems } = useItems()

    const { activeCategory } = useSelector(state => state.header)

    React.useEffect(() => {
        if (activeCategory !== null) {
            axios.get(`https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs?category=${activeCategory}`).then(res => {
                setItems(res.data)
            }
            ).catch(err => console.log('error axios'));

        }

    }, [activeCategory]);

    const [activeCart, setActiveCart] = React.useState(false)





    return (
        <>
            <div className="wrapper">
                <Header activeCart={activeCart} setActiveCart={setActiveCart} />
                <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
                <SideMenu />
                <ProductList />

                <Footer />
            </div>
        </>
    )
}

export default Category
