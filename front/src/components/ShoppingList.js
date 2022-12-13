import CartItem from './CartItem';
import {React, useContext } from 'react';
import { cartContext } from '../App.js';

function ShoppingList() {
    const { cart, setCart } = useContext(cartContext);
    console.log(cart);

    return cart.map(l => (
        <div>
            <CartItem
                key={l.id} 
                product = {l} />
        </div>
        ));
}
export default ShoppingList;