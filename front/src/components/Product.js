import React from 'react';

function Product(props){
  const product = props.product;
  const addToCart = props.addToCart;

  const handleClick = () => {
    addToCart(product);
  }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8'>
            <div className='mt-4 fs-4'>
              <p>Product name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Descripton: {product.description}</p>
              <button className="btn btn-outline-success" onClick={handleClick}>Add To Shopping Cart</button>
            </div>

          </div>
          <div className='col-sm-4'>
            <img className='mw-100 h-80 rounded float-right' src={product.productImageUrl} alt="" />
          </div>
        </div>
        <hr></hr>
      </div>
    ); 
  }
//}

export default Product;