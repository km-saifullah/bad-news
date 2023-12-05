import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navabr">
      <div className="container">
        <div className="nav_wrapper">
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">category</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">login</a>
              </li>
              <li>
                <a href="#">contact</a>
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
