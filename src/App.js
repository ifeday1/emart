
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home /></Route>
          <Route exact path="/products">
            <Products /></Route>
            <Route path="/products/:id">
            <Product /></Route>
            <Route exact path="/cart">
        <Cart /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
