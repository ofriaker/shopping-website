import Product from './Product.js';
import React, { useEffect, useState } from 'react';

export default function ProductList() {

 var [products, setProduct] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/products');
      products = await res.json(); 
      setProduct(products);
    } catch (err) {
    console.log("error",err);
    }
  };

  fetchData();
}, []);
    

  return products.map(product => (
    <div>
      <Product
        key={product.id}
        product={product}/>
    </div>
  ));
}
  