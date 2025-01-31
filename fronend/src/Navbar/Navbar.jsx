import React from 'react';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/" className="navbar-logo-link">
                    <img src="Logo.png" alt="logo" className="navbar-logo-img" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="/Menu" className="navbar-links-item">Menu</a></li>
                <li><a href="/Aboutus" className="navbar-links-item">About us</a></li>
                <li><a href="/Why" className="navbar-links-item">Why La Mansa</a></li>
                <li><a href="/contact" className="navbar-links-item">Contact</a></li>
                <li><a href="/Gallery" className="navbar-links-item">Gallery</a></li>
                <li><a href="/Contacts" className="navbar-links-item">Contacts</a></li>
                
                {/* ไอคอน */}
                <div className="navbar-icons">
                    <FaShoppingCart className="icon" />
                </div>
                
                {/* ปุ่ม Book a Table */}
                <div className="navbar-button">
                    <a href="/book" className="book-table-btn">Book a Table</a>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;