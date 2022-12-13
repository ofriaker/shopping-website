import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import React, { createContext, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { list } from './components/data';

export const cartContext = createContext();

export default function App() {

  const [cart, setCart] = useState([]);
  const value = useMemo(
    () => ({ cart, setCart }),
    [cart]
  );

  return (
    <div>
      <cartContext.Provider value={value}>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<ProductList/>} /> 
            <Route path="shoppingCart" element={<ShoppingCart/>} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
    </div>
    
  );
}

