import React from 'react';
 import { Component } from 'react';

export default class Product extends Component {
  render() {
  return (
    <div className='container'>        
        <div className='row'>
          <div className='col-sm-8'>
            <div className='mt-4 fs-4'>
              <p>Product name: {this.props.name}</p>
              <p>Price: {this.props.price}</p>
              <button class="btn btn-success">Add To Shopping Cart</button>
            </div>
            
          </div>
        <div className='col-sm-4'>
          <img className='mw-100 h-90 rounded float-right' src={this.props.productImageUrl} alt="" />
          </div>
        </div>
        <hr></hr>
    </div>
  );
  }
}