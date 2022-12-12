function CartItem(props) {
    const product = props.product;
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <div className='mt-4 fs-4'>
                        <p>Product name: {product.name}</p>
                        <p>Price: {product.price}</p>
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

export default CartItem;
