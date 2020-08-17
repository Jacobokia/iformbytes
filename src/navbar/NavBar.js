import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactNavbar } from "react-responsive-animate-navbar";
import { FaAlignRight } from "react-icons/fa";
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div className="navBar">
        {/* <button onClick={this.Toggle}>
          <FaAlignRight />
        </button> */}

        <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
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
      </div>
    );
  }
}
