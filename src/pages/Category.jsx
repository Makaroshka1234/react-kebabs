import React from 'react'

import Header from '../components/Header/Header'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import axios from 'axios'

import FranchiseSection from '../components/FranchiseSection/FranchiseSection'
import { useItems } from '../providers/ItemsProvider'
import SideMenu from '../components/futhers/SideMenu/SideMenu'


const Category = () => {

    const { items, setItems, activeCategory } = useItems()


    React.useEffect(() => {
        if (activeCategory !== undefined) {
            axios.get(`https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs?category=${activeCategory}`).then(res => {
                setItems(res.data)
            }
            ).catch(err => console.log('error axios'));

        }

    }, [activeCategory]);

    const [activeCart, setActiveCart] = React.useState(false)





    return (
        <>

            <Header activeCart={activeCart} setActiveCart={setActiveCart} />
            <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
            <SideMenu />
            <ProductList />

            <Footer />

        </>
    )
}

export default Category
