import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
   const total = cart.reduce((total,course)=> total+course.price,0);
   
    return (
        <div className="cart">
            <h2 className="headline">Enrolled Course Summary</h2>
            <p>Enrolled Course :{cart.length}</p>
            <p className="price">Total Price:{total}</p>

        </div>
    );
};

export default Cart;