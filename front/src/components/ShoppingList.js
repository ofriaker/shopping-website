import React from 'react';
import CartItem from './CartItem';
import { list } from './data';

export default function ShoppingList() {

    return list.map(l => (
        <div>
            <CartItem
            name={l.name}
            price={l.price}
            productImageUrl={l.productImageUrl} />
        </div>
        ));
}