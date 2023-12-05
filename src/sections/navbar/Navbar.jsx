import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navabr">
      <div className="container">
        <div className="nav_wrapper">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/category">category</NavLink>
              </li>
              <li>
                <NavLink to="/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">signup</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="search">
            <div>
              <input
                type="text"
                className="serach_input"
                placeholder="Serach Here"
              />
            </div>
            <div>
              <IoIosSearch className="search_icon" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
