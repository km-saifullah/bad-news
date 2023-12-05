import React from "react";
import { Link } from "react-router-dom";
import "./footerlink.css";

const FooterLink = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  route1,
  route2,
  route3,
  route4,
  route5,
}) => {
  return (
    <div className="footer_link">
      <ul>
        <li>
          <Link to={route1}>{link1}</Link>
        </li>
        <li>
          <Link to={route2}>{link2}</Link>
        </li>
        <li>
          <Link to={route3}>{link3}</Link>
        </li>
        <li>
          <Link to={route4}>{link4}</Link>
        </li>
        <li>
          <Link to={route5}>{link5}</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
