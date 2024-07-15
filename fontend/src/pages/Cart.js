import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Cart.css';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.img} alt={item.name} />
                            <div className="cart-item-details">
                                <h4>{item.name}</h4>
                                <p>Price: {item.price} MAD</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h2>Total Amount: {totalAmount} MAD</h2>
                        <Link to="/checkout">
                            <button className="checkout-button">Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
