import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Checkout.css';

const Checkout = ({ cart }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });
    const [customerInfo, setCustomerInfo] = useState({
        fullName: '',
        address: '',
        city: '',
        zipCode: '',
        email: '',
        phone: ''
    });
    const navigate = useNavigate();

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cardNumber' || name === 'expirationDate' || name === 'cvv') {
            setCardDetails({
                ...cardDetails,
                [name]: value
            });
        } else {
            setCustomerInfo({
                ...customerInfo,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (paymentMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expirationDate || !cardDetails.cvv)) {
            alert("Please fill in all card details.");
            return;
        }

        const order = {
            cart,
            paymentMethod,
            cardDetails,
            customerInfo
        };

        try {
            const response = await fetch('http://localhost:5000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            });
            const data = await response.json();

            if (data.success) {
                navigate('/order');
            } else {
                alert("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error occurred. Please try again later.");
        }
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <div className="cart-summary">
                <h2>Order Summary</h2>
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.img} alt={item.name} />
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p>Price: {item.price} MAD</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))}
                <h2>Total Amount: {totalAmount} MAD</h2>
            </div>

            <div className="customer-info">
                <h2>Customer Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={customerInfo.fullName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={customerInfo.city}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Zip Code:</label>
                        <input
                            type="text"
                            name="zipCode"
                            value={customerInfo.zipCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <h2>Payment Method</h2>
                    <div className="payment-methods">
                        <label>
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit/Debit Card
                        </label>
                    </div>

                    {paymentMethod === 'card' && (
                        <div className="card-details">
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="Card Number"
                                value={cardDetails.cardNumber}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="expirationDate"
                                placeholder="Expiration Date (MM/YY)"
                                value={cardDetails.expirationDate}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}

                    <Link to="/order"><button type="submit" className="checkout-button">Place Order</button></Link>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
