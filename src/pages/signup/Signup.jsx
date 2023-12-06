import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./signup.css";

const Signup = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="login_wrapper">
          <div className="login_info">
            <h2>Sign Up</h2>
            <div className="login_status">
              <p>Already a Member?</p>
              <Link to="/login">Sign In</Link>
            </div>
          </div>
          <div className="social_login">
            <button className="facebook">
              <FaFacebookF className="icon" /> Sign Up with Facebook
            </button>
            <button className="facebook twitter">
              <FaTwitter className="icon" /> Sign Up with Facebook
            </button>
            <p className="alternate">OR</p>
          </div>
          <div className="manual_login">
            <p>Name</p>
            <input type="text" placeholder="Enter your name" />
            <p>Email Address</p>
            <input type="text" placeholder="Enter your email" />
            <p>Password</p>
            <input type="text" placeholder="enter your password" />
          </div>
          <div className="important_info">
            <div className="remember_me">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div>
              <p className="forgot_pass">Forgot Password</p>
            </div>
          </div>
          <div className="social_login login_btn">
            <button className="facebook">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
