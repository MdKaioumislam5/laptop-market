import React from 'react';
import { Link } from 'react-router-dom';
const Event = ({ product }) => {
    console.log(product);
  
        // console.log(event);

    return (
        <div className="col-md-3">
            <img style={{ height: '300px' }} src={product.imageURL} alt="" />
            <h3>{product.name}   </h3> 
            <h3>${product.price} </h3> 
            <Link to={`/book/`+product._id}><button>Buy Now</button></Link>
        </div>
    );
};

export default Event;