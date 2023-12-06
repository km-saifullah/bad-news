import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <section className="not_found">
      <div className="container">
        <div className="notfound_wrapper">
          <div className="not_found-img">
            <img src="/not-found.webp" alt="" />
          </div>
          <div>
            <h2 className="error_text">Page Not Found</h2>
            <p className="error_note">You Entered A Wrong Address..!</p>
            <div className="back_home">
              <Link className="common_btn">Back To Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
