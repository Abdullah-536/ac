import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";


import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  const [cartCount, setCartCount] =useState(0)
  
 const updateCartCount = () => {
    let Element = JSON.parse(localStorage.getItem("setData")) || []; // Handle null case
    const count = Element.reduce((total, item) => total + item.quantity, 0); // Correct summing method
    setCartCount(count);
  };


  useEffect(()=>{
    updateCartCount();
    
  },[])
  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>
      <div className="menu-icon">☰</div>
      <ul className="nav-links">
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li className="dropdown">
          <NavLink to="#">Mobile</NavLink>
          <ul className="dropdown-menu">
            <li className="sub-dropdown">
              <NavLink to="#">Samsung</NavLink>
              <ul className="sub-dropdown-menu">
                <li><NavLink to="/samsung-a-series">A Series</NavLink></li>
                <li><NavLink to="/samsung-s-series">S Series</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/apple">Apple</NavLink></li>
            <li><NavLink to="/huawei">Huawei</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="#"><FaShoppingCart /> {cartCount}</NavLink></li>
      </ul>

    </nav>
  );
};
