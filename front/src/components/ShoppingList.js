import React from 'react';
import { list } from './data';
import Product from './Product';

export default function ShoppingList() {

    return list.map(l => (
        <div>
            <Product
            name={l.name}
            price={l.price}
            productImageUrl={l.productImageUrl} />
        </div>
        ));
}