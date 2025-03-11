import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { ItemsProvider } from './providers/ItemsProvider';
function App() {
  return (
    <div className="App">
      <ItemsProvider>
        <Home />
      </ItemsProvider>
    </div>
  );
}

export default App;
