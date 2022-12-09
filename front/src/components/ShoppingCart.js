import React from 'react';
import { products } from './data';
import Product from './Product';


export default function ShoppingCart() {

        return products.map(product => (
            <div>
                <h1>Shopping</h1>
                {/* <Product
                name={product.name}
                price={product.price}
                productImageUrl={product.productImageUrl} /> */}
                </div>
            ));

}