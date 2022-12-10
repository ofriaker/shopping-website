import CartItem from './CartItem';
import React from 'react';
//import { list } from './data';

function ShoppingList(props) {
    const cart = props.cart;
    //const [cart, setCart] = React.useState(list);

    return cart.map(l => (
        <div>
            <CartItem
                key={l.id} 
                product = {l} />
        </div>
        ));
}
export default ShoppingList;