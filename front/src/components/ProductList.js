import { products } from './data';
import Product from './Product.js';
import React from 'react';

export default function ProductList() {
    
      return products.map(product => (
        <Product key={product.name}
          name={product.name}
          price={product.price}
          productImageUrl={product.productImageUrl}
        />
      ));
    
}
  