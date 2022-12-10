import React from 'react';
import ShoppingList from './ShoppingList';


export default function ShoppingCart(props) {
    //const cart = props.cart;
    return (
        <div className='container'>
        <h1> My Shoping Cart</h1>
        <ShoppingList cart={props.cart}></ShoppingList>
        <button type="button" className="btn btn-outline-success btn-lg">Buy Now</button>  
        </div>
    )

}