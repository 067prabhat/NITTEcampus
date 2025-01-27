import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/public/images/nitt.png" alt="" />
        NIT Trichy E-Campus
        
        </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/payment">Payment</a></li>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <li><a href="/login">Login</a></li>
        )}
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
        <br /> <br /> <br /> <br />
      </div>
    </nav>
  );
};

export default Navbar;