import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ShopPage from './pages/ShopPage';
import ContactUsPage from './pages/ContactUsPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity - 1;
                if (newQuantity <= 0) {
                    return null;
                } else {
                    return { ...item, quantity: newQuantity };
                }
            }
            return item;
        }).filter(Boolean);
        setCart(updatedCart);
    };

    return (
        <Router>
            <div className="App">
                <Navbar cart={cart} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} />} />
                    <Route path="/order" element={<OrderConfirmation />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
