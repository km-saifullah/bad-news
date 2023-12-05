import React from "react";
import CommonBtn from "../../components/CommonBtn";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="logo">
            <a href="#">
              <img src="./logo.svg" alt="Logo Not Found" />
            </a>
          </div>
          <div className="header_btn">
            <CommonBtn title="Login" />
            <CommonBtn title="Become a Member" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
