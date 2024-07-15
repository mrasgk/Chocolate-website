import React from 'react';
import '../components/AboutUsPage.css';

const AboutUsPage = () => {
    return (
        <div>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-text">
                        <h2>What is Chocolato</h2>
                        <p>Chocolato is a company that made in 2024 by Rachid Alaoui Selsouli and Meryam Sabri and Sara Bensassi, the Chocolato sell the hight quality of Chocolate that is made by love and also that will let the client ne addicted to this chocolate and enjoy the real taste of the Cacao </p>
                    </div>
                    <div className="info-image">
                        <img src={require('../assets/img1.png')} alt="img2" />
                    </div>
                </div>
            </section>
            <section className="info-section">
                <div className="info-container">
                    <div className="info-image">
                        <img src={require('../assets/img2.png')} alt="img2" />
                    </div>
                    <div className="info-text">
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide the best quality of chocolate that will make the client feel the joy and happiness, feel the best taste of chocolate and make him have nostalgie of some of the chocolates that he tastes in past</p>
                    </div>
                </div>
            </section>
            <section className="info-section">
            <div className="info-container">
                <div className="info-text">
                    <h2>Our Vision</h2>
                    <p>Our vision is to be the best chocolate company in the world, and to make a worldwide product and the best product in all the market</p>
                </div>
                <div className="info-image">
                    <img src={require('../assets/img3.png')} alt="img3" />
                </div>
            </div>
            </section>
            <section className="info-section">
            <div className="info-container">
                <div className="info-image">
                    <img src={require('../assets/img4.png')} alt="img4" />
                </div>
                <div className="info-text">
                    <h2>Our Values</h2>
                    <p>Our values are the quality, the love, the passion, the innovation and taste</p>
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

export default AboutUsPage;
