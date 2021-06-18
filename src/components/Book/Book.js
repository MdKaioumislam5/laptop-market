import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Book = ({ event }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [product, setProduct] = useState({})
    console.log(product);
    const history = useHistory()
    const handleCheckOut = () => {
        
        alert('ordered confirmed successfully');
    }
    const {bookType } = useParams();
    console.log(bookType)
    useEffect(() =>{
        fetch(`https://quiet-escarpment-26801.herokuapp.com/product/${bookType}`)
        .then( res => res.json())
        .then(data => setProduct(data))
    }, [bookType])
    return (
            <div className="main p-4 display-content-center">
                <h2 className="text-danger text-center">Checkout Order</h2>
                <h4>Hello  {loggedInUser.name}</h4>
                <h2 className="text-center">Your Order Summery</h2>
                <h1 className="text-primary ">Product Name: {product.name}</h1>
                <h1 className="text-primary ">Product Price: {product.price}</h1>
                <h5>Quantity : 1 </h5>
                <button className="btn btn-success" onClick={handleCheckOut}>CheckOut</button>
            </div>
    );
};

export default Book;