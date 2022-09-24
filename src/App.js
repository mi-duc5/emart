import React from "react"
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import { Provider } from "react-redux"
import store from './redux/store';
import Checkout from './component/Checkout';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </Provider>
   </Router>
  );
}

export default App;
