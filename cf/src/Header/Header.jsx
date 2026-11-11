import React from 'react';
import './Header.css';
 import gr from '../assets/gr.png';
  import sl from '../assets/sl.png';
export default function Header() {
  return (
    <header className="header-container">
      <div className="logo-box">
  
<img src={gr} alt="" />
      
      </div>

      <div className="search-bar">
        <select className="search-select">
          <option>All Categories</option>
        </select>
        <input type="text" placeholder="Search.." className="search-input" />
        <button type="button" className="search-button">
          <svg className="icon-sm" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="user-actions">
        <button type="button" className="signin-btn">Sign in</button>
 
       
       
        <img src={sl} alt="" />
      </div>
    </header>
  );
}