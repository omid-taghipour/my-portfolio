import React from "react";
import "./footer.css";

const start_year = 2023;
const current_year = new Date().getFullYear();

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <p>
        &copy;{" "}
        {start_year !== current_year
          ? start_year + " - " + current_year
          : start_year}{" "}
        | Omid Taghipour | v.{props.version}
      </p>
    </footer>
  );
};

export default Footer;
