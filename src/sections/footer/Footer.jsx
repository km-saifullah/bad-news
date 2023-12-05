import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterLink from "../../components/footerlink/FooterLink";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_info">
            <div className="logo">
              <a href="#">
                <img src="./logo.svg" alt="" />
              </a>
            </div>
            <p className="footer_details">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized.
            </p>
            <div className="follow">
              <h5>Follow Us</h5>
              <div className="footer_icon">
                <div className="social_icon">
                  <FaFacebookF />
                </div>
                <div className="social_icon">
                  <FaTwitter />
                </div>
                <div className="social_icon">
                  <FaYoutube />
                </div>
                <div className="social_icon">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div className="footer_links">
            <div>
              <h5 className="footer_title">Main</h5>
              <FooterLink
                link1="home"
                route1="/"
                link2="contact"
                route2="/contact"
                link3="login"
                route3="/login"
                link4="signup"
                route4="/signup"
                link5="business"
                route5="/"
              />
            </div>
            <div>
              <h5 className="footer_title">About US</h5>
              <FooterLink
                link1="About Us"
                route1="/about"
                link2="our teams"
                route2="/"
                link3="career"
                route3="/"
                link4="advertise"
                route4="/"
                link5="copyright"
                route5="/"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
