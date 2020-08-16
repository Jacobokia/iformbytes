import React, { Component } from "react";
import Logo from "../assets/download.png";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <label className="logo">LOGO HERE</label>
        <ul className="ulnav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login as Admin</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
