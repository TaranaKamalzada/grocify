import React from 'react';
import './Hero.css';
import vegImg from '../assets/basket.png';
export default function Hero() {
  return (
    <section className="hero-container">
      <nav className="hero-nav">
        <button type="button" className="hero-nav-item active">🏠 Home</button>
        <button type="button" className="hero-nav-item">🔥 Hot Deals</button>
        <button type="button" className="hero-nav-item">🏷️ Promotions</button>
        <button type="button" className="hero-nav-item">ℹ️ About</button>
        <button type="button" className="hero-nav-item">👤 Contact</button>
      </nav>

      <div className="hero-content">
        <div className="hero-text-box">
          <h1 className="hero-title">Grocify Your Life.</h1>
          <p className="hero-subtitle">Fresh finds, Fast delivery, Zero hassle.</p>
          <button type="button" className="shop-btn">Shop Now</button>
        </div>

        <div className="hero-image-box">
          <img
            src={vegImg}
            alt="Grocery Basket"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}