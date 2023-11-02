import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { Component, useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <a href="index"><img src="Assets/img/GreenOccasion.png" alt="" className="img-fluid" /></a>
          </div>

          <nav id="navbar" className='navbar'>
            <i className="bi bi-list mobile-nav-toggle" onClick={handleShowNavbar}></i>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li><a className="active " href="home">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

          </nav>

        </div>
      </header>

    </div>


  );
}

export default Header;