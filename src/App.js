import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { ItemsProvider } from './providers/ItemsProvider';
import Category from './pages/Category';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories/:categoryName' element={<Category />} />
          </Routes>
        </BrowserRouter>
      </ItemsProvider>
    </div>
  );
}

export default App;
