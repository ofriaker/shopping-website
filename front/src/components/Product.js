import React from 'react';

const Product = (props) => {

  const addToCart = () =>{
    console.log(props);
    alert("hi");
  };

  return (
    <div className='container'>        
        <div className='row'>
          <div className='col-sm-8'>
            <div className='mt-4 fs-4'>
              <p>Product name: {this.props.name}</p>
              <p>Price: {this.props.price}</p>
            <button class="btn btn-outline-success" onClick={addToCart()}>Add To Shopping Cart</button>
            </div>
            
          </div>
        <div className='col-sm-4'>
          <img className='mw-100 h-80 rounded float-right' src={this.props.productImageUrl} alt="" />
          </div>
        </div>
        <hr></hr>
    </div>
  ); 
};

export default Product;
