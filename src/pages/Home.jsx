import React from 'react'
import Header from '../components/Header/Header'
import KebabList from '../components/ProductList/KebabList'
import Footer from '../components/Footer/Footer'
import CartSide from '../components/CartSide/CartSide'
import AdvantageSection from '../components/AdvantageSection/AdvantageSection'
import axios from 'axios'
import { useItems } from '../providers/ItemsProvider'

const Home = () => {
    const BodyRef = React.useRef(document.body)


    const { items, setItems } = useItems()


    React.useEffect(() => {
        axios.get('https://67cdd8e7125cd5af7578fb16.mockapi.io/KebabItems/kebabs').then(res => {
            setItems(res.data)

        })

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


            <div className="wrapper">

                <Header activeCart={activeCart} setActiveCart={setActiveCart} />
                <CartSide activeCart={activeCart} setActiveCart={setActiveCart} />
                <KebabList />
                <AdvantageSection />
                <Footer />

            </div>

        </>
    )
}

export default Home
