import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.js';
import { products } from './data.js';

export default function App() {

    return (
      <div>
        <ProductList products={products} />
      </div>
    );
  }
