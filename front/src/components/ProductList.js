import Product from './Product.js';
import React, { useEffect, useState } from 'react';

export default function ProductList(props) {
// const addToCart = props.addToCart;
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
    
  //const [cart, setCart] = React.useState(list);

  return products.map(product => (
    <div>
      <Product
        key={product.id}
        product={product}
        addToCart={props.addToCart} />
    </div>
  ));
      // return products.map(product => (
      //   <Product addToCart={addToCart} key={product.name}
      //     name={product.name}
      //     price={product.price}
      //     description={product.description}
      //     productImageUrl={product.productImageUrl}
      //   />
      // ));
    
}
  