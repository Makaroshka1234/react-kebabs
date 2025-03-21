import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { ItemsProvider } from './providers/ItemsProvider';
import Category from './pages/Category';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import AboutUs from './pages/AboutUs';
import DeliveryPayment from './pages/DeliveryPayment';
import Product from './pages/Product';
import { useEffect } from 'react';
import ScrollTop from './components/ScrollTop';

import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {


  return (
    <div className="App">
      <div className='wrapper'>
        <Provider store={store}>
          <ItemsProvider>

            <BrowserRouter>
              <ScrollTop />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories/:categoryName' element={<Category />} />
                <Route path='/aboutUs' element={<AboutUs />} />
                <Route path='/deliveryandpayment' element={<DeliveryPayment />} />
                <Route path='/product/:id' element={<Product />} />

              </Routes>
            </BrowserRouter>

          </ItemsProvider>
        </Provider>
      </div>
    </div>
  );
}

export default App;
