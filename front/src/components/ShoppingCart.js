import React from 'react';
import ShoppingList from './ShoppingList';


export default function ShoppingCart() {
    return (
        <div className='container'>
        <h1> My Shoping Cart</h1>
        <ShoppingList></ShoppingList>
        <button type="button" class="btn btn-outline-success btn-lg">Buy Now</button>  
        </div>
    )

}