import React, { useState } from 'react';
import '../components/ShopPage.css';

const ShopPage = ({ addToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const products = [
        {
            id: 1,
            img: require('../assets/Dark Chocolate.png'),
            alt: "dc",
            category: "Dark Chocolate, Cacao",
            name: "Dark Chocolate",
            description: "Dark Chocolate flavour of real and high quality of cacao with 90% pure cacao",
            price: 150
        },
        {
            id: 2,
            img: require('../assets/Oreo Chocolate.png'),
            alt: "oc",
            category: "Biscuts, Cacao, Dark Chocolate",
            name: "Oreo Chocolate",
            description: "Oreo Chocolate flavour of oreo and pure taste quality of caco with 60%",
            price: 100
        },
        {
            id: 3,
            img: require('../assets/Strawberry Chocolate.png'),
            alt: "sc",
            category: "Cacao, Dark Chocolate, Fruits",
            name: "Strawberry Chocolate",
            description: "Strawberry Chocolate with flavour of Strawberry and pure 56% of Cacao.",
            price: 120
        },
        {
            id: 4,
            img: require('../assets/Milky Chocolate.png'),
            alt: "mc",
            category: "Milk Chocolate, Milk",
            name: "Milky Chocolate",
            description: "Milky Chocolate taste of a delsious chocolate with the tast of the best quality of milk",
            price: 80
        },
        {
            id: 5,
            img: require('../assets/Cookies Chocolate.png'),
            alt: "cc",
            category: "Biscuts, Cookies, Dark Chocolate, Caco",
            name: "Cookies Chocolate",
            description: "Cookies Chocolate with the taste of cookies and milk chocolate with a pure Cacao",
            price: 170
        },
        {
            id: 6,
            img: require('../assets/Coffee Chocolate.png'),
            alt: "coc",
            category: "Coffee, Dark Chocolate",
            name: "Coffee Chocolate",
            description: "Coffee Chocolate with the taste of Colombian coffee and dark chocolate with a pure Dominican Cacao",
            price: 180
        },
        {
            id: 7,
            img: require('../assets/Caramel Chocolate.png'),
            alt: "cac",
            category: "Caramel",
            name: "Caramel Chocolate",
            description: "Caramel Chocolate with the taste of the best Caramel in the market and with pure Cacao",
            price : 170
        },
        {
            id: 8,
            img: require('../assets/Milky Oreo.png'),
            alt: "mo",
            category: "Milk Chocolate, Biscuts",
            name : "Milky Oreo",
            description: "Milky Oreo with the tast of the oreo and the pure and good quality of milk",
            price: 150
        },
        {
            id: 9,
            img: require('../assets/Milky Strawberry.png'),
            alt: "sm",
            category: "Milk Chocolate, Fruits",
            name: "Milky Strawberry",
            description: "Milky Strawberry with the taste of delicious and fresh Strawberry and good quality of milk",
            price: 140
        },
        {
            id: 10,
            img: require('../assets/Milky Caramel.png'),
            alt: "mc",
            category: "Milk Chocolate, Caramel",
            name: "Milky Caramel",
            description: "Milky Caramel best taste of the best quality of carmel and the most pure milk",
            price: 160
        },
    ];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const filteredProducts = products.filter(product => {
        return (
            (categoryFilter === '' || product.category.includes(categoryFilter)) &&
            (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div>
            <div className="navbar">
                <button onClick={() => handleCategoryFilter('')}>All</button>
                <button onClick={() => handleCategoryFilter('Dark Chocolate')}>Dark Chocolate</button>
                <button onClick={() => handleCategoryFilter('Milk Chocolate')}>Milk Chocolate</button>
                <button onClick={() => handleCategoryFilter('Biscuts')}>Biscuits</button>
                <button onClick={() => handleCategoryFilter('Cookies')}>Cookies</button>
                <button onClick={() => handleCategoryFilter('Milk')}>Milk</button>
                <button onClick={() => handleCategoryFilter('Fruits')}>Fruits</button>
                <button onClick={() => handleCategoryFilter('Caramel')}>Caramel</button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className="product-grid">
                {filteredProducts.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-tumb">
                            <img src={product.img} alt={product.alt} />
                        </div>
                        <div className="product-details">
                            <span className="product-category">{product.category}</span>
                            <h4 style={{ fontFamily: 'Cherio, sans-serif', fontSize: '30px' }}>{product.name}</h4>
                            <p>{product.description}</p>
                            <div className="product-bottom-details">
                                <div className="product-price">{product.price} MAD</div>
                                <div className="product-links">
                                    <button onClick={() => addToCart(product)}>
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
