import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="shoppingCart" element={<ShoppingCart />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

