import CartItem from './CartItem';
import {React, useContext } from 'react';
import { cartContext } from '../App.js';

function ShoppingList() {
    const { cart } = useContext(cartContext);

    return cart.map(l => (
        <div>
            <CartItem
                key={l.id} 
                product = {l} />
        </div>
        ));
}
export default ShoppingList;