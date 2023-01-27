import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import BurgerShop from './components/BurgerShop/BurgerShop';

function App() {
  return (
  <>
  <Nav/>
  <main>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/burgers" element={<BurgerShop/>}/>
  </Routes>
  </main>
  </>
  );
}

export default App;
