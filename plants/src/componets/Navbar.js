import React from "react";
import "./Navbar.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import imglogo from "../images/imglogo.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">
          <img src={imglogo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <Link to="/shop">
                <li className="nav-item">
                  <a>Shop</a>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item">
                  <a>About</a>
                </li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">
                  <a>Contact</a>
                </li>
              </Link>
              <Link to="/cart">
                <li className="nav-item">
                  <a>Cart</a>
                </li>
              </Link>
              <Link to="/upload">
                <li className="nav-item">
                  <a>Upload</a>
                </li>
              </Link>
              <Link to="/update">
                <li className="nav-item">
                  <a>update</a>
                </li>
              </Link>
            </ul>

            <div className="icon">
              <FaFacebook className="iname" size={30} />
              <FaInstagram className="iname" size={30} />
              <FaYoutube className="iname" size={30} />
              <FaShopify className="iname" size={30} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
