import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ cart }) => {
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    Chocolato
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/about">About Us</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="cart-icon">
                <Link to="/cart" className="cart-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="animated-cart-icon" />
                    {cartItemCount > 0 && <span className="cart-counter">{cartItemCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
