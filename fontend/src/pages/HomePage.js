import React from 'react';
import { Link } from 'react-router-dom';
import '../components/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {

    return (
        
        <div className="home-container">
            <header className="hero-section">
                <img src={require('../assets/bigimg1.png')} alt="Hero" className="hero-image" />
            </header>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-text">
                        <h2>Welcome to Chocolato</h2>
                        <p>Your one-stop shop for all things chocolate! Indulge in our wide variety of chocolate treats, from rich dark chocolate to creamy milk chocolate. Satisfy your sweet tooth with our exquisite collection.</p>
                    </div>
                    <div className="info-image">
                        <img src={require('../assets/Chocolato.png')} alt="Chocolate" />
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-image">
                        <img src={require('../assets/Abou.png')} alt="Aboutus" />
                    </div>
                    <div className="info-text">
                        <h2>About Chocolato</h2>
                        <p>Chocolato is a company specialized in the creation of Chocolato from the Dark Chocolate to Milky Chocolate ...</p>
                        <Link to="/about"><button className="animated-button">Click here to know more <br /> ▶ </button></Link>
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-text">
                        <h2>Our Shop</h2>
                        <div className="product-grid">
                            <div className="product-card">
                                <div className="product-tumb">
                                    <img src={require('../assets/Dark Chocolate.png')} alt="dc" />
                                </div>
                                <div className="product-details">
                                    <span className="product-category">Dark Chocolate, Cacao</span>
                                    <h4 style={{ fontFamily: 'Cherio, sans-serif', fontSize: '30px' }}>Dark Chocolate</h4>
                                    <p>Dark Chocolate flavour of real and high quality of cacao with 90% pure cacao</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price">150 MAD</div>
                                        <div className="product-links">
                                            <Link to="/shop">
                                                <i className="fas fa-shopping-cart"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="product-tumb">
                                    <img src={require('../assets/Oreo Chocolate.png')} alt="oc" />
                                </div>
                                <div className="product-details">
                                    <span className="product-category">Biscuts, Cacao, Dark Chocolate</span>
                                    <h4 style={{ fontFamily: 'Cherio, sans-serif', fontSize: '30px' }}>Oreo Chocolate</h4>
                                    <p>Oreo Chocolate flavour of oreo and pure taste quality of caco with 60%</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price">100 MAD</div>
                                        <div className="product-links">
                                        <Link to="/shop">
                                                <i className="fas fa-shopping-cart"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card">
                                <div className="product-tumb">
                                    <img src={require('../assets/Strawberry Chocolate.png')} alt="wc" />
                                </div>
                                <div className="product-details">
                                    <span className="product-category">White Chocolate, Vanilla Flavor</span>
                                    <h4 style={{ fontFamily: 'Cherio, sans-serif', fontSize: '30px' }}>White Chocolate</h4>
                                    <p>Strawberry Chocolate with flavour of Strawberry and pure 56% of Cacao.</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price">120 MAD</div>
                                        <div className="product-links">
                                        <Link to="/shop">
                                                <i className="fas fa-shopping-cart"></i>
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/shop"><button>Click to know more <br /> ▶ </button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-text">
                        <h2>Contact us</h2>
                        <p>If you willing to contact don't be shy and send us message and we welcoming your suggestionns</p>
                        <Link to="/contact"><button>Click here to be able to contact us <br /> ▶ </button></Link>
                    </div>
                    <div className="info-image">
                        <img src={require('../assets/Conta.png')} alt='cont'/>
                    </div>
                </div>
            </section>
            <section className="brown-container">
                <div className="brown-container-content">
                    <h1 className="brown-container-logo">Chocolato</h1>
                    <div className="brown-container-text">
                    <p>&copy; 2024 Chocolato. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
