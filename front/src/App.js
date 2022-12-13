import React, { createContext, useState } from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export const cartContext = createContext();

export default function App() {

  const [cart, setCart] = useState([]);
  const [isShoppingCart, setIsShoppingCart] = useState(false);
  const value = {cart, setCart};
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="/">
        </a>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => setIsShoppingCart(!isShoppingCart)}
        >
          {isShoppingCart ? (
            <i className="fa-solid fa-house-user">To Product List</i>
          ) : (
                <i className="fas fa-shopping-cart">To Shopping Cart</i>
          )}
        </button>
      </div>
    </nav>

    <div className="App">
        <cartContext.Provider value={value}>
      {isShoppingCart ? 
        (<ShoppingCart/>) : (<ProductList/>)
      }
      </cartContext.Provider>
    </div>
    </div>
  );
}

