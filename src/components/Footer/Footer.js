import React from "react";
import "./Footer.css";

const Footer = ({ bgColor }) => {
  const mystyle = {
    backgroundColor: bgColor,
    marginTop: "200px",
  };

  const bg = {
    // background: `url("/image/me2.jpg") no-repeat center center/cover`,
    height: "90%",
    width: "90%",
    gridColumn: "4 / span 6",
    gridRow: "1 / span 4",
    filter: "grayscale(100%)",
    // border: "5px solid #fff",
    margin: "50px -50px",
  };

  return (
    <footer style={mystyle}>
      <h1 className="footer-big-heading">Contact </h1>
      <h2 className="footer-med-heading">
        Let's create something great together.
      </h2>
      <h2 className="footer-med-heading">Get in touch:</h2>
      <a className="mail" href="mailto: amirtaba69@gmail.com">
        amirtaba69@gmail
      </a>
      <div className="img" style={bg}></div>
      <hr style={{ width: "100%", margin: "auto" }} />
      <div className="social">
        <p>Created By Amir</p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              linkedin
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
