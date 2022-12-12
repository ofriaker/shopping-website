import CartItem from './CartItem';
import React from 'react';

function ShoppingList(props) {
    const cart = props.cart;

    return cart.map(l => (
        <div>
            <CartItem
                key={l.id} 
                product = {l} />
        </div>
        ));
}
export default ShoppingList;