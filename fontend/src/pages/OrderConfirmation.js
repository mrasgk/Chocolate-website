import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Order.css';

const OrderConfirmation = () => {
    return (
        <div className="order-confirmation-page">
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been placed successfully. You will receive a confirmation email shortly.</p>
            <Link to="/shop" className="continue-shopping-button">Continue Shopping</Link>
        </div>
    );
};

export default OrderConfirmation;
