import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import React from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { list } from './components/data';


export default function App() {
  const [cart, setCart] = React.useState(list);

  function addToCart(product){
    // console.log(cart);
    setCart([...cart, product]);
    // console.log(cart);
  }

  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart}/>} />
          <Route path="shoppingCart" element={<ShoppingCart cart={cart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

