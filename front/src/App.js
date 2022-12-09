import { products } from './data.js';
import ProductList from './ProductList.js';

export default function App() {
    return (
      <div>
        <ProductList products={products} />
      </div>
    );
  }
