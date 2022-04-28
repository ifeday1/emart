
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch, Route, Routes} from "react-router-dom";
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
  <>
 <Navbar />
 <Home />
 <Products />
 <Routes>
    <Route exact path='/' component={<Home/>} />
    <Route exact path='/products' component={<Product/>} />
 </Routes>

  </>
  );
}

export default App;
