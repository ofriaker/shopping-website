//import { products } from './data';
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
        <Product key={product.name}
          name={product.name}
          price={product.price}
          description={product.description}
          productImageUrl={product.productImageUrl}
        />
      ));
    
}
  