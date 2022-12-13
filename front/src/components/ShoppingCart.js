import React  from 'react';
import ShoppingList from './ShoppingList';
import { useEffect,useState, useContext} from 'react';
import { cartContext } from '../App';


export default function ShoppingCart(props) {
    const {cart, setCart} = useContext(cartContext);
    const [total, setTotal] = useState(0);
    const [disable, setDisable] = React.useState(false);

    useEffect(() => {
        var p =0;
        cart.forEach((item) => {
            p += item.price * 1.0;
        });
        setTotal(p);
    },[cart])

    function BuyCart() {
        var cartState= [];
        cart.forEach((item) => {
            cartState.push({name: item.name});
        });

        const requestToServer = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(cartState),
        };

        fetch('http://localhost:4000/api/cart', requestToServer).then((res) => res.json);
        setDisable(true);
        onBuy();

        
    }

    const onBuy = () => {
        alert("Your order is saved in DB"); 
      };

    return (
        <div className='container'>
        <h1> My Shoping Cart</h1>
            <ShoppingList></ShoppingList>
        <h1>Total: {total}$</h1>  
        <div className='d-md-flex justify-content-md-end'>
        <button type="button" className="btn btn-outline-success btn-lg" disabled={disable} onClick={BuyCart}>Buy Now</button>  
        </div>
        </div>
    )

}