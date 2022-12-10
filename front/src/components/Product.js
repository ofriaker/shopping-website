import React from 'react';
import './Product.css';
import { Component } from 'react';

export default class Product extends Component {
  render() {
  return (
    <div className='product-item'>        
        <div className='product-details'>
          <p>Product name: {this.props.name}</p>
          <p>Price: {this.props.price}</p>
        </div>
      <div>
        <img  className='product-image' src={this.props.productImageUrl} alt="" />        
      </div>
    </div>
  );
  }
}