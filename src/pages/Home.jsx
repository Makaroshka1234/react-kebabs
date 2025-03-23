import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ProductList from '../components/ProductList/ProductList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import axios from 'axios'
import { useItems } from '../providers/ItemsProvider'
import FranchiseSection from '../components/FranchiseSection/FranchiseSection'
import QuestionSection from '../components/QuestionSection/QuestionSection'
import ReviewSection from '../components/ReviewSection/ReviewSection'
import AnotherProductSection from '../components/AnotherProductSection/AnotherProductSection'
import { useNavigation } from 'react-router'
import SideMenu from '../components/futhers/SideMenu/SideMenu'
import CityPopUp from '../components/futhers/CityPopUp/CityPopUp'



const Home = () => {



    const [activePop, setActivePop] = useState(false)

    const BodyRef = React.useRef(document.body)


    const { items, setItems } = useItems()


    React.useEffect(() => {
        axios.get('https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs?raiting=5&page=1&limit=8').then(res => {
            setItems(res.data)

        })
        setActivePop(true)
    }, []);

    const [activeCart, setActiveCart] = React.useState(false)

    React.useEffect(() => {
        if (activeCart) {
            BodyRef.current.style.overflowY = 'hidden';
            console.log('Hidden');

        } else {
            BodyRef.current.style.overflowY = 'scroll';
            console.log('Scroll');

        }
    }, [activeCart])




    return (
        <>


            {activePop ? <CityPopUp activePop={activePop} setActivePop={setActivePop} />
                : ''}
            <Header activeCart={activeCart} setActiveCart={setActiveCart} />
            <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />

            <SideMenu />
            <FranchiseSection />
            <ProductList />
            {/* <AdvantageSection /> */}
            <QuestionSection />
            <AnotherProductSection />
            {/* <Footer /> */}



        </>
    )
}

export default Home
