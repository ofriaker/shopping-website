import React from 'react';
import './Product.css';
import { Component } from 'react';


function Product(props){

  const onAdd = () => {
    alert("hi"); 
  };

  //render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='mt-4 fs-4'>
              <p>Product name: {props.name}</p>
              <p>Price: {props.price}</p>
              <button className="btn btn-outline-success" onClick={onAdd}>Add To Shopping Cart</button>
            </div>

          </div>
          <div className='col-sm-4'>
            <img className='mw-100 h-80 rounded float-right' src={props.productImageUrl} alt="" />
          </div>
        </div>
        <hr></hr>
      </div>
    ); 
  }
//}

export default Product;