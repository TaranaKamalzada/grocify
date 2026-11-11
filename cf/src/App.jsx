import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Categories from './categories/Categories';
import './App.css';

export default function App() {
  return (
    <div className="main-layout">
      <Header />
      <Hero />
      <Categories />
    </div>
  );
}