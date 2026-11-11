import React from 'react';
import './Categories.css';
import veg from '../assets/vegetables.png';

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 2,
      name: 'Fruits',
      image: 'https://www.figma.com/design/Ua6UyarTXSAYymy3mIs5el/Grocify----landing-page--Community-?node-id=33-33&t=L97mdxBVkqV7DCa8-4',
    },
    {
      id: 3,
      name: 'Cold Drinks',
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 4,
      name: 'Chocolates',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <section className="categories-section">
      <h2 className="categories-title">Explore Our Categories</h2>

      <div className="categories-card-wrapper">
        <button type="button" className="arrow-btn left-arrow">&lt;</button>

        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-img-box">
                <img src={veg} alt={cat.name} className="category-img" />
              </div>
              <div className="category-btn">{cat.name}</div>
            </div>
          ))}
        </div>

        <button type="button" className="arrow-btn right-arrow">&gt;</button>
      </div>
    </section>
  );
}